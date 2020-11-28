import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todo = [
    'Go to gym',
    'Eat lunch',
    'Take a nap',
  ];

  done = [
    'Assignment',
    'Coding practice',
    'Maths syllabus',
  ];
  @Input() listData: any;
  cardForm: FormGroup;
  public showCardEditor(showCardEditor) {
  }

  ngOnInit() {

  }
  //function for listening to the event 

  drag(event: CdkDragDrop<string[]>) {

    //if movement if within the same container 

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data, event.previousIndex, event.currentIndex);
    }

    //if movement if to other containers 

    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  };

}
