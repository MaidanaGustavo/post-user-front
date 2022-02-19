import { ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post/post.models';
import { PostService } from '../post/post.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
@Injectable()
export class StartpageComponent implements OnInit {

  constructor(private postService : PostService,private activatedRoute: ActivatedRoute,
    private userService : UserService) { }

  posts : Post[] = [];
  displayAdd : String = 'none';
  id : Number = 0;
  ngOnInit(): void {
    const nickname = this.activatedRoute.snapshot.params['nickname'];

    this.userService.listarUsuariosPeloNickName(nickname).subscribe(res=>{
      this.id = res.response[0].id;
      this.postService.listarPostsByUser(res.response[0].id).subscribe(res=>{
        console.log(res);
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

}
