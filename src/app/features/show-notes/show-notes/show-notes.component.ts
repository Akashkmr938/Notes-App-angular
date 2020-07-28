import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.scss'],
})
export class ShowNotesComponent implements OnInit {
  panelOpenState = false;
  notes: any;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    const userData = JSON.parse(sessionStorage.getItem('user'));

    this.httpService.get('notes', userData.email).subscribe((data) => {
      this.notes = data;
    });
  }
}
