import { DialogComponent } from './components/dialog/dialog.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SudokuBoardComponent } from './components/sudoku-board/sudoku-board.component';
import { SudokuGridComponent } from './components/sudoku-grid/sudoku-grid.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SudokuBoardComponent,
    SudokuGridComponent,
    FormatTimePipe,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
