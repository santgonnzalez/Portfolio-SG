import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero et autem exercitationem reprehenderit quia porro, recusandae quidem unde saepe impedit quaerat, magnam quod. Aliquam, voluptas qui! Sequi, esse maxime. Quaerat explicabo dolores ipsa rem. Reprehenderit impedit voluptatibus nobis magnam modi ipsa maiores debitis atque, ipsam aperiam libero sit doloribus?</p>

            <br />

            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia tempora iure laudantium corrupti repellat nisi eligendi blanditiis esse illum, id odio omnis vitae voluptas numquam accusamus! Possimus iusto corrupti, omnis mollitia eaque voluptatibus quasi ipsa minima reprehenderit sunt atque dolorum, vero molestiae praesentium! Quia deserunt, culpa facere numquam distinctio porro.</p>
        </div>
    </div>
  )
}

export default About
