import { Component, Input, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { Post, PostRequestDTO } from '../post/post.models';
import { PostService } from '../post/post.service';
import { StartpageComponent } from '../startpage/startpage.component';

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
  constructor(private postService : PostService,private postComponent : PostComponent,private startPage : StartpageComponent) { }

  ngOnInit(): void {
  }


  update(){
   let postUpdate : PostRequestDTO = new PostRequestDTO();
   postUpdate.description = this.description;
   postUpdate.title = this.title;
   this.postService.updatePost(this.post.id,postUpdate).subscribe(res=>{
      this.postComponent.returnUpdatePost();
   })
   this.title = '';
   this.description = '';
  }

  save(){
    let newPost: PostRequestDTO = new PostRequestDTO();
    newPost.description = this.description;
    newPost.title = this.title;
    newPost.idUser = this.idUser;

    this.postService.savePost(newPost).subscribe(res=>{
      this.startPage.reload();
    })

    this.idUser = 0;
    this.title = '';
   this.description = '';
  }

}
