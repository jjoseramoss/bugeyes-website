import React from 'react'

const ContactPage = () => {
  return (
    <div className="bg-[url('../images/me-and-yale-2.JPG')] w-full bg-cover h-full flex justify-center items-center">
        <div className='w-64 h-64 flex flex-col items-center rounded-lg shadow-lg p-6 bg-white/50 ' >
            <h1 className='font-bar text-3xl'>CONTACT US</h1>
            <hr className='border-t-2 w-full'/>

            {/* Socials  */}
            <div className='space-x-5 pt-2 font-mono font-semibold text-2xl'>
              {/* <i class="fa-brands fa-square-instagram"><a href="https://www.instagram.com/bugeyes.stx/"></a></i>
              <a href="https://www.instagram.com/bugeyes.stx/">Instagram</a> */}

              {/* or do full div */}
              <a 
              href="https://www.instagram.com/bugeyes.stx/"
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 hover:text-gray-700'
              >
                <i className='fa-brands fa-square-instagram'></i>
                <span>Instagram</span>
              </a>
            </div>
        </div>
    </div>
  )
}

export default ContactPage