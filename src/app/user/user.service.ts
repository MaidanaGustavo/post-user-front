import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable()
export class UserService{

  private apiBase : String = environment.api.base_path;

  constructor(private http : HttpClient) {}

  listarTodosOsPost(token:String) {
    const obj = {
      'Content-Type': 'application/json',
      'bearer' : `${token}`
    }
    const httpOptions = {
      headers: new HttpHeaders(obj),
    };
    return  this.http.get<ResponseModelUserNick>(`${this.apiBase}/posts`,httpOptions).pipe();
  }
  login(nickname: String, password:String){
    return this.http.post<ResponseModelUserLogin>(`${this.apiBase}/users/login`,{
      nickname,
      password
    }).pipe();
  }
  listarUsuariosPeloNickName(nickname:String,token:String){
    const obj = {
      'Content-Type': 'application/json',
      'bearer' : `${token}`
    }
    const httpOptions = {
      headers: new HttpHeaders(obj),
    };

    return this.http.get<ResponseModelUserNick>(`${this.apiBase}/users/findbynickname/${nickname}`,httpOptions).pipe();
  }
}


 class ResponseModelUserNick{
  statusCode!: Number ;
  response!: UserNickName[];
  message!: String;
}

class ResponseModelUserLogin{
  statusCode!: Number ;
  response!: Token[];
  message!: String;
}

class Token{
  token!: String;
  username!: String;
}

class UserNickName{
  id!: Number;
  name! : String;
  nickname! : String;
}

