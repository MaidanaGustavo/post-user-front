import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post/post.service';
import { PostEditComponent } from './post-edit/post-edit.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthGuardService } from './guards/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostEditComponent,
    NotFoundComponent,
    UserComponent,
    UserPageComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [PostService,UserService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
