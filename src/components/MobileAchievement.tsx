import React from 'react'

export default function MobileAchievements() {
  return (
    <section className='w[428px] h-[451px] py-[48px] px-[24px] flex flex-col gap-[] items-center'>
      <div className="w-[380px] max-380:w-[350px] h-[355px] flex flex-col gap-[24px] items-center">
        <div className="w[380px] h-[147px] flex flex-col gap-[24px] items-center">
          <h4 className='text-[32px] leading-[41.6px] text-center font-bold'>Our Achivements</h4>
          <p className='text-[18px] leading-[27px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
        </div>
        <div className="w-[380px] h-[176px] flex flex-col gap-[24px]">
          <div className="h-[76px] my-2 gap-[16px] flex">
            <div className="w-[182px] h-[60px] flex flex-col gap-[8px] my-[8px]">
              <h6 className='text-[20px] leading-[28px] font-bold mx-[68px]'>+200</h6>
              <p className='text-[16px] leading-[24px] mx-[61.5px]'>Courses</p>
            </div>
            <div className="w-[182px] h-[60px] flex flex-col gap-[8px] my-[8px]">
              <h6 className='text-[20px] leading-[28px] font-bold mx-[73px]'>50K</h6>
              <p className='text-[16px] leading-[24px] mx-[61px]'>Mentors</p>
            </div>
          </div>
          <div className="h-[76px] my-2 gap-[16px] flex">
            <div className="w-[182px] h-[60px] flex flex-col gap-[8px] my-[8px]">
              <h6 className='text-[20px] leading-[28px] font-bold mx-[68px]'>370k</h6>
              <p className='text-[16px] leading-[24px] mx-[59px]'>Students</p>
            </div>
            <div className="w-[182px] h-[60px] flex flex-col gap-[8px] my-[8px]">
              <h6 className='text-[20px] leading-[28px] font-bold mx-[68px]'>100+</h6>
              <p className='text-[16px] leading-[24px] mx-[43px]'>Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}