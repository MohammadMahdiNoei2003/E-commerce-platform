import { memo } from "react"
import "./product.css"
import { FaCalendarDays } from "react-icons/fa6"
import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import IProductCard from "./product.type";

const Product = (props: IProductCard) => {

  const { Product } = props

  return (

    <div className="ProductCard">
      <div className="ProductCard-title">
        <div className="ProductCard-Product-id">Product#{Product.ID.toString()}</div>
        <div className="ProductCard-total-price">{Product.Price}$</div>
      </div>
      <div className="ProductCard_objecr">
        <div className="ProductCard_objecr_information">
          <div className="ProductCard_objecr_information-history">
            <FaCalendarDays />
            <div> {Product.CreateDate}</div>
          </div>
        </div>
        <div className="ProductCard_objecr_settings">
          <div className="ProductCard_objecr_settings-viewAndUpdate">
            <Button className="but">
              <Link to={`/Product/${Product.ID}`}>View And Update</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="ProductCard_Product">
        <div className="ProductCard_Product-img">
          <img
            src={Product.src}
            alt="Product"
          />
        </div>
        <div className="ProductCard_Product_discription">
          <div className="ProductCard_Product_discription-name">
            <span>
              {Product.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Product)

