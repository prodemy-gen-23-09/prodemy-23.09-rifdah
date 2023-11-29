import React from 'react'

function ProductCard(props){
  return (
    <div className='w-80 p-4 bg-white rounded-lg relative justify-center align-center text-center mb-4 -mt-32'>
      <div className='p-8 bg-bgGray rounded-lg'>
        <img src={props.img} alt="img-shirt"/>
      </div>
      <div className='mt-2'>
        <h5 className='text-lg font-semibold'>{props.title}</h5>
        <p className='mt-1 text-slate-400'>{props.description}</p>
        <h6 className='mt-8 font-bold text-lg'>{props.price}</h6>
      </div>
      <div className='flex gap-2 justify-center align-center text-center'>
      <button className='h-10 px-6 bg-blue-500 font-semibold rounded-md text-white py-2 mt-4'>Add to Cart</button>
      <button className='h-10 px-6 bg-blue-800 font-semibold rounded-md text-white py-2 mt-4'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCard
