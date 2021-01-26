import { ValidationService } from './services/validation.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { Sudoku } from './interfaces/sudoku.interface';
import { SudokuSolver } from '@jlguenego/sudoku-generator';
export type Difficulty = 'easy' | 'moderate' | 'hard' | 'expert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sudoku: Sudoku;
  validation: boolean = false;
  timer: number;
  private timerSubscription: Subscription;

  constructor(private dialog: MatDialog, private validationService: ValidationService) {}

  ngOnInit(): void {}

  onStartGame(): void {
    // If you want to use your own set in JSON just change SudokuSolver to your json...
    this.sudoku = SudokuSolver.generate()
      .map(row => row.map(number => {
        const random = Math.random() < 0.5 ;
        return({
        answer: number,
        value: random ? number : '',
        readonly: random
      })}));
      this.startTimer();
  }

  validate(): void {
    this.validation = !this.validation;
    this.validationService.setValidation(this.validation);
  }

  onGameFinished(finished: boolean): void  {
    this.dialog
      .open(DialogComponent, {data: {time: this.timer, won: finished}})
      .afterClosed()
      .subscribe(() => {
        if (finished) {
          this.timerSubscription.unsubscribe();
          this.onStartGame();
        }
      });
  }

  private startTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.timerSubscription = timer(0, 1000).subscribe(time => this.timer = time);
  }
}

