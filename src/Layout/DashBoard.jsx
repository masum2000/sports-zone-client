import React from 'react';
import { Link as NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUser, FaUserAlt, FaUsers, FaWallet } from 'react-icons/fa';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [cart] = useCart();

    // const isAdmin = true;
    const [isAdmin] = useAdmin()
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

                        {
                            isAdmin ? <>
                                <div className='text-center'>
                                    <img className='w-20 h-20 rounded-full mx-auto mb-2' src='' alt="profile Picture"></img>
                                    <p className='text-lg ont-bold'>Mizanur Rahman Masum</p>
                                    <div className='divider'></div>

                                </div>
                                {/* Sidebar content here */}
                                <li><NavLink><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>Manage Users</NavLink></li>
                                <li><NavLink><FaWallet></FaWallet>Payment</NavLink></li>
                            </> : <>
                                <div className='text-center'>
                                    <img className='w-20 h-20 rounded-full mx-auto mb-2' src='' alt="profile Picture"></img>
                                    <p className='text-lg ont-bold'>Mizanur Rahman Masum</p>
                                    <div className='divider'></div>

                                </div>
                                {/* Sidebar content here */}
                                <li><NavLink><FaHome></FaHome>Home</NavLink></li>
                                <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Selected Classes</NavLink></li>
                                <li><NavLink><FaWallet></FaWallet>Payment</NavLink></li>

                            </>
                        }


                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;