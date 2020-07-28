import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { ShowNotesRoutingModule } from './show-notes-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ShowNotesComponent],
  imports: [CommonModule, ShowNotesRoutingModule, MaterialModule],
})
export class ShowNotesModule {}
