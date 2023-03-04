import { Result } from 'postcss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const signupHandler = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)
        createUser(email, password)
            .then(Result => {
                const user = Result.user
                console.log(user)
                form.reset()
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero my-44 ">
            <div className=" hero-content flex-col lg:flex-row">
                <div className=" mr-16 text-center lg:text-left">

                    <img className='' src={loginImg} alt="" />
                </div>

                <div className="card flex-shrink-0 py-5 w-full 
                max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center text-4xl font-bold mt-20 mb-12">SignUp</h1>

                    <form onSubmit={signupHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Type your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600 border border-orange-600" type="submit" value="SignUp" />

                        </div>
                    </form>
                    <p className='text-5 text-gray-600 font-semibold text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;