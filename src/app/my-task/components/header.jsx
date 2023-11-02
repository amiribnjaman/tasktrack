"use client"

        import Link from "next/link";
        import React from "react";
        export default function Header() { 
            return (
                <div className='flex justify-between'>
          <h3 className='text-xl'>My Task</h3>
          <button onClick={()=> alert('hello')} className='bg-[#2565e6] text-white px-4 py-2 cursor-pointer rounded' >Create Task</button>
</div>
        )
        
        }