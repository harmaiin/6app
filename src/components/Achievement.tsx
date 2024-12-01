import React from 'react'

export default function Achievements() {
  return (
    <section id='Achievement' className='w[1280px] h[445px] pt-[69px] pb-[112px] flex flex-col  items-center'>
      <div className='w[1152px] h[264px] flex flex-col gap-[24px] items-center'>
        <div className='h[136px] xl:w-[1152px] w-full px-4 flex flex-col gap-[24px] items-center'>
            <h2 className='text-[48px] leading-[57.6px] font-bold text-center'>Our Achivements</h2>
            <p className='text-[18px] leading-[27px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className='h[96px] xl:w-[1256px] lg:w-[850px] md:w-[700px] w-full mx-[12px] gap[24px] md:flex-row flex-col flex justify-between items-center'>
            <div className='xl:w-[616px] w-[316px] h-[96px] flex gap[24px] my-[8px]  justify-between'>
            <div className='xl:w-[296px] w-fit h-[80px] flex flex-col items-center justify-center '>
                <h3 className='text-[40px] w-[91px] leading-[48px] font-bold mb-[8px]'>+200</h3>
                <p className='text-[16px] w-[59px] leading-[24px]'>Courses</p>
            </div>
            <div className=' xl:w-[296px] w-fit h-[80px] flex flex-col items-center justify-center'>
                <h3 className='text-[40px] w-[72px] leading-[48px] font-bold'>50K</h3>
                <p className='text-[16px] w-[60px] leading-[24px]'>Mentors</p>
            </div>
            </div>
            <div className='xl:w-[616px] w-[316px] h-[96px] flex gap[24px] my-[8px]  justify-between'>
            <div className='xl:w-[296px] w-fit h-[80px] flex flex-col items-center justify-center'>
                <h3 className='text-[40px] w-[91px] leading-[48px] font-bold'>370k</h3>
                <p className='text-[16px] w-[64px] leading-[24px]'>Students</p>
            </div>
            <div className='xl:w-[296px] w-fit h-[80px] flex flex-col items-center justify-center'>
                <h3 className='text-[40px] w-[91px] leading-[48px] font-bold'>100+</h3>
                <p className='text-[16px] w-[85px] leading-[24px]'>Recognition</p>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}