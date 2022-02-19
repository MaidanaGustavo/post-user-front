import { Component, Injectable, Input, OnInit } from '@angular/core';
import { StartpageComponent } from '../startpage/startpage.component';
import { Post } from './post.models';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
@Injectable()
export class PostComponent implements OnInit {

  @Input()
  post : Post = new Post();

  editar : Boolean = false;
  displayPost : String = '';

  constructor(private postService:PostService, private startPage : StartpageComponent) {

   }

  ngOnInit(): void {

  }

  deletePost(){
    this.postService.deletePost(this.post.id).subscribe(res=> this.startPage.reload());

  }

  updatePost(){
    const el = document.querySelector('.postItem');
     document.getElementsByClassName('post');
     this.editar = true;
     this.displayPost = 'none';

  }


  returnUpdatePost(){
    this.editar = false;
    document.getElementById('post')!.style.display = 'flex';
    this.startPage.reload();

  }
}