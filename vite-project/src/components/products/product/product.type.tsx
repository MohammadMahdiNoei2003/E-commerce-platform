interface IProductCard {
    Product: IProduct;
}


interface IProduct {
    ID: number;
    Price: string;
    CreateDate:string;
    src: string;
    name: string;
}

export default IProductCard