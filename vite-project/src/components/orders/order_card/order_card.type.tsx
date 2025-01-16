interface IOrderCard {
    Order: IOrder
}


interface IOrder {
    ID: number;
    TotalPrice: string;
    CreateDate: string; 
    CustomerID: number;
    Products: IProduct[];
}

interface IProduct {
    src: string;
    ID: number;
    name: string;
    Quantity: number;
}


export default IOrderCard