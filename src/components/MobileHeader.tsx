import React from 'react'
import Image from "next/image";
import logo from '../Assets/Logo.svg'
import menu from '../Assets/Menu.svg'

export default function MobileHeader() {
  return (
    <header className='w[428px] h-[72px] border-b-[1px] border-solid border-black px-[24px] py-[12px]'>
      <div className='w[380px] h-[48px] flex gap-[32px] justify-between'>
        <div className="w-[300px] h-[41px] my-[3.5px]">
            <div className='w-[130.6px] h-[41px] flex items-center'>
                <Image className='w-[130.6px] h-[30.38px] ' src={logo} alt="" />
            </div>
        </div>
        <div className='w-[48px] h-[48px] p-3'>
          <div className="w-[24px] h-[24px] ">
            <Image src={menu} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}