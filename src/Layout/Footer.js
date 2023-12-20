import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
export default function Footer() {
return (
<>
<section className='projecr-footer bg-gray-800 py-6'>
   <div className=''>
      <div className='flex justify-between py-4 flex-wrap'>
      <div className=' 2xl:w-1/5 xl:w-1/5 lg:w-1/5  md:w-1/3 sm:w-full w-full mx-4 pb-4'>
         <h1 className='text-xl text-white font-bold py-2'>Get In Touch</h1>
         <ul className='text-white'>
            <li className='flex py-2'>
               <FaSearchLocation className='mr-2 text-1xl'/>
               203 Fake St. Mountain View,
               11378 New York
            </li>
            <li className='flex py-2'>
               <FaMailBulk className='mr-2  text-1xl'/>
               restaurant@example.com
            </li>
            <li className='flex py-2'>
               <FaPhone className='mr-2 text-1xl'/>
               +012-345-6789
            </li>
            <li className='flex py-2'>
               <a href='#' className='mr-4 text-3xl '>
                  <FaFacebook/>
               </a>
               <a href='#' className='mr-4 text-3xl'>
                  <FaTwitter/>
               </a>
               <a href='#' className='mr-4 text-3xl'>
                  <FaLinkedin/>
               </a>
               <a href='#' className='mr-4 text-3xl'>
                  <FaInstagram/>
               </a>
            </li>
         </ul>
      </div>
      <div className='2xl:w-1/5 xl:w-1/5 lg:w-1/5   md:w-1/6 sm:w-full w-full  mx-4 pb-4'>
         <h1 className='text-xl text-white font-bold py-2'>Categories</h1>
         <ul className='text-white'>
            <li className='py-2'><a href="#">New Products</a></li>
            <li className='py-2'><a href="#">Our Stores</a></li>
            <li className='py-2'><a href="#">Top Sellers</a></li>
            <li className='py-2'><a href="#">Your Health</a></li>
         </ul>
      </div>
      <div className='2xl:w-1/5 xl:w-1/5 lg:w-1/5   md:w-1/6 sm:w-full w-full mx-4 pb-4'>
      <h1 className='text-xl text-white font-bold py-2 '>Information</h1>
         <ul className='text-white'>
         <li><a href="#">Home</a></li>
            <li className='py-2'><a href="#">About</a></li>
            <li className='py-2'><a href="#">Blog</a></li>
            <li className='py-2'><a href="#">Shop</a></li>
            <li className='py-2'><a href="#">Contact</a></li>
         </ul>
      </div>
      <div className='2xl:w-1/5 xl:w-1/5 lg:w-1/5   md:w-1/6 sm:w-full w-full mx-4 pb-4'>
      <h1 className='text-xl text-white font-bold py-2'>My Account</h1>
         <ul className='text-white'>
         <li className='py-2'><a href="#">Checkout</a></li>
            <li className='py-2'><a href="#">Compare</a></li>
            <li className='py-2'><a href="#">My Account</a></li>
            <li className='py-2'><a href="#">Wishlist</a></li>
            
         </ul>
      </div>
      </div>
   </div>
</section>
</>
)
}