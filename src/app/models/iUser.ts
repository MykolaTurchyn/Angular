export interface IUser {
  id:number;
  name:string;
  username:string;
  email:string;
  phone: string;
  address: {
    street:string;
    city:string;
    zipcode:string;
    suite: string;

  }
}
