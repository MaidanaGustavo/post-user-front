export interface IPost{
  id: Number;
  title: String;
  description : String;
  idUser: Number;
  createdAt : Date;
  isEdited : Number;
}

export class Post implements IPost{
  id!: Number;
  title!: String;
  description!: String;
  idUser!: Number;
  isEdited!: Number;
  createdAt!: Date;
}


export class PostRequestDTO {
  title!: String;
  description!: String;
  idUser!: Number;
}

