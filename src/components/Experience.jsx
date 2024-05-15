import React from 'react'
import javascript from '../assets/javascript.png'
import reactjs from '../assets/reactjs.png'
import css from '../assets/css-3.png'
import html from '../assets/html.png'
import next from '../assets/nextjs.png'
import sql from '../assets/sql.png'
import github from '../assets/GitHub-Logo.png'
import trello from '../assets/trello.png'
import tailwind from '../assets/Tailwind.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import node from '../assets/nodejs.png'
import canva from '../assets/canva.png'

function Experience() {

    const skills = [
        {
            id: 1,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 2,
            src: reactjs,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 3,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 4,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 5,
            src: next,
            title: 'NextJs',
            style: 'shadow-white',
        },
        {
            id: 6,
            src: sql,
            title: 'SQL',
            style: 'shadow-orange-700',
        },
        {
            id: 7,
            src: github,
            title: 'Git Hub',
            style: 'shadow-gray-500',
        },
        {
            id: 8,
            src: trello,
            title: 'Trello',
            style: 'shadow-blue-400',
        },
        {
            id: 9,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
        {
            id: 10,
            src: java,
            title: 'Java',
            style: 'shadow-red-500',
        },
        {
            id: 11,
            src: node,
            title: 'Node',
            style: 'shadow-green-400',
        },
        {
            id: 12,
            src: canva,
            title: 'Canva',
            style: 'shadow-violet-400',
        },
    ]


  return (
    <div name='experience' className='bg-gradient-to-b from-gray-700 to-black'>
      
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline p-2'>Experience</p>
                <p className=' py-6'>These are some techonologies that I've worked with:</p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>  

            {
            skills.map(({id,src,title,style}) => (
                <div 
                key={id} 
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className=' w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
            
            </div>
        </div>

    </div>
  )
}

export default Experience
