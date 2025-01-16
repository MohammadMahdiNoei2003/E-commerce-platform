import { memo, useState } from "react"
import IViewOrder from "./viewOrder.type"
import "./viewOrder.css"
import { FaCalendarDays } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "@chakra-ui/react"
import chevronDown from "/public/icon/chevron-down.svg"
import chevronUp from "/public/icon/chevron-up.svg"

const ViewOrder = (props: IViewOrder) => {
    const [boolUpDownOnClick, setboolUpDownOnClick] = useState<boolean>(true)
    const upDownOnClick = () => { setboolUpDownOnClick(!boolUpDownOnClick); }
    return (
        <div className="viewOrder_root">
            <div className="viewOrder_root_order">
                <div className="viewOrder_root_order-partition1">
                    <div className="viewOrder_root_order_header">
                        <div className="viewOrder_root_order_header-id">Order#{Order.ID.toString()}</div>
                        <div className="viewOrder_root_order_header-history">
                            <FaCalendarDays />
                            <div> {Order.CreateDate}</div>
                        </div>
                    </div>
                    <div className="viewOrder_root_order_products-container">
                        {Order.Products.map((item) => (
                            <div className="viewOrder_root_order_products">
                                <div className="viewOrder_root_order_products-img">
                                    <img
                                        src={item.src}
                                        alt="product"
                                    />
                                </div>
                                <div className="viewOrder_root_order_products_discription">
                                    <div className="v_r_o_p_discription v_r_o_p_discription-top">
                                        <div className="viewOrder_root_order_products_discription-name">
                                            <span>
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="viewOrder_root_order_products_discription-price">
                                            <span> {item.price}$ </span>
                                        </div>
                                    </div>
                                    <div className="v_r_o_p_discription v_r_o_p_discription-but">
                                        <div className="viewOrder_root_order_products_discription-id">
                                            ID: <span> Product {item.ID} </span>
                                        </div>
                                        <div className="viewOrder_root_order_products_discription-number">
                                            Quantity:<span>{item.Quantity}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="viewOrder_root_order-container">

                        <div className="viewOrder_root_order_discription">
                            <div>
                                <div>
                                    Oder Note:
                                </div>
                            </div>
                            <span>
                                {Order.Note}
                            </span>
                        </div>

                        <div className="viewOrder_root_order_price">
                            <div className="viewOrder_root_order_price-container">
                                {Order.Products.map((item, index) => (
                                    <div className="viewOrder_root_order_price_productPrice">
                                        <span>Products:{index}</span>
                                        <span>{item.price}$</span>
                                    </div>
                                ))}
                                <div className="border"></div>
                                <div className="viewOrder_root_order_price_productPrice  viewOrder_root_order_price_productPrice-totalPrice">
                                    <span>Total</span>
                                    <span>{Order.TotalPrice}$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="viewOrder_root_order-partition2">
                    <AccordionRoot collapsible >
                        <AccordionItem value={""}>
                            <AccordionItemTrigger onClick={upDownOnClick} className="viewOrder_root_order-AccordionItemTrigger">
                                <span>Customer Information</span>
                                <span>{boolUpDownOnClick ? <img src={chevronDown} alt="salam" /> : <img src={chevronUp} alt="salam" />} </span>
                            </AccordionItemTrigger>
                            <AccordionItemContent >
                                <div className="viewOrder_root_order_customer">
                                    <div className="viewOrder_root_order_customer-top">
                                        <div className="viewOrder_root_order_customer-container">
                                            <div className="viewOrder_root_order_customer-information">
                                                <p>ID:</p>
                                                <p>First name:</p>
                                                <p>Last name:</p>
                                                <p>Email:</p>
                                            </div>
                                            <div className="viewOrder_root_order_customer-information">
                                                <p>{Customer.ID.toString()}</p>
                                                <p>{Customer.FirstName}</p>
                                                <p>{Customer.LastName}</p>
                                                <p>{Customer.Email}</p>
                                            </div>
                                        </div>

                                        <div className="viewOrder_root_order_customer-container">
                                            <div className="viewOrder_root_order_customer-information">
                                                <p>State:</p>
                                                <p>City:</p>
                                                <p>Area:</p>
                                                <p>Plaque:</p>
                                            </div>
                                            <div className="viewOrder_root_order_customer-information">
                                                <p>{Customer.State}</p>
                                                <p>{Customer.City}</p>
                                                <p>{Customer.Area}</p>
                                                <p>{Customer.plaque}</p>
                                            </div>
                                        </div>

                                        <div className="viewOrder_root_order_customer-container">
                                            <div className="viewOrder_root_order_customer-information">
                                                <p>Mobile:</p>
                                                <p>Payment:</p>
                                                <p>Status:</p>
                                                <p>Postal code:</p>
                                            </div>
                                            <div className="viewOrder_root_order_customer-information">
                                                <p>{Customer.Mobile}</p>
                                                <p>{Customer.Payment}</p>
                                                <p>{Customer.Status}</p>
                                                <p>{Customer.PostalCode}</p>
                                                <Link to={`/Customer/${Customer.ID}`} className="viewOrder_root_order_customer-link">See All Information</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="viewOrder_root_order_customer-but">
                                        {/* See All Information  */}
                                    </div>

                                </div>
                            </AccordionItemContent>
                        </AccordionItem>
                    </AccordionRoot>
                </div>
            </div>

        </div >
    )
}

export default memo(ViewOrder)



const Order = {

    ID: 1,
    TotalPrice: "54,000",
    CreateDate: "13 sep , 2022 at 4:39 PM",
    CustomerID: 123456789,
    Note: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationeipsam minima fugit ipsum sed repellendus nisi cupiditate harum",
    Products: [
        {
            src: "/images/404.jpg",
            ID: 1,
            price: "36,000",
            name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
            Quantity: 2,
        },

        {
            src: "/images/404.jpg",
            ID: 2,
            price: "36,000",
            name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
            Quantity: 2,
        },

        {
            src: "/images/404.jpg",
            ID: 3,
            price: "36,000",
            name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
            Quantity: 2,
        },

        {
            src: "/images/404.jpg",
            ID: 4,
            price: "36,000",
            name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",
            Quantity: 2,
        }
    ]

}

const Customer = {

    ID: 1,
    FirstName: "amir hosin",
    LastName: "lotfy",
    Email: "a.h.lotfy.8292@gmail.com",
    State: "farse",
    City: "shiraz",
    Area: "kavar",
    plaque: "1",
    Mobile: "09360281588",
    Payment: "Online",
    Status: "paid",
    PostalCode: "12345-67890",
}