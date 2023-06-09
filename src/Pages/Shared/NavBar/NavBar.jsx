import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebase.config";

const auth = getAuth(app)
const NavBar = () => {
    const {user} = useContext(AuthContext)
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
                                <NavLink className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Home</NavLink>
                                <NavLink to='/alltoy' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Instructors</NavLink>
                                <NavLink to='/classes' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Classes</NavLink>
                                <NavLink to='/addtoy' className="hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Dashboard</NavLink>
                                

                            </ul>
                        </div>
                        <Link className="" to=""><img className='md:h-20 h-8' src="https://i.ibb.co/LtWBKJg/sports-Zonelogo-preview.png" /></Link>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1  font-bold space-x-8">
                            <div className="menu menu-horizontal px-1 font-semibold space-x-8">
                                <NavLink className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Home</NavLink>
                                <NavLink to='/alltoy' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Instructors</NavLink>
                                <NavLink to='/classes' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Classes</NavLink>
                                <NavLink to='/addtoy' className="text-white text-xl hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1"> Dashboard</NavLink>
                                
                            </div> 


                        </ul>
                    </div>
                    <div className="navbar-end">
                    
                   
                        <>
                            <div className="mr-10">
                                <div className="group relative flex justify-center ">

                                    <img className=" h-10 w-10 rounded-full" src="" alt="" />

                                    <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">

                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <button onClick={() => auth.logOut()} className="  mr-3 md:text-xl text-white font-normal md:font-semibold rounded-md hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">
                                    Logout
                                </button>
                            </div>
                        </>
                   
                        <NavLink to="/login" className="">
                            <button className="  text-white md:text-xl rounded-md font-normal md:font-semibold hover:bg-white hover:text-black hover:p-1 hover:rounded-md p-1">Login</button>
                        </NavLink>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;