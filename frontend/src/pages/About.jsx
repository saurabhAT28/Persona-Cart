import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est sapiente sint debitis dolor illum laboriosam, voluptates adipisci qui, assumenda enim recusandae officiis modi earum accusantium iure provident, esse temporibus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam enim error, reprehenderit tempore consequuntur quae blanditiis assumenda modi, cumque doloremque. Suscipit porro facere consectetur atque, distinctio quasi repellendus vitae?</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet accusantium omnis sit, sint libero blanditiis pariatur doloremque unde illum numquam aliquam error. Quae saepe officiis architecto suscipit mollitia iusto.</p>
        </div>
      </div>
      <div className="text-xl">
        <Title text1={'WHY'} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias consequatur assumenda velit, debitis explicabo tempore exercitationem quae nihil eaque fuga, eveniet est ab culpa dolorum eius necessitatibus praesentium eum dolorem.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias consequatur assumenda velit, debitis explicabo tempore exercitationem quae nihil eaque fuga, eveniet est ab culpa dolorum eius necessitatibus praesentium eum dolorem.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias consequatur assumenda velit, debitis explicabo tempore exercitationem quae nihil eaque fuga, eveniet est ab culpa dolorum eius necessitatibus praesentium eum dolorem.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About