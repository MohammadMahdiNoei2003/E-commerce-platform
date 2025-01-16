import { memo } from "react"
import IUpdateOrder from "./updateOrder.type"
import "./updateOrder.css"

const UpdateOrder = (props : IUpdateOrder)=>{
    return (
        <div className="UpdateOrder_root">
            order dont updated

        </div>
    )
}

export default memo(UpdateOrder)