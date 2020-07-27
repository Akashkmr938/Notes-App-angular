import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  notesForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
