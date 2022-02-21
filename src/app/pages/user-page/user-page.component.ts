import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post/post.models';
import { PostService } from 'src/app/post/post.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private postService : PostService,private activatedRoute: ActivatedRoute,
    private userService : UserService) { }

  posts : Post[] = [];
  displayAdd : String = 'none';
  id : Number = 0;
  nameUser : String = '';

  ngOnInit(): void {
    const nickname = this.activatedRoute.snapshot.params['nickname'];
    const token = localStorage.getItem('token');
    console.log(token)
    this.userService.listarUsuariosPeloNickName(nickname,`${token}`).subscribe(res=>{
      this.id = res.response[0].id;
      this.nameUser = res.response[0].name;

      this.postService.listarPostsByUser(res.response[0].id,`${token}`).subscribe(res=>{

        for (let index = 0; index < res.response.length; index++) {
          let pos : Post  =res.response[index] ;
           this.posts.push(pos);
        }
      })
    })

  }

  ngOnDestroy() {
    this.posts = [];
    this.displayAdd = 'none';
  }
  addPost(){
    if(this.displayAdd==='none'){
      this.displayAdd = 'flex';
    }else{
      this.displayAdd = 'none';
    }
  }
  reload(){
    this.ngOnDestroy();
    this.ngOnInit();
  }

  recebeRetorno(resposta: any){
    this.reload()
  }

}
