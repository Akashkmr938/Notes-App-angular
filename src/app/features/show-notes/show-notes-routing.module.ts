import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShowNotesComponent } from './show-notes/show-notes.component';

const routes: Routes = [
    {
        path: '',
        component: ShowNotesComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ShowNotesRoutingModule { }
