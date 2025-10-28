import React from 'react'

const shows = [
  {date: "10/21/2024", venue:"Jo's Backyard", time: "7:00PM"},
  {date: "10/31/2025", venue:"Jo's Backyard", time: "7:00PM"}
]


const ShowPage = () => {
  return (
    <div className="bg-[url('../images/boys-halloween.jpg')] w-full bg-cover bg-center h-screen flex flex-col items-center font-bar ">
        <h1 className='text-white text-4xl pt-10'>SHOWS</h1>
        <div className='w-full flex flex-col text-white font-bold'>
          {shows.map((show) => (
      
              <ul className='bg-red-500/80 rounded-4xl flex justify-between px-5 text-xl m-3 p-2'>
                <li>{show.date}</li>
                <li>{show.venue}</li>
                <li>{show.time}</li>
              </ul>
        
          ))}

        </div>
    </div>
  )
}

export default ShowPage