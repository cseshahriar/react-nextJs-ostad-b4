import React, {useState, useRef} from 'react'

const OtpForm = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = [];

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (index, value) => {
        if(isNaN(value)) return
        // if(!/^\d*$/.test(value)) return // if dot digit return false
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if(value && index < 5) {
            // auto focus
            inputRefs[index+1].focus();

        }
    }

    const handleKewDown = (index, e) => {
        if(e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].focus();
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
                <h2 className='text-2xl font-semibold text-center text-gray-700 mb-4'>Enter OTP</h2>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <div className='flex justify-center gap-2'>
                        { otp.map((item, index) => (
                            <input
                                ref={(input) => (inputRefs[index] = input)}
                                type='text'
                                key={index}
                                maxLength={1}
                                // value={""}
                                min={0}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKewDown(index, e)}
                                className='w-10 h-12 text-center text-xl border rounded-lg focus:border-none focus:ring-2 focus:ring-blue-500'
                            />
                        ))}
                    </div>
                    <button type='submit' className='w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-sm'>VERIFY OTP</button>
                </form>
            </div>
        </div>
    )
}

export default OtpForm