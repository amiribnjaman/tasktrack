'use client'


import { useRouter } from "next/navigation";

export default function page() {
  const navigate = useRouter()
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-xl">Tasks</h3>
        <button
          onClick={() => navigate.push("/create-task")}
          className="bg-[#2565e6] px-4 py-2 rounded-lg text-white"
        >
          Create Task
        </button>
      </div>

      {/* Body */}
      <div className="grid grid-cols-3 mt-6 gap-4">
        {/* card */}
        {/* <div className="border border-[1.5px] border-dashed px-4 py-6 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width=".5"
            stroke="currentColor"
            class="w-[60%] mx-auto text-[#ddd]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </div> */}

        {/*-------------- SINGLE CARD ---------------*/}
        <div className="shadow rounded">
          <div className="text-[15px] font-semibold p-4 relative">
            <span className="text-[10px] text-black absolute top-[-12px] right-[0px] bg-red-100 px-2 py-1 rounded-full">
              uncomplete
            </span>
            <p className="mb-2 text-[#2565e6]">Web Developement</p>
            <hr />
          </div>
          {/* Body */}
          <div className="px-3 pb-3">
            {/* Completion */}
            <div className="flex justify-between items-center">
              <h5 className="text-[11px] font-semibold text-green-600">
                60% completed
              </h5>
              <button className="bg-green-100 text-sm rounded-full px-4 py-[2px] inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width=".5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </button>
            </div>
            {/* Team leader */}
            <div className="flex justify-between items-center mt-2">
              <h5 className="text-[11px] font-semibold">Team Leader</h5>
              <p className="bg-[#e1e9fa] text-sm rounded-full px-4 py-[2px] inline-block">
                Jack
              </p>
            </div>

            {/* Members heading */}
            <div className="flex justify-between mt-2 items-center">
              <h5 className="text-[12px] font-semibold">Team Members</h5>
              <h5 className="text-[12px] font-semibold bg-blue-100 rounded-full px-2 py-[3px]">
                8
              </h5>
            </div>

            {/* Members body */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="px-5 py-2 gap-2 flex">
            <button
              onClick={() => navigate.push('update-task')}
              className="text-sm text-white px-4 py-1 bg-green-500 rounded-full"
            >
              Update
            </button>
            <button className="text-sm px-3 py-1 bg-red-400 text-white rounded-full">
              Delete
            </button>
          </div>
        </div>
        {/*-------------- SINGLE CARD ---------------*/}
        <div className="shadow rounded">
          <div className="text-[15px] font-semibold p-4 relative">
            <span className="text-[10px] text-white absolute top-[-12px] right-[0px] bg-red-300 px-2 py-1 rounded-full">
              uncomplete
            </span>
            <p className="mb-2 text-[#2565e6]">Web Developement</p>
            <hr />
          </div>
          {/* Body */}
          <div className="px-3 pb-3">
            {/* Completion */}
            <div className="flex justify-between items-center">
              <h5 className="text-[11px] font-semibold text-green-600">
                60% completed
              </h5>
              <button className="bg-green-100 text-sm rounded-full px-4 py-[2px] inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width=".5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </button>
            </div>
            {/* Team leader */}
            <div className="flex justify-between items-center mt-2">
              <h5 className="text-[11px] font-semibold">Team Leader</h5>
              <p className="bg-[#e1e9fa] text-sm rounded-full px-4 py-[2px] inline-block">
                Jack
              </p>
            </div>

            {/* Members heading */}
            <div className="flex justify-between mt-2 items-center">
              <h5 className="text-[12px] font-semibold">Team Members</h5>
              <h5 className="text-[12px] font-semibold bg-blue-100 rounded-full px-2 py-[3px]">
                8
              </h5>
            </div>

            {/* Members body */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="px-5 py-2 gap-2 flex">
            <button className="text-sm text-white px-4 py-1 bg-green-500 rounded-full">
              Update
            </button>
            <button className="text-sm px-3 py-1 bg-red-400 text-white rounded-full">
              Delete
            </button>
          </div>
        </div>
        {/*-------------- SINGLE CARD ---------------*/}
        <div className="shadow rounded">
          <div className="text-[15px] font-semibold p-4 relative">
            <span className="text-[10px] text-white absolute top-[-12px] right-[0px] bg-red-300 px-2 py-1 rounded-full">
              uncomplete
            </span>
            <p className="mb-2 text-[#2565e6]">Web Developement</p>
            <hr />
          </div>
          {/* Body */}
          <div className="px-3 pb-3">
            {/* Completion */}
            <div className="flex justify-between items-center">
              <h5 className="text-[11px] font-semibold text-green-600">
                60% completed
              </h5>
              <button className="bg-green-100 text-sm rounded-full px-4 py-[2px] inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width=".5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </button>
            </div>
            {/* Team leader */}
            <div className="flex justify-between items-center mt-2">
              <h5 className="text-[11px] font-semibold">Team Leader</h5>
              <p className="bg-[#e1e9fa] text-sm rounded-full px-4 py-[2px] inline-block">
                Jack
              </p>
            </div>

            {/* Members heading */}
            <div className="flex justify-between mt-2 items-center">
              <h5 className="text-[12px] font-semibold">Team Members</h5>
              <h5 className="text-[12px] font-semibold bg-blue-100 rounded-full px-2 py-[3px]">
                8
              </h5>
            </div>

            {/* Members body */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
              <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                <h6 className="text-[12px]">@javas</h6>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="px-5 py-2 gap-2 flex">
            <button className="text-sm text-white px-4 py-1 bg-green-500 rounded-full">
              Update
            </button>
            <button className="text-sm px-3 py-1 bg-red-400 text-white rounded-full">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export const metadata = {
//   title: "My Tasks - TaskTrack",
//   description: "TaskTrack is a task management application",
// };
