import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post, PostRequestDTO } from "./post.models";
import {environment} from '../../environments/environment';
@Injectable()
export class PostService{

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
    return  this.http.get<ResponseModelPost>(`${this.apiBase}/posts`,httpOptions).pipe();
  }

  deletePost(id:Number,token:String){
    const obj = {
      'Content-Type': 'application/json',
      'bearer' : `${token}`
    }
    const httpOptions = {
      headers: new HttpHeaders(obj),
    };
    return  this.http.delete<ResponseModelPost>(`${this.apiBase}/posts/${id}/`,httpOptions).pipe();
  }

  updatePost(id:Number,postUpdate:PostRequestDTO ,token:String ){
    const obj = {
      'Content-Type': 'application/json',
      'bearer' : `${token}`
    }
    const httpOptions = {
      headers: new HttpHeaders(obj),
    };
    return this.http.put<ResponseModelPost>(`${this.apiBase}/posts/${id}/`,postUpdate,httpOptions).pipe()
  }

  savePost(post:PostRequestDTO ,token:String){
    const obj = {
      'Content-Type': 'application/json',
      'bearer' : `${token}`
    }
    const httpOptions = {
      headers: new HttpHeaders(obj),
    };

    return this.http.post<ResponseModelPost>(`${this.apiBase}/posts`,post,httpOptions).pipe()
  }

  listarPostsByUser(id:Number,token:String){
    const obj = {
      'Content-Type': 'application/json',
      'bearer' : `${token}`
    }
    const httpOptions = {
      headers: new HttpHeaders(obj),
    };
    return this.http.get<ResponseModelPost>(`${this.apiBase}/posts/user/${id}`,httpOptions).pipe()
  }
}

export class ResponseModelPost{
  statusCode!: Number ;
  response!: Post[];
  message!: String;
}
