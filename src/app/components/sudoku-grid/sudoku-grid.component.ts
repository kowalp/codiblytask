import { ValidationService } from './../../services/validation.service';
import { Subject } from 'rxjs';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NumberButton, Sudoku, SudokuField } from '../../interfaces/sudoku.interface';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sudoku-grid',
  templateUrl: './sudoku-grid.component.html',
  styleUrls: ['./sudoku-grid.component.scss']
})
export class SudokuGridComponent implements OnInit, OnDestroy {
  validate: boolean;
  activeField: SudokuField;
  numberList: NumberButton[] = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6},
    {number: 7},
    {number: 8},
    {number: 9}
  ];

  @Input() sudoku: Sudoku;
  @Output() checkForFinish = new EventEmitter<void>();
  private $unsubscribe: Subject<void> = new Subject<void>();
  constructor(private vs: ValidationService) {}

  ngOnInit(): void {
    this.vs.getValidationAsObservable().pipe(takeUntil(this.$unsubscribe))
      .subscribe((validate: boolean) => {
        this.validate = validate;
      });
  }

  setNumber(field: SudokuField, number: number) {
    field.value = number;
    this.activeField = field;
    this.checkForFinish.emit();
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}


