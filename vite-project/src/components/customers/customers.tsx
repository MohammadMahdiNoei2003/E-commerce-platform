import "./customers.css"
import ICustomers from "./customers.type"
import { memo } from "react";
import CustomerCard from "./customer_card";

const Customers = (props: ICustomers) => {
    return (
        <div className="Customers">

            <div className="Customers-root">

                {customers.map((item) => (
                    <CustomerCard Customer={item} />
                ))}

            </div>
        </div>
    )
}

export default memo(Customers);


const customers = [

    {
        ID: 1,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    }
    ,
    {
        ID: 2,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },
    {
        ID: 3,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },
    {
        ID: 4,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },
    {
        ID: 5,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    }, 
    {
        ID: 6,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    }, 
    {
        ID: 7,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    }, 
    {
        ID: 8,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    }, 
    {
        ID: 9,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    }, 
    {
        ID: 10,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    }, 
    {
        ID: 11,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 12,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 13,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 14,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 15,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 16,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 17,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 18,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 19,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 20,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 21,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 22,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    },  
    {
        ID: 23,
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

    }, 

]
