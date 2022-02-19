import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { StartpageComponent } from './startpage/startpage.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post/post.service';
import { PostEditComponent } from './post-edit/post-edit.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    StartpageComponent,
    PostEditComponent,
    NotFoundComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [PostService,PostComponent,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
