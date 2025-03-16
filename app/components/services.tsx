import React from 'react'

const Services = () => {

    const services = [
        {
            image: '/service1.png',
            title: 'Free Wi-Fi',
            description: 'Stay connected with our high-speed Wi-Fi, available throughout the hostel.'
        },
        {
            image: '/service2.png',
            title: '24/7 Reception',
            description: 'Our friendly staff is available around the clock to assist you with anything you need.'
        },
        {
            image: '/service3.png',
            title: 'Homely Food',
            description: 'Enjoy delicious meals prepared by our talented chefs, with options for every taste.'
        },
        {
            image: '/service4.png',
            title: 'Laundry Facilities',
            description: 'Keep your clothes fresh and clean with our convenient on-site laundry facilities.'
        },
        {
            image: '/service5.png',
            title: 'Clean Mess',
            description: 'Our housekeeping team works tirelessly to ensure that our hostel is always clean and tidy.'
        },
    ]
    return (
        <div id='services' className='flex flex-col justify-center items-center space-y-5 p-5'>
            <p className='text-3xl font-bold'>Services</p>
            <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center items-center lg:space-x-10 space-y-5'>
                {services.map((service, index) => (
                    <div key={index} className='flex flex-col justify-center items-center space-y-5 h-[350px] w-[90%] lg:w-[350px] border border-gray-400 rounded-2xl shadow-2xl p-5'>
                        <img src={service.image} alt={service.title} className='h-44 w-40 rounded-full' />
                        <p className='text-xl font-serif font-bold'>{service.title}</p>
                        <p className='text-sm text-center'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
