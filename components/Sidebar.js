import Image from 'next/image'
import React from 'react'
import Twitter from "../assets/twitter-logo.png";
import { RiHome7Fill } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';
import { BsBell } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BsBookmark } from 'react-icons/bs';
import { RiFileList2Line } from 'react-icons/ri';
import { HiOutlineUser } from 'react-icons/hi';
import { CgMoreO } from 'react-icons/cg';
import tweet from '../assets/tweet.png';
import profile from '../assets/profile.jpg';


function Sidebar() {
  return (
    <div>
        <div className="w-20 pt-8 border-r h-screen flex flex-col justify-between">
            <div className="">
                
                <ul className="w-full space-y-4  flex flex-col 
                items-center justify-center">
                      <li>
                          <div className="w-10 h-10">
                              <Image src={Twitter} />
                          </div>
                      </li>

                      <li>
                          <div >
                              <RiHome7Fill className="w-7 h-7" />
                          </div>
                      </li>
                      <li>
                          <div >
                              <BsSearch className="w-7 h-7" />
                          </div>
                      </li>
                      <li>
                          <div >
                              <BsBell className="w-7 h-7" />
                          </div>
                      </li>
                      <li>
                          <div >
                              <HiOutlineMail className="w-7 h-7" />
                          </div>
                      </li>
                      <li>
                          <div >
                              <BsBookmark className="w-7 h-7" />
                          </div>
                      </li>
                      <li>
                          <div >
                              <RiFileList2Line className="w-7 h-7" />
                          </div>
                      </li>
                      <li>
                          <div >
                              <HiOutlineUser className="w-7 h-7" />
                          </div>
                      </li>
                      <li>
                          <div >
                              <CgMoreO className="w-7 h-7" />
                          </div>
                      </li>
                      <li>
                          <div className="w-12 h-12 bg-blue-400 p-3 rounded-full" >
                              <Image src={tweet} />
                          </div>
                      </li>
                  </ul>
            </div>
            <div className="rounded-full flex justify-center">
                  <Image src={profile} className="rounded-full object-cover w-12 h-12 " />
            </div>
        </div>
    </div>
  )
}

export default Sidebar