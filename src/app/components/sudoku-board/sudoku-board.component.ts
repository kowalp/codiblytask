import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sudoku, SudokuField } from '../../interfaces/sudoku.interface';

@Component({
  selector: 'sudoku-board',
  templateUrl: './sudoku-board.component.html',
  styleUrls: ['./sudoku-board.component.scss']
})
export class SudokuBoardComponent {
  @Input() sudoku: Sudoku;
  @Output() finish = new EventEmitter<boolean>();

  noteMode = false;
  activeField?: SudokuField;

  checkFinish(auto: boolean): void {
    this.checkFinished(auto);
  }

  private checkFinished(auto: boolean): void {
    if (this.finished) {
      this.finish.emit(true);
    } else if (!auto) {
      this.finish.emit(false);
    }
  }

  private get finished(): boolean {
    return this.sudoku.every(row => row.every(field => field.value === field.answer));
  }
}
