import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor( private route: Router,) { }

  ngOnInit(): void {
  }
  redireciona(resposta:any){
    if(resposta.msg=='ok'){
      this.route.navigate([`${resposta.username}`])
    }
  }

  cadastrar(){

    window.document.getElementById('loginForm')!.style.display = 'none';
    window.document.getElementById('registerForm')!.style.display = 'block';
    window.document.getElementById('criarConta')!.style.display = 'none';
    window.document.getElementById('loginConta')!.style.display = 'flex';

  }

  login(){
    window.document.getElementById('box')!.style.transform  = 'translate3d(2px, 0, 0)';
    window.document.getElementById('loginForm')!.style.display = 'block';
    window.document.getElementById('registerForm')!.style.display = 'none';
    window.document.getElementById('criarConta')!.style.display = 'block';
    window.document.getElementById('loginConta')!.style.display = 'none';

  }

}
