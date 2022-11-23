import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WordListComponent} from "./dictionary/word-list/word-list.component";
import {WordDetailComponent} from "./dictionary/word-detail/word-detail.component";

const routes: Routes = [{
  path: 'model/list',
  component: WordListComponent,
  children: [{
    path: ':id',
    component: WordDetailComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
