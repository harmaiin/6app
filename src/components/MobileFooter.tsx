import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import Logo from '../Assets/Logo.svg'
import facebook from '../Assets/facebook.svg'
import likdin from '../Assets/linkdin.svg'
import twitter from '../Assets/twitter.svg'
import insta from '../Assets/insta.svg'

export default function Footer() {
  return (
    <footer className='h-[1411px] w[428px] py-[48px] px-[24px] flex flex-col gap-[48px] items-center'>
      <div className="w-[380px] h-[1315px] flex flex-col gap-[48px]">
        <div className="w-[380px] h-[261px]  flex flex-col gap-[24px]">
            <div className="w-[287px] h-[91px] mx-[46.5px] flex flex-col gap-[16px]">
                <p className="text-[18px] leading-[27px] font-semibold text-center">Subscribe to our newsletter</p>
                <p className="text-[16px] tracking-wide leading-[24px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-[380px] h-[146px] flex flex-col gap-[16px] ">
                <div className='h-[112px] flex flex-col w-[380px] gap-[16px] '>
                    <input className='h-[48px] w-[380px] border-solid border-black border-[1px] rounded-[5px] p-3 placeholder-[#505050]' placeholder='Enter your email' type="text" />
                    <button className='h-[48px] w-[380px] border-solid border-black border-[1px] rounded-[5px] p-3'>Subscribe</button>
                </div>
                <p className='w-[380px] text-center text-[12px] leading-[18px]'>By subscribing you agree to with our <Link className='underline' href="/">Privacy Policy</Link></p>
            </div>
        </div>

        <div className="w-[172px] h-[811px] flex flex-col  gap-[40px] mx-[104px]">
            <div className="w-[172px] h-[40px]"><Image src={Logo} alt="" /></div>
            <div className="w-[172px] h-[225px] flex flex-col gap-[16px] items-center justify-center">
                <p className="w-[172px] h-[37px] text-center text-[16px] leading-[24px] font-semibold">Courses</p>
                <p className="w-[172px] h-[37px] text-center text-[14px] leading-[21px]">Business</p>
                <p className="w-[172px] h-[37px] text-center text-[14px] leading-[21px]">Development</p>
                <p className="w-[172px] h-[37px] text-center text-[14px] leading-[21px]">Technology</p>
                <p className="w-[172px] h-[37px] text-center text-[14px] leading-[21px]">Design</p>
                <p className="w-[172px] h-[37px] text-center text-[14px] leading-[21px]">Programming</p>
            </div>
            <div className="w-[172px] h-[225px] flex flex-col gap-[16px]">
                <p className="text-center text-[16px] leading-[24px] font-semibold">Resources</p>
                <p className="text-center text-[14px] leading-[21px]">Career</p>
                <p className="text-center text-[14px] leading-[21px]">Resume</p>
                <p className="text-center text-[14px] leading-[21px]">Learning</p>
                <p className="text-center text-[14px] leading-[21px]">Interview Preparation</p>
                <p className="text-center text-[14px] leading-[21px]">Jobs</p>
            </div>
            <div className="w-[172px] h-[225px] flex flex-col gap-[16px]">
                <p className="text-center text-[16px] leading-[24px] font-semibold">About Us</p>
                <p className="text-center text-[14px] leading-[21px]">Contact</p>
                <p className="text-center text-[14px] leading-[21px]">Help/Support</p>
                <p className="text-center text-[14px] leading-[21px]">FAQ</p>
                <p className="text-center text-[14px] leading-[21px]">Terms and Conditions</p>
                <p className="text-center text-[14px] leading-[21px]">Partners</p>
            </div>
        </div>

        <div className="w-[380px] h-[57px] items-end border-solid border-black border-t-[2px] pt-[33px]">
            <div className="h-[24px] flex flex-col ">
                <div className="h-[66px] w-[345px] flex flex-col gap-[24px] mx-[17.5px]">
                    <p className='text-[14px] leading-[21px] mx-[75px] tracking-tight'>2023 Ddsgnr. All right reserved.</p>
                    <div className=' w-[345px] flex gap-[24px] '>
                    <Link className='text-[14px] leading-[21px] underline' href="">Privacy Policy</Link>
                    <Link className='text-[14px] leading-[21px] underline' href="">Terms of Service</Link>
                    <Link className='text-[14px] leading-[21px] underline' href="">Cookies Settings</Link>
                    </div>
                </div>
                <div className='flex w-[132px] h-[24px] items-center mx-[124px] mt-[24px]'>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'><Image className='' src={facebook} alt="" /></div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'><Image className='' src={insta} alt="" /></div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'><Image className='' src={twitter} alt="" /></div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center '><Image className='' src={likdin} alt="" /></div>
        </div>
            </div>
        </div>
      </div>
    </footer>
  )
}