import React from 'react'
import Image from "next/image";
import linkdin from '../Assets/linkdin.svg'
import twitter from '../Assets/twitter.svg'
import dribble from '../Assets/dribble.svg'
import img1 from '../Assets/about-img-1.svg'
import img3 from '../Assets/about-img-3.svg'
import img4 from '../Assets/about-img-4.svg'
import img5 from '../Assets/about-img-5.svg'
import img6 from '../Assets/about-img-6.svg'
import img2 from '../Assets/about-img-2.svg'

export default function AboutUs() {
  return (
    <section id='AboutUs' className='w[1280px] h-[895px] bg-[#F7F7F7] py-[112px] flex flex-col gap-[80px] items-center'>
      <div className='w[768px] w-full h-[109px] mx-[256px] flex flex-col gap-[16px]'>
        <h2 className='font-bold text-[48px] leading-[57.6px] text-center'>Our team</h2>
        <p className='text-center text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className='h-[482px] flex flex-col gap-[64px] '>
        {/* profile 1 */}
        <div className='h-[209px] xl:w-[1060px] md:w-[760px] sm:w-[640px] w-[428px] flex flex-row xl:gap-[48px] justify-between '>
            <div className="w[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
                <div className="w-[80px] h-[80px] mx[157.33px]">
                    <Image src={img1}alt="" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">James Nduku</p>
                    <p className="text-center text-[18px] leading-[27px]">Marketing Coordinator</p>
                </div>
                <div className="w[100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={linkdin} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[15.3px]' src={twitter} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={dribble} alt="" /></div>
                </div>
            </div>
            {/* profile 2 */}
            <div className="w[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
                <div className="w-[80px] h-[80px] mx[157.33px]">
                    <Image src={img2}alt="" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">James Nduku</p>
                    <p className="text-center text-[18px] leading-[27px]">Marketing Coordinator</p>
                </div>
                <div className="w100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={linkdin} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[15.3px]' src={twitter} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={dribble} alt="" /></div>
                </div>
            </div>
            {/* profile 3 */}
            <div className="w[394.67px] h-[209px] hidden flex-col gap-[24px] items-center sm:flex">
                <div className="w[80px] h-[80px] mx[157.33px]">
                    <Image src={img3}alt="" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">James Nduku</p>
                    <p className="text-center text-[18px] leading-[27px]">Marketing Coordinator</p>
                </div>
                <div className="w100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={linkdin} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[15.3px]' src={twitter} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={dribble} alt="" /></div>
                </div>
            </div>
        </div>
      </div>
      <div className='h-[482px] flex flex-col gap-[64px] '>
        {/* profile 4 */}
        <div className='h-[209px] xl:w-[1060px] md:w-[760px] sm:w-[640px] w-[428px] flex flex-row  xl:gap-[48px] justify-between '>
            <div className="w[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
                <div className="w-[80px] h-[80px] mx[157.33px]">
                    <Image src={img4}alt="" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">James Nduku</p>
                    <p className="text-center text-[18px] leading-[27px]">Marketing Coordinator</p>
                </div>
                <div className="w-100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={linkdin} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[15.3px]' src={twitter} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={dribble} alt="" /></div>
                </div>
            </div>
            {/* profile 5 */}
            <div className="w[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
                <div className="w-[80px] h-[80px] mx    [157.33px]">
                    <Image src={img5}alt="" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">James Nduku</p>
                    <p className="text-center text-[18px] leading-[27px]">Marketing Coordinator</p>
                </div>
                <div className="w-100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={linkdin} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[15.3px]' src={twitter} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={dribble} alt="" /></div>
                </div>
            </div>
            {/* profile 6 */}
            <div className="w[394.67px] h-[209px] hidden flex-col gap-[24px] items-center sm:flex">
                <div className="w-[80px] h-[80px] mx[157.33px]">
                    <Image src={img6}alt="" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">James Nduku</p>
                    <p className="text-center text-[18px] leading-[27px]">Marketing Coordinator</p>
                </div>
                <div className="w-100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={linkdin} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[15.3px]' src={twitter} alt="" /></div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><Image className='w-[18px] h-[18px]' src={dribble} alt="" /></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}