import {IAdress} from "./IAdress";

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: number,
  address: IAdress

}
