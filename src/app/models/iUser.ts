export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    city: string;
    suite: string;
    street: string;
    zipcode: string
  }
}
