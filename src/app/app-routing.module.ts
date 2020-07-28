import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNoteComponent } from '../app/features/create-note/create-note.component';

const routes: Routes = [
  { path: '', component: CreateNoteComponent },
  {
    path: 'show-notes',
    loadChildren: () =>
      import('./features/show-notes/show-notes.module').then(
        (module) => module.ShowNotesModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
