import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SocialAuthService } from 'angularx-social-login';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

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
    private authService: SocialAuthService,
    private httpService: HttpService,
    private router: Router
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
        idToken: userData.idToken,
      };
      this.httpService.post('saveNotes', payload).subscribe(() => {
        this.notesForm.reset();
        this.notesForm.updateValueAndValidity();
        console.log(this.notesForm);
      });
    }
  }

  routeToShowNotes(): void {
    this.router.navigate(['/show-notes']);
  }
}
