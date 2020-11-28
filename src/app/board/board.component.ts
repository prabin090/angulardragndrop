import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  listArray: any = [
    {
      "listname": 'todo',
      "listData": [
        'Go to gym',
        'Eat lunch',
        'Take a nap',
      ]
    },
    {
      "listname": 'done',
      "listData": [
        'Assignment',
        'Coding practice',
        'Maths syllabus',
      ]
    },

  ]
  ngOnInit() {

  }
}
