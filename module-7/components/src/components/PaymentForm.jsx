import React, {useState} from 'react'

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        expireDate: '',
        cvv: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        if(e.target.name === 'expireDate') {
            let value = e.target.value.replace("/\D/g", "");
            if(value.length > 2) {
                value = `${value.slice(0, 2)}/${value.slice(2,4)}`;
                setFormData({...formData, [name]: value});
            }
        } else {
            setFormData({...formData, [name]: value});
        }
        console.log('form daa', formData)
    }
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
            <h2 className='text-2xl font-semibold text-center text-gray-700 mb-4'>Payment Details</h2>
            <form className='space-y-5' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Card Holder Name</label>
                    <input
                        type='text'
                        id='cardHolderName'
                        name='cardHolderName'
                        value={FormData.cardHolderName}
                        required
                        onChange={handleInputChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
                </div>
                <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Card Number</label>
                    <input
                        type='text'
                        id='cardNumber'
                        name='cardNumber'
                        value={FormData.cardNumber}
                        required
                        onChange={handleInputChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
                </div>

                <div className='flex gap-4'>
                    <div className='w-1/2'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Expire Date</label>
                        <input
                            type='text'
                            id='expireDate'
                            name='expireDate'
                            value={FormData.expireDate}
                            required
                            onChange={handleInputChange}
                            placeholder='mm/yy'
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>CVV</label>
                        <input
                            type='password'
                            id='cvv'
                            name='cvv'
                            value={FormData.expireDate}
                            required
                            onChange={handleInputChange}
                            placeholder='xxx'
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all' />
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-sm'
                >Pay Now</button>
            </form>
        </div>
    </div>
  )
}

export default PaymentForm