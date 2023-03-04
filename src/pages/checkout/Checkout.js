import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const service = useLoaderData()
    const { _id, title, price, email } = service
    const { user } = useContext(AuthContext)

    const serviceAddHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = user?.email || 'unregisterd'
        const name = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value
        const message = form.message.value
        console.log(email, name, phone, message)

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('order added successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-orange-600'>{title}</h1>
            <h2 className='text-2xl font-semibold'>price: {price}</h2>
            <form onSubmit={serviceAddHandler} className='my-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full " />

                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full " />

                    <input type="text" name='phone' placeholder="Your phone" className="input input-bordered w-full " />

                    <input type="text" name='email' readOnly placeholder={user?.email} className="input input-bordered w-full " />
                </div>
                <div>
                    <textarea name='message' className="border-orange-600 textarea w-full" placeholder="Your massege"></textarea>
                </div>
                <input className='btn bg-orange-600 border-orange-600 w-full' type="submit" value="Placed your order" />
            </form>
        </div>
    );
};

export default Checkout;