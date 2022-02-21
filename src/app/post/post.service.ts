import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post, PostRequestDTO } from "./post.models";
import {environment} from '../../environments/environment';
@Injectable()
export class PostService{

  private apiBase : String = environment.api.base_path;

  constructor(private http : HttpClient) {}

  listarTodosOsPost(token:String) {
    let headers = new Headers();
    headers.set('Content-Type','application/json');
    headers.set('bearer',`${token}`);
    return  this.http.get<ResponseModelPost>(`${this.apiBase}/posts`).pipe();
  }

  deletePost(id:Number,token:String){
    let headers = new Headers();
    headers.set('Content-Type','application/json');
    headers.set('bearer',`${token}`);

    return  this.http.delete<ResponseModelPost>(`${this.apiBase}/posts/${id}/`).pipe();
  }

  updatePost(id:Number,postUpdate:PostRequestDTO ,token:String ){
    let headers = new Headers();
    headers.set('Content-Type','application/json');
    headers.set('bearer',`${token}`);

    return this.http.put<ResponseModelPost>(`${this.apiBase}/posts/${id}/`,postUpdate).pipe()
  }

  savePost(post:PostRequestDTO ,token:String){
    let headers = new Headers();
    headers.set('Content-Type','application/json');
    headers.set('bearer',`${token}`);

    return this.http.post<ResponseModelPost>(`${this.apiBase}/posts`,post).pipe()
  }

  listarPostsByUser(id:Number,token:String){
    let headers = new Headers();
    headers.set('Content-Type','application/json');
    headers.set('bearer',`${token}`);
    return this.http.get<ResponseModelPost>(`${this.apiBase}/posts/user/${id}`,{headers:{
      bearer : `${token}`
    }}).pipe()
  }
}

export class ResponseModelPost{
  statusCode!: Number ;
  response!: Post[];
  message!: String;
}
