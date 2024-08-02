import React from 'react'

const RightSideMenu = () => {
  return (
    <div className='absolute pt-24 pl-4 right-0 p-4 w-32'>
      <p className={`font-['Inter'] font-bold text-[11px]`}>
        SORT
      </p>
      <div className='text-[11px] py-2'>
        <p className='hover:underline cursor-not-allowed'>
          Latest Arrivals
        </p>
        <p>
          Price: Low to High
        </p>
        <p>
          Price: High to Low
        </p>
      </div>
      <div className='mt-8'>
        <p className={`font-['Inter'] font-bold text-[11px]`}>
          COLORS
        </p>
        <div className='text-[11px] py-2'>
          <p className='hover:underline cursor-not-allowed'>
            Black
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Blue
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Brown
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Burgundy
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Gray
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Green
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Navy
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Orange
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Pink
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Purple
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Red
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Tan
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            White
          </p>
          <p className={`hover:underline cursor-not-allowed`}>
            Yellow
          </p>
      </div>
        </div>
    </div>
  )
}

export default RightSideMenu;