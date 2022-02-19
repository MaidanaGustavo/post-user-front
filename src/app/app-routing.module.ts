import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartpageComponent } from './startpage/startpage.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes : Routes = [
    {path:':nickname',component: StartpageComponent},
    {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export  class AppRoutingModule { }