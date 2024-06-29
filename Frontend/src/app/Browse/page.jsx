import React from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
function page() {
  const cardItems = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      image: 'https://via.placeholder.com/300'
    },
  ];
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-r from-blue-500 to-purple-300">

      <Navbar />
      
     <div className='mt-[80px] flex-wrap flex gap-6 gap-y-6 ml-[80px] '>
        {cardItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />))}
          </div>
    </div>
  )
}

export default page