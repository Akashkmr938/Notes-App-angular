import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

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

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    this.httpService.get('notes', userData.email).subscribe((data) => {
      this.notes = data;
      this.dataSource = new MatTableDataSource(this.notes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editNote(event) {
    console.log(event);
  }
}
