import React from 'react';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>Linkedin <FaLinkedin size={35}/> </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>Github<FaGithub size={35}/> </>
      ),
      href: 'https://github.com/santgonnzalez',
    },
    {
      id: 3,
      child: (
        <>Gmail <HiOutlineMail size={35}/> </>
      ),
      href: 'mailto:'
    },
    {
      id: 4,
      child: (
        <>Resume <BsFillPersonLinesFill size={35}/> </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ]

  return (
    <div className='fixed flex-col top-[40%] left-0'> 
      <ul>

        {links.map(({id,child,href,style,download}) => (

        <li key={id} className={'flex items-center justify-center w-40 h-16 px-3 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300' + " " + style}>
          <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank'>
            {child}
          </a>
        </li>
        ))}

      </ul>
    </div>
  )
}

export default SocialLinks
