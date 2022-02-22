import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post, PostRequestDTO } from '../post/post.models';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  @Input()
  post : Post = new Post();

  title : String = '';
  description : String ='';

  @Input()
  idUser : Number  = 0;

  @Input()
  saveBtn: Boolean = false;
  @Input()
  updateBtn: Boolean = false;

  @Output()
  retorno = new EventEmitter();


  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }


  update(){
   let postUpdate : PostRequestDTO = new PostRequestDTO();
   postUpdate.description = this.description;
   postUpdate.title = this.title;
   const token = localStorage.getItem('token');
   this.postService.updatePost(this.post.id,postUpdate,`${token}`).subscribe(res=>{
    this.retorno.emit({msg:'ok'});
   })
   this.title = '';
   this.description = '';
  }

  save(){
    let newPost: PostRequestDTO = new PostRequestDTO();
    newPost.description = this.description;
    newPost.title = this.title;
    newPost.idUser = this.idUser;
    const token = localStorage.getItem('token');
    this.postService.savePost(newPost,`${token}`).subscribe(res=>{
      console.log(this.idUser)
      console.log(res)
      this.retorno.emit({msg:'ok'});
    })

    this.idUser = 0;
    this.title = '';
    this.description = '';
  }

}
