import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.scss'],
})
export class ShowNotesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  panelOpenState = false;
  notes = [];
  pages: number;
  displayedColumns = ['title', 'description', 'crud'];
  dataSource: MatTableDataSource<any>;
  showEditCard = false;
  notesForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  userData: any;
  editedNote: any;

  constructor(
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('user'));
    this.httpService.get('notes', this.userData.email).subscribe((data) => {
      this.notes = data;
      this.dataSource = new MatTableDataSource(this.notes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editNote(editedNote: any) {
    this.showEditCard = true;
    this.notesForm.controls.title.patchValue(editedNote.title);
    this.notesForm.controls.description.patchValue(editedNote.description);
    this.editedNote = editedNote;
  }

  saveNote() {
    console.log(this.editedNote);
    const payload = {
      title: this.notesForm.controls.title.value,
      description: this.notesForm.controls.description.value,
      email: this.userData.email,
      _id: this.editedNote._id,
    };

    this.httpService.put('editNote', payload).subscribe((res) => {
      this.snackBar.open('Note Edited Successfully', 'Close', {
        duration: 2000,
      });
      this.notes = res;
      this.dataSource = new MatTableDataSource(this.notes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.showEditCard = false;
    });
  }

  deleteNote(editedNote) {
    this.httpService.delete('deleteNote', editedNote).subscribe((res) => {
      this.snackBar.open('Note Deleted Successfully', 'Close', {
        duration: 2000,
      });
      this.notes = res;
      this.dataSource = new MatTableDataSource(this.notes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
