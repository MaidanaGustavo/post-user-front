import { Component, EventEmitter, Injectable, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../user/user.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  @Output()
  resp = new EventEmitter();

  constructor(private  userService: UserService) {}
  nickname : String = '';
  password : String = '';
  @Input() public statusc : Number = 0;
  @Input() public resultValid : Boolean | undefined;

  ngOnInit() {
  }

  login() : void{
    this.userService.login(this.nickname,this.password).subscribe(res=>{
      console.log(res);
     localStorage.setItem('token',`${res.response[0].token}`);
     this.resp.emit({msg:'ok',username:res.response[0].username});
    },
    error => {
      if(error.status != 200){
        this.resultValid = false;
      }
    });

  }

  validacaoLogin(): void {
    
    this.userService.listarUsuariosPeloNickName(this.nickname, '').subscribe(res =>{
     this.statusc = res.statusCode;

     if(this.statusc == 200){
       this.resultValid = false;
     }
       
     if(this.statusc != 200){
       this.resultValid = true;
     }
   },
   error => {
     
     if(error.status != 200){
       this.resultValid = false;
     }

     this.resultValid = false;
     
   });
   
 }

}
