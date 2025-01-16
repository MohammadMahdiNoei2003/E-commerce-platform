import { memo } from "react"
import "./customer_card.css"
import ICustomerCard from "./customer_card.type"
import { FaCalendarDays } from "react-icons/fa6"
import { Link } from "react-router-dom"

const CustomerCard = (props: ICustomerCard) => {

    const { Customer } = props

    return (

        <Link to={`/Customer/${Customer.ID}`} className="CustomerCard-link">
            <div className="CustomerCard">
                <div className="CustomerCard_Customer">
                    <div className="CustomerCard_Customer-img">
                        <img
                            src={Customer.src}
                            alt="Customer"
                        />
                    </div>
                    <div className="CustomerCard_Customer_discription">
                        <div className="CustomerCard_Customer_discription-id">
                            <span>
                                {Customer.ID.toString()}
                            </span>
                        </div>
                        <div className="CustomerCard_Customer_discription-name">
                            <span>
                                {Customer.name}
                            </span>
                        </div>

                        <div className="CustomerCard_Customer_discription-history">
                            <FaCalendarDays />
                            <div> {Customer.CreateDate}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default memo(CustomerCard)


