export class ProductModel{
    id: number;
    category:number;
    name: string;
    price: number;
    description: string;
    image:any;
    sale:boolean;
}

export class CategoryModel{
    id: number;
    name: string;
}