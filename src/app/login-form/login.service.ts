import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UserService } from "../user/user.service";


export class LoginService{

    private apiBase : String = environment.api.base_path;

    constructor(private http : HttpClient, private userService : UserService) {}

    buscarNickname(nickname:String){

      const nick = this.userService.listarUsuariosPeloNickName(nickname,'');

    }

}
