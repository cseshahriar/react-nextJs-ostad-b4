import React from 'react'

const PriceCard = () => {
    const plans = [
        {name: "Basic", price: "$9", features: ["1 website", "10GB Storage", "Basic Support"]},
        {name: "Pro", price: "$9", features: ["5 website", "50GB Storage", "Priority Support"]},
        {name: "Enterprise", price: "$9", features: ["1 Unlimited", "500GB Storage", "24/7 Support"]},
    ];
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='grid md:grid-cols-3 gap-6'>
                { plans.map((plan, index) => (
                    <div
                        key={index}
                        className='bg-white p-6 rounded-lg shadow-lg text-center bg-gradient-to-tr from-sky-200 to-orange-200'
                    >
                        <h3 className='text-xl font-semibold text-gray-500'>{plan.name}</h3>
                        <p className='text-3xl font-semibold text-blue-500 my-3'>{plan.price}</p>
                        <ul className='text-gray-600 space-y-2'>
                            { plan.features.map((feature, index) => (
                                <li key={index}>✅ {feature}</li>
                            ))}
                        </ul>
                        <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all'>Choose Plan</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PriceCard