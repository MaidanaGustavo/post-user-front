import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {


  @Output()
  resp = new EventEmitter();

  constructor(private  userService: UserService) { }
  nickname : String = '';
  password : String = '';


  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.nickname,this.password).subscribe(res=>{
      console.log(res);
     localStorage.setItem('token',`${res.response[0].token}`);
     this.resp.emit({msg:'ok',username:res.response[0].username});
    })

  }
}
