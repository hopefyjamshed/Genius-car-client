import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const loginHandler = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                const currentUser = {
                    email: user.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('token', data.token)
                    })
                navigate(from, { replace: true });
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
                    <h1 className="text-center text-4xl font-bold mt-20 mb-12">Login</h1>

                    <form onSubmit={loginHandler} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600 border-orange-600" type="submit" value="login" />

                        </div>
                    </form>
                    <p className='text-5 text-gray-600 font-semibold text-center'>New Here? <Link className='text-orange-600 font-bold' to='/signup'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;