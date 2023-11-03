"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function page() {
  const navigate = useRouter();
  const [data, setData] = useState([]);
  console.log(data);

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("Token");
  }

  if (!token) {
    navigate.push("/login");
  }

  useEffect(() => {
    fetch("http://localhost:4000/api/task", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("Token"),
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

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
      {data.length > 0 ? (
        <div className="grid grid-cols-3 mt-6 gap-x-4 gap-y-8">
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
          {data.map((d) => (
            <div className="shadow rounded">
              <div className="text-[15px] font-semibold p-4 relative">
                {d.completion < 100 ? (
                  <span className="text-[10px] text-black absolute top-[-12px] right-[0px] bg-red-100 px-2 py-1 rounded-full">
                    uncomplete
                  </span>
                ) : (
                  <span className="text-[10px] text-black absolute top-[-12px] right-[0px] bg-green-100 px-2 py-1 rounded-full">
                    completed
                  </span>
                )}
                <p className="mb-2 text-[#2565e6]">{d.taskTitle}</p>
                <hr />
              </div>
              {/* Body */}
              <div className="px-3 pb-3">
                {/* Completion */}
                <div className="flex justify-between items-center">
                  <h5 className="text-[11px] font-semibold text-green-600">
                    {d.completion}% completed
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
                    {d.teamLeader}
                  </p>
                </div>

                {/* Members heading */}
                <div className="flex justify-between mt-2 items-center">
                  <h5 className="text-[12px] font-semibold">Team Members</h5>
                  <h5 className="text-[12px] font-semibold bg-blue-100 rounded-full px-2 py-[3px]">
                    {d.teamMemberNum}
                  </h5>
                </div>

                {/* Members body */}
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {d.teamMembers.map((element) => (
                    <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                      <h6 className="text-[11px]">@{element}</h6>
                    </div>
                  ))}
                </div>
              </div>
              {/* BOTTOM */}
              <div className="px-5 py-2 gap-2 flex">
                <button
                  onClick={() => navigate.push("update-task")}
                  className="text-sm text-white px-4 py-1 bg-green-500 rounded-full"
                >
                  Update
                </button>
                <button className="text-sm px-3 py-1 bg-red-400 text-white rounded-full">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center flex justify-center items-center mt-10 gap-2">
          <p>You didn't create any task</p>
          <button
            onClick={() => navigate.push("/create-task")}
            className="border border-[#2565e6] px-2 py-1 rounded-lg text-sm"
          >
            Create Now
          </button>
        </div>
      )}
    </div>
  );
}

// export const metadata = {
//   title: "My Tasks - TaskTrack",
//   description: "TaskTrack is a task management application",
// };
