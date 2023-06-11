import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';

const DashBoard = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer lg:drawer-open">
           
           <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
           <div className="drawer-content flex flex-col items-center justify-center mt-5 ">
               {/* Page content here */}
               <Outlet></Outlet>
               <label htmlFor="my-drawer-2" className="border-2 border-violet-500 hover:bg-violet-500 hover:text-white text-violet-500  md:p-3 p-1 rounded-md font-bold lg:hidden cursor-pointer mt-10">Open DashBoard</label>

           </div>
           <div className="drawer-side">
               <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
               
               <ul className="menu gap-4 p-4 w-80 h-full bg-violet-200 text-base-content">
               <div className='text-center'>
                   <img className='w-20 h-20 rounded-full mx-auto mb-2' src='' alt="profile Picture"></img>
                   <p className='text-lg ont-bold'>Mizanur Rahman Masum</p>
                   <div className='divider'></div>
                   
               </div>
                   {/* Sidebar content here */}
                   <li><Link><FaHome></FaHome>Home</Link></li>
                   <li><Link to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Selected Classes</Link></li>
                   <li><Link><FaWallet></FaWallet>Payment</Link></li>
               </ul>

           </div>
       </div>
       <Footer></Footer>
        </div>
    );
};

export default DashBoard;