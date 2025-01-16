import { memo, useState } from "react"
import IOrderCard from "./order_card.type"
import "./order_card.css"
import { FaCalendarDays } from "react-icons/fa6"
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot, Button, Input, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import chevronDown from "/public/icon/chevron-down.svg"
import chevronUp from "/public/icon/chevron-up.svg"


const OrderCard = (props: IOrderCard) => {
    const {Order} = props
    const [boolUpDownOnClick, setboolUpDownOnClick] = useState<boolean>(true)
    const upDownOnClick = () => { setboolUpDownOnClick(!boolUpDownOnClick); }
    const bool: boolean = Order.Products.length > 1 ? true : false
    return (
        <div className="OrderCard">
            <div className="OrderCard-title">
                <div className="OrderCard-product-id">Order#{Order.ID.toString()}</div>
                <div className="OrderCard-total-price">{Order.TotalPrice}$</div>
            </div>
            <div className="OrderCard_objecr">
                <div className="OrderCard_objecr_information">
                    <div className="OrderCard_objecr_information-history">
                        <FaCalendarDays />
                        <div> {Order.CreateDate}</div>
                    </div>
                    <div className="Line"></div>
                    <div className="OrderCard_objecr_information-buyer">
                        buyer: <span>{Order.CustomerID.toString()}</span>
                    </div>
                </div>
                <div className="OrderCard_objecr_settings">
                    <div className="OrderCard_objecr_settings-view">
                        <Button className="but">
                            <Link to={`/ViewOrder/${Order.ID}`}>View Details</Link>
                        </Button>
                    </div>
                    <div className="OrderCard_objecr_settings-update">
                        <Button className="but">
                            <Link to={`/UpdateOrder/${Order.ID}`}>Update Order</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="OrderCard_product">
                <div className="OrderCard_product-img">
                    <img
                        src={Order.Products[0].src}
                        alt="product"
                    />
                </div>
                <div className="OrderCard_product-discription">
                    <div className="discription-name">
                        <span>
                            {Order.Products[0].name}
                        </span>
                    </div>
                    <div className="discription-id">
                        ID: <span> Product {Order.Products[0].ID} </span>
                    </div>
                    <div className="discription-number">
                        Quantity:<span>{Order.Products[0].Quantity}</span>
                    </div>
                </div>
            </div>
            {bool ?
                <AccordionRoot collapsible >
                    <AccordionItem value={""}  >
                        {Order.Products.map((item, index) => (
                            index == 0 ? null :
                                <AccordionItemContent >
                                    <div className="OrderCard_product">
                                        <div className="OrderCard_product-img">
                                            <img
                                                src={item.src}
                                                alt="product"
                                            />
                                        </div>
                                        <div className="OrderCard_product-discription">
                                            <div className="discription-name">
                                                <span>
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className="discription-id">
                                                ID: <span> Product {item.ID} </span>
                                            </div>
                                            <div className="discription-number">
                                                Quantity:<span>{item.Quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemContent>
                        ))}
                        <AccordionItemTrigger className="OrderCard_moreProduct" onClick={upDownOnClick}>mor items{boolUpDownOnClick ? <img src={chevronDown} alt="salam" /> : <img src={chevronUp} alt="salam" />}</AccordionItemTrigger>
                    </AccordionItem>
                </AccordionRoot>
                :
                null
            }
        </div>
    )
}

export default memo(OrderCard)