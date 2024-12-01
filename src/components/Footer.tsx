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
    <footer className='h[684px] w[1280px]  p-[80px] flex flex-col gap-[80px] '>
      <div className="w[1120px] h[52px] flex flex-col gap-[80px]">
        <div className="w[1120px] h[82px] flex lg:flex-row flex-col items-start gap-3 justify-between">
            <div className="w-[500px] h-[51px]">
                <p className="text-[18px] leading-[27px] font-semibold">Subscribe to our newsletter</p>
                <p className="text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-[400px] h[82px] flex flex-col gap-[16px] ">
                <div className='h-[48px] flex w-[400px] gap-[16px] '>
                    <input className='h-[48px] w-[256px] border-solid border-black border-[1px] rounded-[5px] p-3 placeholder-[#505050]' placeholder='Enter your email' type="text" />
                    <button className='w-[119px] h-[48px] text-[16px] leading-[24px] border-solid rounded-[5px] border-black border-[1px]'>Subscribe</button>
                </div>
                <p className='text-[12px] leading-[18px]'>By subscribing you agree to with our <Link className='underline' href="/">Privacy Policy</Link></p>
            </div>
        </div>
        <div className="w[1120px] h[225px] flex gap-2 justify-between">
            <div className="w-[250px] h-[40px]"><Image src={Logo} alt="" /></div>
            <div className="w-[250px] h-[225px] flex flex-col gap-[16px]">
                <p className="text-[16px] leading-[24px] font-semibold">Courses</p>
                <p className="text-[14px] leading-[21px]">Business</p>
                <p className="text-[14px] leading-[21px]">Development</p>
                <p className="text-[14px] leading-[21px]">Technology</p>
                <p className="text-[14px] leading-[21px]">Design</p>
                <p className="text-[14px] leading-[21px]">Programming</p>
            </div>
            <div className="w-[250px] h-[225px] flex flex-col gap-[16px]">
                <p className="text-[16px] leading-[24px] font-semibold">Resources</p>
                <p className="text-[14px] leading-[21px]">Career</p>
                <p className="text-[14px] leading-[21px]">Resume</p>
                <p className="text-[14px] leading-[21px]">Learning</p>
                <p className="text-[14px] leading-[21px]">Interview Preparation</p>
                <p className="text-[14px] leading-[21px]">Jobs</p>
            </div>
            <div className="w-[250px] h-[225px] flex flex-col gap-[16px]">
                <p className="text-[16px] leading-[24px] font-semibold">About Us</p>
                <p className="text-[14px] leading-[21px]">Contact</p>
                <p className="text-[14px] leading-[21px]">Help/Support</p>
                <p className="text-[14px] leading-[21px]">FAQ</p>
                <p className="text-[14px] leading-[21px]">Terms and Conditions</p>
                <p className="text-[14px] leading-[21px]">Partners</p>
            </div>
        </div>
        <div className="w[1120px] h-[57px] items-end border-solid border-black border-t-[2px] pt-[33px]">
            <div className="h-[24px] flex justify-between">
                <div className="h-[21px] flex gap-[24px]">
                    <p className='text-[14px] leading-[21px]'>2023 Ddsgnr. All right reserved.</p>
                    <Link className='text-[14px] leading-[21px] underline' href="">Privacy Policy</Link>
                    <Link className='text-[14px] leading-[21px] underline' href="">Privacy Policy</Link>
                    <Link className='text-[14px] leading-[21px] underline' href="">Cookies Settings</Link>
                </div>
                <div className='flex w-[132px] h-[24px] items-center '>
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