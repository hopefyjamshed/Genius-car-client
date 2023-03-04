import React from 'react';
import { FaArrowRight, FaBeer } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, price, title, _id } = service
    return (
        <div>
            <div className="card card-compact hover:shadow-black duration-500 w-96 h-80 bg-base-100 sm:w-full shadow-lg">
                <figure><img src={img} alt="service img" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold">{title}</h2>

                    <div className="card-actions flex items-center">
                        <p className='text-xl text-orange-600 font-semibold'>{price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <button title='checkout service now' className="btn border border-none bg-transparent hover:bg-transparent">

                                <FaArrowRight className='hover:text-2xl duration-200 text-xl text-orange-600'></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;