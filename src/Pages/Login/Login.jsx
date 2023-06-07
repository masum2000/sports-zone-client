import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Login = () => {



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Login Successfully',
              showConfirmButton: false,
              timer: 1500
            });
            navigate(from, {replace: true});
          })
          
      }

    return (
        <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>SportsZone Academy/Login</title>
        </Helmet>

        <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
            <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
                <div className="md:w-1/2 w-full ">
                    <div className="card flex-shrink-0 w-full">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <div className='indicator w-full flex-col'>
                                    {/* <span className="indicator-item badge bg-violet-500 border-none">Required</span> */}
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <div className='indicator w-full flex-col'>
                                    {/* <span className="indicator-item badge bg-violet-500 border-none">Required</span> */}
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt text-lg link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <button className="border border-violet-500 hover:bg-violet-500 px-10 hover:text-white text-violet-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Login</button>
                            </div>
                            <div className='text-center  mt-6'>
                                <p className='text-lg  divider '>Or Connect With</p>
                                <div className='my-4'>
                                    <button  className='px-4'>
                                        <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                    </button>
                                </div>
                                <div>
                                    <p className='text-sm'>Are You new <span className='font-semibold text-violet-500'>SportsZone Academy</span> ?<Link to=""><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Registration Here</button>
                                    </Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h1 className='text-3xl mb-8 md:text-start text-center'>Login to <span className='text-violet-500 font-bold italic'>SportsZone Academy</span></h1>
                    <img src="https://i.ibb.co/Tch2rtD/Tablet-login-cuate.png" alt="About Us Image" className="md:w-10/12 object-cover" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;