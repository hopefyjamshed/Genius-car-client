import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero mb-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img alt='' src={person} className=" hover:ml-14 duration-300 w-4/5 h-full rounded-lg shadow-2xl" />

                    <img src={parts} className='absolute w-1/2 right-5 top-1/2 hover:right-44 duration-200 border-8 border-white rounded-lg shadow-2xl' alt="" />
                </div>
                <div className='w-1/2'>

                    <h3 className='text-xl font-bold text-orange-600'>About us</h3>

                    <h1 className="text-5xl font-bold  my-5"> <span className='hover:text-7xl duration-300'>We </span><span className='hover:text-7xl duration-300'>are</span><span className='hover:text-7xl duration-300'>qualified</span>  <br /> & of experience <br /> in this field</h1>
                    <p className="py-6 text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6 text-gray-600"><span className='hover:text-xl duration-200'>the</span><span className='hover:text-5xl duration-200'>majority</span><span className='hover:text-xl duration-200'> have</span>  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button title='get more information about us' className="btn hover:w-96  duration-150 bg-orange-600 border border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;