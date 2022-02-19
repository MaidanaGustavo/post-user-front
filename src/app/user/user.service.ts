import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class UserService{

  private apiBase : String = 'http://localhost:4567/myapi/v1';

  constructor(private http : HttpClient) {}

  // listarTodosOsPost() {
  //   return  this.http.get<ResponseModel>(`${this.apiBase}/posts`).pipe();
  // }

  listarUsuariosPeloNickName(nickname:String){
    return this.http.get<ResponseModelUserNick>(`${this.apiBase}/users/findbynickname/${nickname}`).pipe();
  }
}


 class ResponseModelUserNick{
  statusCode!: Number ;
  response!: UserNickName[];
  message!: String;
}

class UserNickName{
  id!: Number;
  name! : String;
  nickname! : String;
}
