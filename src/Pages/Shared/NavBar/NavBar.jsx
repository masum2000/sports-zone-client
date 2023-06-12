import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { getAuth } from "firebase/auth";
import { FaShoppingCart } from 'react-icons/fa';
import { app } from "../../../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import  useCart  from "../../../hooks/useCart"
// import useInstructors from '../../hooks/useInstructors';

const auth = getAuth(app)
const NavBar = () => {
    const [photoURL, setPhotoURL] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { user } = useContext(AuthContext);
    const [cart] = useCart()

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             setUser(user);
    //             setDisplayName(user.displayName);
    //             setPhotoURL(user.photoURL);
    //         } else {
    //             setUser(null);
    //             setDisplayName('');
    //             setPhotoURL('');
    //         }
    //     });
    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);
    return (
        <div className='text-center bg-violet-500 md:px-10 '>
            <div className=''>
                <div className="navbar ">
                    <div className="navbar-start pl-2">
                        <div className="dropdown pe-5 md:pe-0">
                            <label tabIndex={0} className="lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content  font-bold space-y-3 mt-8 p-2 shadow text-white bg-violet-500 rounded-box w-52">
                                <NavLink to='/' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Home</NavLink>
                                <NavLink to='/instructors' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Instructors</NavLink>
                                <NavLink to='/classes' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Classes</NavLink>
                                <NavLink to='/dashboard' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Dashboard</NavLink>
                                <NavLink to='/dashboard/mycart' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">
                                        <button class="flex gap-2 justify-center items-center">
                                            <FaShoppingCart></FaShoppingCart>
                                            <div className="">+{cart?.length || 0}</div>
                                        </button>
                                    </NavLink>
                            </ul>
                        </div>
                        <Link className="" to="/"><img className='md:h-20 h-8' src="https://i.ibb.co/LtWBKJg/sports-Zonelogo-preview.png" /></Link>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1  font-bold space-x-8">
                           
                                <div className="menu menu-horizontal px-1 font-semibold space-x-8">
                                    <NavLink to='/' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Home</NavLink>
                                    <NavLink to='/instructors' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Instructors</NavLink>
                                    <NavLink to='/classes' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Classes</NavLink>
                                    {/* <NavLink to='/dashboard' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Dashboard</NavLink> */}
                                    <NavLink to='/dashboard/mycart' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">
                                        <button class="flex gap-2 justify-center items-center">
                                            <FaShoppingCart></FaShoppingCart>
                                            <div className="">+{cart?.length || 0}</div>
                                        </button>
                                    </NavLink>
                                </div> 

                                {/* <div className="menu menu-horizontal px-1 font-semibold space-x-8">
                                    <NavLink className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Home</NavLink>
                                    <NavLink to='/instructors' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Instructors</NavLink>
                                    <NavLink to='/classes' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Classes</NavLink>
                                    <NavLink to='/dashboard/mycart' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">
                                        <button class="flex gap-2 justify-center items-center">
                                            <FaShoppingCart></FaShoppingCart>
                                            <div className="">+{cart?.length || 0}</div>
                                        </button>
                                    </NavLink>
                                </div> */}
                            

                        </ul>
                    </div>
                    <div className="navbar-end">

                        {user ? (
                            <>
                                <div className="mr-10">
                                    <div className="group relative flex justify-center ">

                                        <img className=" h-10 w-10 rounded-full" src={user.photoURL} alt={user.displayName} />

                                        <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                                            {user.displayName}
                                        </span>
                                    </div>
                                </div>
                                <div className=''>
                                    <button onClick={() => auth.signOut()} className="  mr-3 md:text-xl text-white font-normal md:font-semibold rounded-md hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <NavLink to="/login" className="">
                                <button className="  text-white md:text-xl rounded-md font-normal md:font-semibold hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Login</button>
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;