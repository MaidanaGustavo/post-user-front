import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post/post.service';
import { PostEditComponent } from './post-edit/post-edit.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { ValidacaoNicknameDisponivelComponent } from './validacoes-form/validacao-nickname-disponivel/validacao-nickname-disponivel.component';
import { ValidacaoNicknameIndisponivelComponent } from './validacoes-form/validacao-nickname-indisponivel/validacao-nickname-indisponivel.component';



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
    ValidacaoNicknameDisponivelComponent,
    ValidacaoNicknameIndisponivelComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [PostService,UserService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
