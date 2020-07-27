import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { ShowNotesRoutingModule } from './show-notes-routing.module';



@NgModule({
  declarations: [ShowNotesComponent],
  imports: [
    CommonModule,
    ShowNotesRoutingModule
  ]
})
export class ShowNotesModule { }
