import React from 'react'
import img1 from '../Assets/course-img-1.svg'
import img2 from '../Assets/course-img-2.svg'
import img3 from '../Assets/course-img-3.svg'
import img4 from '../Assets/course-img-4.svg'
import img5 from '../Assets/course-img-5.svg'
import img6 from '../Assets/course-img-6.svg'
import star from '../Assets/Star 1.svg'
import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Courses() {
  return (
    <section id='Courses' className='w[1280px]  h-[1742px] py-[112px] flex flex-col gap-[60px] items-center'>
      <div className='w-[768px] h-[118px] flex flex-col gap-[24px] mx[256px]'>
        <h1 className='text-[56px] font-bold text-center leading-[67.2px]'>Courses</h1>
        <p className='text-[18px] text-center leading-[27px]'>Your Ultimate Guide to learning</p>
      </div>
      <div className='h-[1340px] w[1280px] w-full  flex-col flex gap-[64px] items-center'>  
        <div className='w-[336px] h-[40px] flex mx-[472px]'>
            <div className="px-[16px] py-[8px] text-[16px] leading-[24px] w-[87px] border-solid border-[#676767] border-b-[1px]">Popular</div>
            <div className="px-[16px] py-[8px] text-[16px] leading-[24px] w-[140px]">Recommended</div>
            <div className="px-[16px] py-[8px] text-[16px] leading-[24px] w-[109px]">Best Price</div>
        </div>
        <div className='h-[1132px]  w[1280px] flex flex-col gap-[64px] items-center'>
            <div className='h-[534px] w-full flex flex-row custom850:gap-[32px]   w[1280px] justify-center'>
                {/* card 1         */}
                <div className='w-[405] h-[534px] rounded-[5px] flex flex-col gap-[24px] bg-[#F7F7F7]'>
                    <div className=" w-[405] h-[300px]"><Image src={img1} alt="" /></div>
                    <div className="pl-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Design</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src={star} alt="" /></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">UX/UI Design 201</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            {/* <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button> */}
                            <Button className='text-[16px]  bg-[#F7F7F7] hover:text-black  w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]' variant="outline">Enroll Now</Button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
                {/* card 2         */}
                <div className='w-[405] h-[534px] rounded-[5px] flex flex-col gap-[24px] bg-[#F7F7F7]'>
                    <div className="w-[405] h-[300px]"><Image src={img2} alt="" /></div>
                    <div className="pl-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Programmimg</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src={star} alt="" /></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">Introduction to Python</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            {/* <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button> */}
                            <Button className='text-[16px]  bg-[#F7F7F7] hover:text-black  w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]' variant="outline">Enroll Now</Button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
                {/* card 3        */}
                <div className='w-[405] h-[534px] rounded-[5px] hidden xl:flex  flex-col gap-[24px] bg-[#F7F7F7]'>
                    <div className="w-[405] h-[300px]"><Image src={img3} alt="" /></div>
                    <div className="ml-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Business</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src={star} alt="" /></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">Data Analysis for Beginners</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            {/* <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button> */}
                            <Button className='text-[16px]  bg-[#F7F7F7] hover:text-black  w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]' variant="outline">Enroll Now</Button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='h-[534px] flex flex-row gap-[32px] w[1280px] justify-center'>
                {/* card 4         */}
                <div className='w-[405] h-[534px] rounded-[5px] flex flex-col gap-[24px] bg-[#F7F7F7]'>
                    <div className="w-[405px] h-[300px]"><Image src={img4} alt="" /></div>
                    <div className="pl-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Art</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src={star} alt="" /></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">Art Specialization</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            {/* <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button> */}
                            <Button className='text-[16px]  bg-[#F7F7F7] hover:text-black  w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]' variant="outline">Enroll Now</Button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
                {/* card 5         */}
                <div className='w-[405] h-[534px] rounded-[5px] flex flex-col gap-[24px] bg-[#F7F7F7]'>
                    <div className="w-[405] h-[300px]"><Image src={img5} alt="" /></div>
                    <div className="pl-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Law</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src={star} alt="" /></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">Rule of Law</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            {/* <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button> */}
                            <Button className='text-[16px]  bg-[#F7F7F7] hover:text-black  w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]' variant="outline">Enroll Now</Button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
                {/* card 6        */}
                <div className='w-[405] h-[534px] rounded-[5px]  hidden xl:flex flex-col gap-[24px] bg-[#F7F7F7]'>
                    <div className="w-[405] h-[300px]"><Image src={img6} alt="" /></div>
                    <div className="ml-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Tech</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src={star} alt="" /></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">Introduction to webflow</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            {/* <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button> */}
                            <Button className='text-[16px]  bg-[#F7F7F7] hover:text-black  w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]' variant="outline">Enroll Now</Button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        {/* <button className=' w-[152px] h-[40px] mx-[564px] text-[16px] leading-[24px] border-solid border-black border-[1px] rounded-[5px]'>View All Courses</button> */}
        <Button className='text-[16px] hover:bg-white hover:text-black w-[152px] h-[40px] mx-[564px]  leading-[24px] border-solid border-black border-[1px] rounded-[5px]' variant="outline">View All Courses</Button>

      </div>
    </section>
  )
}