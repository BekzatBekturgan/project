import { Product } from './product';

export class ProductModel{
    id: number;
    name: string;
    price: number;
    description: string;
    image:string;
    sale:boolean;
    categoryId:number;

    
}

export class CategoryModel{
    id: number;
    name: string;
}

export class LoginResponse{
    token:string;
}

export class User{
    id: number;
    username: string;
    password: string;
}

export class Order{
    id: number;
    user:User;
    items:Product;
}