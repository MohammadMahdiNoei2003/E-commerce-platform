import './App.css'; // Ensure your CSS file is imported
import CustomerCard from './components/customers/customer_card';
import Header from './components/header';
import Login from './components/login_sinup_page/login';
import Singup from './components/login_sinup_page/singup/singup';
import Product from './components/products/product/product';
import SideBar from './components/sideBar';



function App() {
    return (
        <>
            {/* <Header/> */}
            <SideBar/>
            {/* <CustomerCard Customer={Customer}/> */}
            {/* <Login></Login> */}
            {/* <Singup></Singup> */}
            {/* <Routes>
                <Route path='/' element={<h1>salam !</h1>} />

                <Route path='*' element={<PageNotFound />} />
            </Routes> */}
        </>
    );
}

export default App;

// const Customer =
// {
//     ID: 1,
//     CreateDate: "13 sep , 2022 at 4:39 PM",
//     src: "/images/404.jpg",
//     name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci!",

// }

