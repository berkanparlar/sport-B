import { title } from 'framer-motion/client';
import React from 'react';
import { FaDumbbell, FaRunning, FaSwimmer, FaSpa, FaUserAlt, FaAppleAlt, FaBicycle, FaHeartbeat } from 'react-icons/fa';


const services = [
    { icon: <FaRunning />, title: 'Kardiyo Ekipmanları', description: 'Koşu bantları, eliptik bisikletler ve daha fazlası.' },
    { icon: <FaDumbbell />, title: 'Serbest Ağırlıklar', description: 'Dambıl, barbell ve kettlebell seçenekleri.' },
    { icon: <FaBicycle />, title: 'Direnç Makineleri', description: 'Modern direnç makineleri ile kas geliştirme.' },
    { icon: <FaSwimmer />, title: 'Kapalı Yüzme Havuzu', description: 'Yüzme antrenmanları için kapalı havuz.' },
    { icon: <FaUserAlt />, title: 'Kişisel Antrenörlük', description: 'Profesyonel antrenörler ile bireysel destek.' },
    { icon: <FaSpa />, title: 'Sauna ve Buhar Odası', description: 'Egzersiz sonrası rahatlama olanakları.' },
    { icon: <FaAppleAlt />, title: 'Beslenme Danışmanlığı', description: 'Uzman diyetisyenler ile sağlıklı beslenme.' },
    { icon: <FaHeartbeat />, title: 'Grup Dersleri', description: 'Yoga, pilates, zumba ve daha fazlası.' },
];


function Services() {
    return (
        <section className='min-h-screen py-12 bg-gray-100 text-gray-800'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8'>Hizmetlerimiz</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {services.map((service, index) => (

                        <div key={index} className='bg-white p-6 rounded-lg shadow-lg text-center'>
                            <div className='text-4xl text-blue-500 mb-4'>
                                {service.icon}
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Services;