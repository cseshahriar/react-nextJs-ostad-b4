import React, {useState} from 'react'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        console.log('form daa', formData)
    }
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
            <h2 className='text-2xl font-semibold text-center text-gray-700 mb-4'>
                { isLogin ? 'Login' : 'Register' }
            </h2>
            <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Name</label>
                    <input
                        type='text'
                        id='user_name'
                        name='user_name'
                        value={FormData.user_name}
                        required
                        onChange={handleInputChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
                </div>
                <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        required
                        onChange={handleInputChange} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
                </div>
                <div>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={""}
                        required
                        onChange={handleInputChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
                </div>
                <button type='submit' className='w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-sm'>Login</button>
            </form>
            <p className='text-center text-gray-600 mt-4'>
            { isLogin ? 'Don\'t have an account?' : 'Already have an account? ' }
                <button onClick={() => setIsLogin(!isLogin)} className='ml-1 text-blue-500 hover:underline'>
                    { isLogin ? 'Register' : 'Login' }
                </button>
            </p>
        </div>
    </div>
  )
}

export default AuthForm