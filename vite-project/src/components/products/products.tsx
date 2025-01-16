import IProducts from "./product.type";
import Product from "./product";
import "./products.css"
import { memo } from "react";

const Products = (props: IProducts) => {
    return (
        <div className="Products-root">

            {products.map((item) => (
                <Product Product={item}/>
            ))}

        </div>
    )
}

export default memo(Products);


const products =[
    {
        ID: 1,
        Price: "9,000",
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
      
      },
      {
        ID: 2,
        Price: "9,000",
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
      
      },
      {
        ID: 3,
        Price: "9,000",
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
      
      },
      {
        ID: 4,
        Price: "9,000",
        CreateDate: "13 sep , 2022 at 4:39 PM",
        src: "/images/404.jpg",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
      
      },

]
