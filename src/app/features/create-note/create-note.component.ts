import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SocialAuthService } from 'angularx-social-login';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from 'src/app/services/shared.service';

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
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  saveNote(): void {
    if (!this.sharedService.loginData) {
      console.log('Please login to continue');
    } else if (!this.notesForm.valid) {
      console.log('Form is not valid');
    } else {
      const payload = {
        title: this.notesForm.controls.title.value,
        description: this.notesForm.controls.description.value,
        userToken: this.sharedService.loginData.idToken,
      };
      this.httpService.post('saveNotes', payload).subscribe();
    }
  }
}
