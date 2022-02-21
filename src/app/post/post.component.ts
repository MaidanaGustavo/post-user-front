import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
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
  @Output()
  resposta = new EventEmitter();

  editar : Boolean = false;
  displayPost : String = '';

  constructor(private postService:PostService) {

   }

  ngOnInit(): void {

  }

  deletePost(){
    this.postService.deletePost(this.post.id,'').subscribe(res=> this.resposta.emit({msg: 'Ok'}));

  }

  updatePost(){
    const el = document.querySelector('.postItem');
     document.getElementsByClassName('post');
     this.editar = true;
     this.displayPost = 'none';
  }


  returnUpdatePost(retorno:any){
    this.editar = false;
    document.getElementById('post')!.style.display = 'flex';
    this.resposta.emit({msg: 'Ok'})

  }
}
