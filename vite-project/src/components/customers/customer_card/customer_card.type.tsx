interface ICustomerCard {
    Customer: ICustomer;
}

interface ICustomer {
    ID: number;
    CreateDate:string;
    src:string;
    name:string;
}

export default ICustomerCard;