import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
  notesForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(
    private httpService: HttpService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  saveNote(): void {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    if (!userData) {
      console.log('Please login to continue');
    } else if (!this.notesForm.valid) {
      console.log('Form is not valid');
    } else {
      const payload = {
        title: this.notesForm.controls.title.value,
        description: this.notesForm.controls.description.value,
        email: userData.email,
      };
      this.httpService.post('saveNotes', payload).subscribe(() => {
        this.snackBar.open('Note added successfully', 'Close', {
          duration: 2000,
        });
      });
    }
  }

  routeToShowNotes(): void {
    if (!sessionStorage.getItem('user')) {
      this.snackBar.open('Login to Continue', 'Close', {
        duration: 2000,
      });
    }
    this.router.navigate(['/show-notes']);
  }
}
