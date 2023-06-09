import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';



const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser} = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SportsZone Academy/SignUp</title>
            </Helmet>
            <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
                    <div className="md:w-1/2 ">
                        <h1 className='text-3xl mb-8 md:text-start text-center'>Welcome to <span className='text-violet-500 font-bold italic'>SportsZone Academy</span></h1>
                        <img src="https://i.ibb.co/5rxFm10/Sign-up-rafiki.png" alt="signUp image" className="md:w-10/12 object-cover" />
                    </div>
                    <div className="md:w-1/2 w-full  ">
                        <div className="card flex-shrink-0 w-full">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="Your Email" className="input input-bordered" required />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 12 })} name='password' placeholder="Password" className="input input-bordered" required />
                                    {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be 6 Characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password must be less than 12 Characters</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg"> Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirmPassword")} name='confirmPassword' placeholder=" Confirm Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">photo Url</span>
                                    </label>
                                    <input type="url" {...register("url")} name='photo' placeholder="Your Photo" className="input input-bordered" />
                                </div>
                                <div className="mt-6 form-control">
                                    <button className="border border-violet-500 hover:bg-violet-500 px-10 hover:text-white text-violet-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Register</button>
                                </div>
                                <div className='text-center  mt-6'>

                                    <div>
                                        <p className='text-sm'>Have an Account ?<Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-violet-500 ">Login Here</button>
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