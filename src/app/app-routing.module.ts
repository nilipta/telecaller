import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AHomeComponent} from './components/a-home/a-home.component';
import {BOperatorComponent} from './components/b-operator/b-operator.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AHomeComponent,
    pathMatch:"full"
  },
  {
    path: 'operator/:id',
    component: BOperatorComponent
  },
  {
    path: 'userLogin',
    component: LoginComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children: [{
    path:'',
      component: DashboardComponent
  },
  {
  path:'posts',
  component: PostsComponent 
  }]
}];

*/