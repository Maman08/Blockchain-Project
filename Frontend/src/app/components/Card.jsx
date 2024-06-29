import React from 'react'

function Card() {
  return (
    <div><div className="card bg-blue-100 rounded-xl h-[150px] w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Card title!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div></div>
  )
}

export default Card