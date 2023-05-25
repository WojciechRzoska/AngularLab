import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './MyComponents/main/form/form.component';
import { PokemonComponent } from './MyComponents/main/pokemon/pokemon.component';
import { TaskListComponent } from './MyComponents/main/task-list/task-list.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'form', component: FormComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'home', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
