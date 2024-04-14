import React, { useState } from 'react'
import { MdAlternateEmail } from "react-icons/md";

import { BiPhoneCall } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { RiUserAddLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { RiUserUnfollowLine } from "react-icons/ri";







function Card({user, onDelete}) {
    const [isFollow, setFollow]=useState(true);
    const handleButtonClick = () => {
        setFollow(!isFollow); // Toggle the state
      };
    const handleDelete = () => {
        onDelete(user.id); // Call onDelete function with user id
      };
    

  return (
    <div className='max-w-1/4  item-center user-card p-6 bg-white rounded-lg shadow-md text-[#868e96]'>
      <img
          key={user.id}
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
          alt={`${user.username}'s avatar`}
          className="rounded-full w-28 mx-auto my-3"
        />

        <h2 className="flex items-center justify-center text-xl font-semibold mb-2 text-black">{user.name} {!isFollow && <FaRegStar className="ml-2" />}</h2>
      <p className='flex items-center gap-2 mb-1'><MdAlternateEmail /> {user.email}</p>
      
      <p className='flex items-center gap-2 mb-1'><BiPhoneCall />{user.phone}</p>
      <p className='flex items-center gap-2 mb-3'><TbWorldWww />{user.website}</p>
      <div className='flex gap-4'>
        
      {isFollow ? <button className='font-semibold flex items-center bg-[#228BE6] px-10 py-1 rounded text-white gap-2 w-1/2 justify-center text-center' onClick={handleButtonClick}>{<><RiUserAddLine /> Follow</> }</button> :
      <button className='font-semibold flex items-center border-[1px] border-black-700 px-10 py-1 rounded text-black gap-2 w-1/2 justify-centerer' onClick={handleButtonClick}>{<><RiUserUnfollowLine /> Unfollow</> }</button>
    }
      <button className='font-semibold flex items-center border-[1px] border-sky-500 px-10 py-1 rounded text-[#228BE6] gap-2 w-1/2 justify-center' onClick={handleDelete}><MdDeleteOutline />Delete</button>
      </div>
      

    </div>
  )
}

export default Card
