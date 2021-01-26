import { ValidationService } from './../../services/validation.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  time: number;
  won: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private vs: ValidationService) {
    this.time = data.time;
    this.won = data.gameWon;
  }
  ngOnInit() {
    this.vs.setValidation(true);
  }

}
