import { Tabs } from "@chakra-ui/react"
import { LuLayoutDashboard, LuSettings, LuUser, LuUsers } from "react-icons/lu"
import { Link, Route, Routes } from "react-router-dom"
import "./sideBar.css"
import PageNotFound from "../page/pageNotFound"
import { CiBoxes, CiShoppingBasket } from "react-icons/ci"
import { FaArrowUpRightDots } from "react-icons/fa6"
import { MdOutlineIntegrationInstructions } from "react-icons/md"
import { BiSupport } from "react-icons/bi"
import Product from "../products"
import { FaUserCircle } from "react-icons/fa"
import ProductID from "../products/productId/productId"
import Orders from "../orders/orders"
import ViewOrder from "../orders/order/view"
import UpdateOrder from "../orders/order/update"
import Customers from "../customers"
import Customer from "../customers/customer"

const SideBar = () => {

  return (
    <Tabs.Root defaultValue="members" className="main" >
      <div className="Sidebar" >


        <Tabs.List className="Sidebar_elements">

          <p className="title">Admin Panel</p>
          <div className="dashboard">
            <LuLayoutDashboard className="dashboard-icon" />
            <p className="dashboard-txt">dashboard</p>
          </div>


          <Link to={"/Order"}>
            <Tabs.Trigger value="Orders" className="Sidebar_element" >
              <CiShoppingBasket />
              Orders
            </Tabs.Trigger>
          </Link>

          <Link to={"/Product"} >
            <Tabs.Trigger value="Products" className="Sidebar_element">
              <CiBoxes />
              Products
            </Tabs.Trigger>
          </Link>

          <Link to={"/Customer"} >
            <Tabs.Trigger value="Customers" className="Sidebar_element">
              <LuUser />
              Customers
            </Tabs.Trigger>
          </Link>

          <Link to={"/sasa"}>
            <Tabs.Trigger value="Reports and analyses" className="Sidebar_element" >
              <FaArrowUpRightDots />
              Reports and analyses
            </Tabs.Trigger>
          </Link>

          <div className="hr"></div>

          <div className="dashboard">
            <LuUsers className="dashboard-icon" />
            <p className="dashboard-txt">Marketing</p>
          </div>

          <Link to={"/sasa"}>
            <Tabs.Trigger value="Profile" className="Sidebar_element" >
              <FaUserCircle />
              Profile
            </Tabs.Trigger>
          </Link>

          <Link to={"/sasa"}>
            <Tabs.Trigger value="comend" className="Sidebar_element" >
              <MdOutlineIntegrationInstructions />
              Integrations
            </Tabs.Trigger>
          </Link>

          <Link to={"/"} >
            <Tabs.Trigger value="Support" className="Sidebar_element">
              <BiSupport />
              Support
            </Tabs.Trigger>
          </Link>

          <Link to={"/"} className="Settings">
            <Tabs.Trigger value="Settings" className="Sidebar_element">
              <LuSettings />
              Settings
            </Tabs.Trigger>
          </Link>

        </Tabs.List>
      </div>

      <div className="body">
        <Routes>
          <Route path="/" element={<h1>salam</h1>} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Product/:id" element={<ProductID ListFeature={f} />} />
          <Route path="/Order" element={<Orders />} />
          <Route path="/ViewOrder/:id" element={<ViewOrder />} />
          <Route path="/UpdateOrder/:id" element={<UpdateOrder />} />
          <Route path="/Customer" element={<Customers />} />
          <Route path="/Customer/:id" element={<Customer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

    </Tabs.Root>
  )
}

export default SideBar


const f = [
  {
    Atrebut: "نوع اتصال",
    Discription: "دوگانه (بی‌سیم و با سیم)، بلوتوث"
  },
  {
    Atrebut: "درگاه‌های ارتباطی",
    Discription: "بلوتوث"
  },
  {
    Atrebut: "نوع باتری",
    Discription: "لیتیومی"
  },
  {
    Atrebut: "رابط‌ها",
    Discription: "جک ۳.۵ میلی‌متری خروجی صدا شیار کارت حافظه "
  },
  {
    Atrebut: "size",
    Discription: "hight : 100cm , width : 50cm "
  }
]