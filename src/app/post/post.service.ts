import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post, PostRequestDTO } from "./post.models";

@Injectable()
export class PostService{

  private apiBase : String = 'http://localhost:4567/myapi/v1';

  constructor(private http : HttpClient) {}

  listarTodosOsPost() {
    return  this.http.get<ResponseModelPost>(`${this.apiBase}/posts`).pipe();
  }

  deletePost(id:Number){
    return  this.http.delete<ResponseModelPost>(`${this.apiBase}/posts/${id}/`).pipe();
  }

  updatePost(id:Number,postUpdate:PostRequestDTO){
    return this.http.put<ResponseModelPost>(`${this.apiBase}/posts/${id}/`,postUpdate).pipe()
  }

  savePost(post:PostRequestDTO){
    return this.http.post<ResponseModelPost>(`${this.apiBase}/posts`,post).pipe()
  }

  listarPostsByUser(id:Number){

    return this.http.get<ResponseModelPost>(`${this.apiBase}/posts/user/${id}`).pipe()
  }
}

export class ResponseModelPost{
  statusCode!: Number ;
  response!: Post[];
  message!: String;
}
