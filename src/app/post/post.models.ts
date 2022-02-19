export interface IPost{
  id: Number;
  title: String;
  description : String;
  idUser: Number;
}

export class Post implements IPost{
  id!: Number;
  title!: String;
  description!: String;
  idUser!: Number;
}


export class PostRequestDTO {
  title!: String;
  description!: String;
  idUser!: Number;
}

