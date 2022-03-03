import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { comparaValidator } from '../validações/compara-validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  cadastroForm: FormGroup;
  mensagens = {
    nome: [
      {tipo: 'required', mensagem: 'O Campo é obrigatório!'},
      {tipo: 'minlength', mensagem: 'O Campo precisa ter pelo menos 3 caracteres!'},
    ],
    email: [
      {tipo: 'required', mensagem: 'O Campo é obrigatório!'},
      {tipo: 'email', mensagem: 'Email inválido!'}
    ],
    nickname: [
      {tipo: 'required', mensagem: 'O Campo é obrigatório!'},
      {tipo: 'minlength', mensagem: 'O Campo precisa ter pelo menos 3 caracteres!'}
    ],
    senha: [
      {tipo: 'required', mensagem: 'O Campo é obrigatório!'},
      {tipo: 'minlength', mensagem: 'O Campo precisa ter pelo menos 6 caracteres!'}
    ],
    confirmarSenha: [
      {tipo: 'required', mensagem: 'O Campo é obrigatório!'},
      {tipo: 'minlength', mensagem: 'O Campo precisa ter pelo menos 6 caracteres!'},
      {tipo: 'comparacao', mensagem: 'As senhas não coincidem!'}
    ]
  }
  constructor(private userService : UserService, private fg: FormBuilder) {
    this.cadastroForm = this.fg.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      nickname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmarSenha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    },
      {
        validator: comparaValidator('senha', 'confirmarSenha')
      }
    );
   }

  @Input() nickname : String = '';
  @Input() public password : String = '';
  @Input() public statusc : Number = 0;
  @Input() public resultValid : Boolean | undefined;

  ngOnInit(): void {

    

  }

  buttonInvalid(){
    window.document.getElementById('buttonIsValid')!.style.display = 'none';
  }

  validInit(){
    window.document.getElementById('teste')!.style.display = 'none';
  }
  validInitOf(){
    window.document.getElementById('teste')!.style.display = 'block';
  }
  validacaoNickname(): void {
    
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

  cadastrarUsuario(){
    console.log('Formulário: ', this.cadastroForm?.valid);
  }

}
