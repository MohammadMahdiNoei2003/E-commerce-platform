import { memo } from "react"
import IOrders from "./orders.type"
import "./orders.css"
import OrderCard from "./order_card"

const Orders = (props: IOrders) => {
    return (
        <div className="Orders_root">
            {Orderes.map((item) => (
                <OrderCard Order={item} />
            ))}
        </div>
    )
}

export default memo(Orders)

const Orderes = [
    {
        ID: 1,
        TotalPrice: "9,000",
        CreateDate: "13 sep , 2022 at 4:39 PM",
        CustomerID: 123456789,
        Products: [
            {
                src:"/images/404.jpg",
                ID: 1,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 2,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 3,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 4,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            }
        ]
    },
    {
        ID: 2,
        TotalPrice: "3,000",
        CreateDate: "13 sep , 2022 at 4:39 PM",
        CustomerID: 123456789,
        Products: [
            {
                src:"/images/test.jpg",
                ID: 1,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 2,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 3,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 4,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            }
        ]
    },
    {
        ID: 3,
        TotalPrice: "3,976,000",
        CreateDate: "13 sep , 2022 at 4:39 PM",
        CustomerID: 123456789,
        Products: [
            {
                src:"/images/404.jpg",
                ID: 1,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 2,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 3,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 4,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            }
        ]
    },
    {
        ID: 4,
        TotalPrice: "54,000",
        CreateDate: "13 sep , 2022 at 4:39 PM",
        CustomerID: 123456789,
        Products: [
            {
                src:"/images/404.jpg",
                ID: 1,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 2,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 3,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            },

            {
                src:"/images/404.jpg",
                ID: 4,
                name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
                Quantity: 2,
            }
        ]
    }
]