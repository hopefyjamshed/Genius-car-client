import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    const [isAsc, setIsAsc] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/services?order=${isAsc ? 'Heigh' : 'low'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc])
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl font-bold text-orange-600 '><span className='hover:mr-3 hover:font-thin duration-300'>S</span><span className='hover:mr-3 hover:font-thin duration-300'>e</span><span className='hover:mr-3 hover:font-thin duration-300'>r</span><span className='hover:mr-3 hover:font-thin duration-300'>v</span><span className='hover:mr-3 hover:font-thin duration-300'>i</span><span className='hover:mr-3 hover:font-thin duration-300'>c</span><span className='hover:mr-3 hover:font-thin duration-300'>e</span>
                    <span className='hover:mr-3 hover:font-thin duration-300'>s</span></p>
                <h1 className='text-5xl font-bold my-5'>Our Service Area</h1>
                <p className='text-gray-500 mb-14'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <button className='btn btn-outline' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'Heigh' : 'low'}</button>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mt-14 mb-32'>
                <button title='get more information about services' className="btn btn-outline  border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600 w-44">More Services</button>
            </div>
        </div>
    );
};

export default Services;