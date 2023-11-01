'use client'
import React, { useState } from 'react';

// { personDetails, range, setSearch, setRange, handleFilterReset, setCountry, showFilter, setShowFilter, applyFilterBtn }
export default function FilterSidebar() {
    const [showToolTip, setShowToolTip] = useState(false)

    // Handle tooltip show
    const handleShowTooltip = () => {
        setShowToolTip(true)
    }
    

    // Handle tooltip remove
    const handleRemoveTooltip = () => {
        setShowToolTip(false)
    }

    return (
        // <div className='overflow-x-none dark:bg-black pt-8 dark:border dark:border-black'>
        //     <div className=' dark:bg-[#17181B] bg-[#F7F7F8] mx-auto md:flex items-center justify-around py-4 px-4 md:px-0 '>
        //         <div className='mx-auto md:mx-0 relative'>

                    
        //         </div>
        //     </div>
        // </div>
        <div className=''>
            {/*-------------------- Filter box ---------------------*/}
            <div className={`pt-3 shadow-sm block dark:bg-[#17181B] bg-white px-4 dark:shadow-md  dark:border-slate-800 rounded-md `}>
                        <h3 className=' text-[16px] font-semibold dark:text-white text-black pb-3'>Filter Options</h3>
                        <hr className='pb-2' />
                        <div className='mb-5'>
                            <label htmlFor="countries" class="block mb-2 text-[14px] font-medium text-gray-600 dark:text-gray-400">Influencer's industry</label>
                            <select id="countries" className="bg-[#F9FAFC] border border-gray-100 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected="">Select Options</option>
                                <option >Option one</option>
                            </select>
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="countries" className="block mb-2 text-[14px] font-medium text-gray-600 dark:text-gray-400">Influencer's industry</label>
                            <select id="countries" className="bg-[#F9FAFC] border border-gray-100 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected="">Select Options</option>
                            </select>
                        </div>
                        
                        <div className='mb-2'>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Influencer’s Gender </label>
                            <div className='flex'>
                                <div class="flex w-1/2 items-center mr-4">
                                    <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-[#564FB1] border-[#564FB1] focus:ring-[#564FB1] dark:ring-offset-gray-800 focus:ring-1 dark:border-[#564FB1]" checked />
                                    <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" checked>Male</label>
                                </div>
                                <div class="flex w-1/2 items-center mr-4">
                                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-[#564FB1] border-[#564FB1] focus:ring-[#564FB1] dark:ring-offset-gray-800 focus:ring-1 dark:border-[#564FB1]" />
                                    <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                </div>
                            </div>
                        </div>

                {/*--------------FILTER BUTTON-------------- */}
                        <div className='text-right pb-2 pt-5'>
                            <button
                                type="button" className="text-black border border-[#f6f9ff] bg-[#f6f9ff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-gray-900">Reset</button>
                            <button
                                type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-semibold text-white focus:outline-none bg-[#2565e6] rounded-lg border border-gray-200 hover:bg-[#5952bf] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-[#5e56ce] dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5952bf]">Apply</button>
                        </div>

                    </div>
        </div>
    );
};






// <div className='mb-2'>
{/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Influencer’s Country</label>
<select
    id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option>Select Options</option>
    <option value="bangladesh">Bangladesh</option>
    <option value="india">India</option>
    <option value="france">France</option>
    <option value="usa">USA</option>
</select>
</div>
<div className='mb-2'>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Audience’s Country</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected="">Select Options</option>
</select>
</div>
<div className='mb-2'>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Influencer’s Social Media Platform</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected="">Select Options</option>
</select>
</div>
<div className='mb-2'>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Influencer’s Social Media Platform</label>

{/*---------------- Tooltip---------------*
<div className='flex justify-center'>
    <div class={`${showToolTip ? ' -opacity-10' : 'opacity-5 '} inline-block relative w-[35px] top-[5px] z-10 mx-auto text-center py-2 px-3 text-sm font-medium text-white bg-[#564FB1] rounded-lg shadow-sm tooltip `}>
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</div>

<div>
    <input
        id="small-range" type="range"  class="w-full h-1 text-[#564FB1] bg-[#564FB1] rounded-lg appearance-[#564FB1] cursor-pointer" />
</div>



<div class="w-full flex text-[#565D69] justify-between text-xs px-2" >
    <span>1k</span>
    <span>15k</span>
    <span>30k</span>
    <span>45k</span>
    <span>60k</span>
    <span>75k</span>
    <span>90k</span>
</div>
</div> */}