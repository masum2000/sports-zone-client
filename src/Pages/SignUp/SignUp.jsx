import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
            <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
            <div className="md:w-1/2 ">
                    <h1 className='text-3xl mb-8 md:text-start text-center'>Welcome to <span className='text-violet-500 font-bold italic'>SportsZone Academy</span></h1>
                    <img src="https://i.ibb.co/5rxFm10/Sign-up-rafiki.png" alt="About Us Image" className="md:w-10/12 object-cover" />
                </div>
                <div className="md:w-1/2 w-full  ">
                    <div className="card flex-shrink-0 w-full">
                        <form  onSubmit='' className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg"> Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder=" Confirm Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">photo Url</span>
                                </label>
                                <input type="url" name='photo' placeholder="Your Photo" className="input input-bordered"  />
                            </div>
                            <div className="mt-6 form-control">
                                 <button className="border border-violet-500 hover:bg-violet-500 px-10 hover:text-white text-violet-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Register</button>
                            </div>
                            <div className='text-center  mt-6'>
                              
                        <div>
                            <p className='text-sm'>Have an Account ?<Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Login Here</button>
                            </Link></p>
                        </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default SignUp;