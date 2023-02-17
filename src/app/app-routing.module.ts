import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { Search1Component } from './search1/search1.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"update/:id",
    component:UpdateComponent
  },
  {
    path:"add",
    component:AddComponent
  },
  {
    path:"search1",
    component:Search1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
