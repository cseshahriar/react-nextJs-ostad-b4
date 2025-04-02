import React from 'react'

const Hero = () => {
  return <section>
    <div className='container mx-auto py-[120px]'>
        <div className='grid grid-cols-12 gap-[30px]'>
            <div className='col-span-6'>
                <div className='grid gap-[24px] justify-center'>
                    <h2 className='text-[#302F2F] leading-[64px] font-bold text-[48px]'>Aenean Facilities Vitae</h2>
                    <p className='text-[#302F2F] leading-[36px] text-[24px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing Integer id orchised ante tincidunt</p>
                    <div>
                        <button className='cursor-pointer border border-[2px] border-[#00BCD4] rounded-[10px] px-[22px] py-[16px] leading-0 uppercase text-[#00BCD4] font-medium text-[16px] flex gap-[18px] items-center'>
                            <span>write to us</span>
                            <span>
                                <img src='/assets/android-send.svg' alt='' />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-span-6'>
                <img src='/assets/Banner1.png' alt='' />
            </div>
        </div>
    </div>

    <div className='absolute right-0 top-0 z-[-1]'>
        <img src='/assets/deco.png' alt='' />
    </div>
  </section>
}

export default Hero