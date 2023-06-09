import React, { useState } from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase/firebase.config';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: 'success',
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 1500
        });
        reset(); // Reset the form on successful login
      });
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          title: 'Logged in Successful!',
          text: 'Welcome to SportsZone Academy',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        reset(); // Reset the form on successful login
      })
      .catch((error) => {
        console.log('error', error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SportsZone Academy/Login</title>
      </Helmet>

      <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
        <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
          <div className="md:w-1/2">
            <h1 className='text-3xl mb-8 md:text-start text-center'>Login to <span className='text-violet-500 font-bold italic'>SportsZone Academy</span></h1>
            <img src="https://i.ibb.co/Tch2rtD/Tablet-login-cuate.png" alt="About Us Image" className="md:w-10/12 object-cover" />
          </div>
          <div className="md:w-1/2 w-full ">
            <div className="card flex-shrink-0 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-lg">Email</span>
                  </label>
                  <div className='indicator w-full flex-col'>
                    <input type="email" {...register("email", { required: true })} name='email' placeholder="Your Email" className="input input-bordered" required />
                    {errors.email && <span className='text-red-500'>Email is required</span>}
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Password</span>
                  </label>
                  <div className='indicator w-full flex-col'>
                    <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 12 })} name='password' placeholder="Password" className="input input-bordered" required />
                    {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                    {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be 6 Characters</span>}
                    {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password must be less than 12 Characters</span>}
                  </div>

                  <label className="label">
                    <a href="#" className="label-text-alt text-lg link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="mt-6 form-control">
                  <button className="border border-violet-500 hover:bg-violet-500 px-10 hover:text-white text-violet-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Login</button>
                </div>
                <div className='text-center  mt-6'>
                  <p className='text-lg  divider'>Or Connect With</p>
                  <div className='my-4'>
                    <button onClick={handleGoogleSignIn} className='px-4'>
                      <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                    </button>
                  </div>
                  <div>
                    <p className='text-sm'>Are You new <span className='font-semibold text-violet-500'>SportsZone Academy</span> ?<Link to="/signUp"><button className="btn btn-active btn-link normal-case text-sm text-violet-500 ">Registration Here</button>
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

export default Login;






































// import React, { useState } from 'react';
// import { useContext } from 'react';
// import { Helmet } from 'react-helmet';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Providers/AuthProvider';
// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import { app } from '../../firebase/firebase.config';

// const Login = () => {
//     const { register, handleSubmit,formState: { errors } } = useForm();

//     const {signIn} = useContext(AuthContext);
//     const navigate = useNavigate()

//     const auth = getAuth(app)
//     const googleProvider = new GoogleAuthProvider()

//     const [user, setUser] = useState(null);
    
//     const onSubmit = data => {
//         console.log(data);
//         signIn(data.email, data.password)
//           .then(result => {
//             const user = result.user;
//             console.log(user);
//             Swal.fire({
//               icon: 'success',
//               title: 'Login Successfully',
//               showConfirmButton: false,
//               timer: 1500
//             });
            
//           })
//     };


//    atar dorkar nai
    // const handleLogin = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);
    //     signIn(email, password)
    //       .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //         Swal.fire({
    //           position: 'top-end',
    //           icon: 'success',
    //           title: 'Login Successfully',
    //           showConfirmButton: false,
    //           timer: 1500
    //         });
    //         navigate(from, {replace: true});
    //       })
          
    //   }



//     const handleGoogleSignIn = (event) => {
//         event.preventDefault();

//         signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//                 setUser(loggedUser)
//                 navigate(from, { replace: true })
//                 // alert('User logged successfully')
//                 Swal.fire({
//                     title: 'Logged in Successful!',
//                     text: 'Welcome to SportsZone Academy',
//                     icon: 'success',
//                     confirmButtonText: 'Ok'
//                 })
//             })
//             .catch(error => {
//                 console.log('error', error.message);
//             })
//     }


//     return (
//         <div>
//         <Helmet>
//             <meta charSet="utf-8" />
//             <title>SportsZone Academy/Login</title>
//         </Helmet>

//         <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
//             <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
//             <div className="md:w-1/2">
//                     <h1 className='text-3xl mb-8 md:text-start text-center'>Login to <span className='text-violet-500 font-bold italic'>SportsZone Academy</span></h1>
//                     <img src="https://i.ibb.co/Tch2rtD/Tablet-login-cuate.png" alt="About Us Image" className="md:w-10/12 object-cover" />
//                 </div>
//                 <div className="md:w-1/2 w-full ">
//                     <div className="card flex-shrink-0 w-full">
//                         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                             <div className="form-control ">
//                                 <label className="label">
//                                     <span className="label-text text-lg">Email</span>
//                                 </label>
//                                 <div className='indicator w-full flex-col'>
//                                     {/* <span className="indicator-item badge bg-violet-500 border-none">Required</span> */}
//                                     <input type="email"  {...register("email", { required: true })} name='email' placeholder="Your Email" className="input input-bordered" required />
//                                     {errors.email && <span className='text-red-500'>Email is required</span>}
//                                 </div>
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text text-lg">Password</span>
//                                 </label>
//                                 <div className='indicator w-full flex-col'>
//                                     {/* <span className="indicator-item badge bg-violet-500 border-none">Required</span> */}
//                                     <input type="password"  {...register("password", { required: true, minLength:6, maxLength:12 })} name='password' placeholder="Password" className="input input-bordered" required />
//                                     {errors.password?.type ==='required' && <span className='text-red-500'>Password is required</span>}
//                                 {errors.password?.type ==='minLength' && <span className='text-red-500'>Password must be 6 Characters</span>}
//                                 {errors.password?.type ==='maxLength' && <span className='text-red-500'>Password must be less than 12 Characters</span>}
//                                 </div>

//                                 <label className="label">
//                                     <a href="#" className="label-text-alt text-lg link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="mt-6 form-control">
//                                 <button className="border border-violet-500 hover:bg-violet-500 px-10 hover:text-white text-violet-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Login</button>
//                             </div>
//                             <div className='text-center  mt-6'>
//                                 <p className='text-lg  divider '>Or Connect With</p>
//                                 <div className='my-4'>
//                                     <button onClick={handleGoogleSignIn} className='px-4'>
//                                         <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
//                                     </button>
//                                 </div>
//                                 <div>
//                                     <p className='text-sm'>Are You new <span className='font-semibold text-violet-500'>SportsZone Academy</span> ?<Link to="/signUp"><button className="btn btn-active btn-link normal-case text-sm text-violet-500 ">Registration Here</button>
//                                     </Link></p>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     </div>
//     );
// };

// export default Login;