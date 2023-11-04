"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import Head from "next/head";

export default function page() {
  const [deleteConfirmationCard, setdeleteConfirmationCard] = useState(false)
  const [deleteConfirmationId, setdeleteConfirmationId] = useState('')
  const navigate = useRouter();
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false)


    // Check token and if haven't the token then push to login page
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
  }, [reload]);


  // Handle delete a task
  const handleDeleteTask = () => {
    fetch(`http://localhost:4000/api/task/${deleteConfirmationId}`, {
      method: "DELETE",
      headers: {
        // authorization: "Bearer " + localStorage.getItem("Token"),
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == '204') {
          setReload(!reload);
          toast.success("A task deleted!");
        } else {
          toast.error("Something went wrong");
        }
      });
    setdeleteConfirmationCard(false)
  }

  return (
    <>
      <Head>
        <title>My Task - TaskTrack</title>
      </Head>

      <div>
        {/* Header */}
        <div className="flex relative items-center justify-between mb-10">
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
                  <p className="mb-2 text-[#2565e6] capitalize">
                    {d.taskTitle}
                  </p>
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
                    <h5 className="text-[12px] font-semibold">Team Leader</h5>
                    <p className="bg-[#e1e9fa] text-[13px] rounded-full px-4 py-[2px] inline-block capitalize">
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
                  <Link
                    href={`/update-task/${d.id}`}
                    className="text-sm text-white px-4 py-1 bg-green-500 rounded-full"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => {
                      setdeleteConfirmationId(d.id);
                      setdeleteConfirmationCard(true);
                    }}
                    className="text-sm px-3 py-1 bg-red-400 text-white rounded-full"
                  >
                    Delete
                  </button>

                  {/*------------------DELETE COMFIMATION BUTTON-------------- */}
                  <div
                    className={`${
                      deleteConfirmationCard ? "block" : "hidden"
                    } fixed top-[20%] left-[33%] shadow bg-white w-[330px] text-center rounded py-3 h-[170px] flex flex-col justify-center`}
                    style={{ backdropFilter: "blur(8px)" }}
                  >
                    <div>
                      <h5 className="text-[20px] font-semibold">
                        Are you sure?{" "}
                      </h5>
                      <h5 className="text-[20px] font-semibold">
                        You want to Delete this?
                      </h5>
                    </div>
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={() => handleDeleteTask()}
                        className="bg-blue-600 px-7 py-2 mt-3 rounded-lg text-white"
                      >
                        Yes!
                      </button>
                      <button
                        onClick={() => setdeleteConfirmationCard(false)}
                        className="bg-red-600 px-5 py-2 mt-3 rounded-lg text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
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
    </>
  );
}

// export const metadata = {
//   title: "My Tasks - TaskTrack",
//   description: "TaskTrack is a task management application",
// };
