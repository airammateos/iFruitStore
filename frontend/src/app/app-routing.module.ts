import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/fruits/list/list.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'list', component: ListComponent},
  {path: '404', component: Page404Component },
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
