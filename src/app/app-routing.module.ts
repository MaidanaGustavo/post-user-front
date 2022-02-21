import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from  './pages/not-found/not-found.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes : Routes = [
    {path : '',component : LoginPageComponent},
    {path:':nickname',component: UserPageComponent,canActivate :[AuthGuardService]},
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
