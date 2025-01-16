import { memo } from "react";
import "./customer.css"
import ICustomer from "./customer.type"

const Customer = (props : ICustomer)=>{
    return(
        <div className="Customer-root">
            <div className="Customer-header">
                Customer-header
            </div>
            
            <div className="Customer-main">
                Customer-main
            </div>

            <div className="Customer-footer">
                Customer-footer
            </div>
            
        </div>
    )
}
export default memo(Customer);