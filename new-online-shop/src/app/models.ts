export class ProductModel{
    id: number;
    name: string;
    price: number;
    description: string;
    image:string;
    sale:boolean;
    category:number;
    
}

export class CategoryModel{
    id: number;
    name: string;
}

export class LoginResponse{
    token:string;
}