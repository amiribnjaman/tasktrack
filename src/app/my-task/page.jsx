"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import Link from "next/link";
import { toast } from "react-toastify";

export default function page() {
  const [deleteConfirmationCard, setdeleteConfirmationCard] = useState(false);
  const [deleteConfirmationId, setdeleteConfirmationId] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();

  // SERACH CONTEXT VALUE
  const { setReload, reload, tasks, setTasks } = useContext(SearchContext);

  // Check token and if haven't the token then push to login page
  let token;
  useEffect(() => {
    if (typeof window !== "undefined") {
      token = localStorage.getItem("Token");
    }
    if (!token) {
      navigate.push("/login");
    }
  }, [reload]);

  // Handle REFRESH button
  const handleRefresh = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setReload(!reload);
    setTasks(tasks);
  };

  // Handle delete a task
  const handleDeleteTask = () => {
    token = localStorage.getItem("Token");
    if (!token) {
      navigate.push("/login");
    } else {
      fetch(
        `https://tasktrack-87zm.onrender.com/api/task/${deleteConfirmationId}`,
        {
          method: "DELETE",
          headers: {
            authorization: "Bearer " + localStorage.getItem("Token"),
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "204") {
            setReload(!reload);
            toast.success("A task deleted!");
          } else {
            toast.error("Something went wrong");
          }
        });
    }

    setdeleteConfirmationCard(false);
  };

  //--------------------------------PAGINATION
  //------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  let tasksData;
  let npage;
  let numbers;
  if (tasks.length > 0) {
    tasksData = tasks.length > 0 && tasks.slice(firstIndex, lastIndex);
    npage = Math.ceil(tasks.length / recordsPerPage);
    numbers = [...Array(npage + 1).keys()].slice(1);
  }

  // handle next page
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  // handle previous page
  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Change current page
  const changeCurPage = (index) => {
    setCurrentPage(index);
  };

  return (
    <>
      <div>
        {/* Header */}
        <div className="flex relative items-center justify-between mb-10">
          <div className="flex items-center gap-5">
            <h3 className="text-xl">Tasks</h3>
            {loading ? (
              <span>...</span>
            ) : (
              <button onClick={handleRefresh} className="mt-1 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
            )}
          </div>
          <button
            onClick={() => navigate.push("/create-task")}
            className="bg-[#2565e6] px-4 py-2 rounded-lg text-white"
          >
            Create Task
          </button>
        </div>

        {/* Body */}

        <>
          <h4 className="text-sm">
            <span className="mr-1 font-bold">{tasks.length}</span>Tasks found.
          </h4>
          {tasks.length > 0 ? (
            <div className="grid relative grid-cols-1 md:grid-cols-3 mt-6 gap-x-4 gap-y-8">
              {/* card */}

              {/*-------------- SINGLE CARD ---------------*/}
              {tasksData.length > 0 &&
                tasksData.map((task) => (
                  <div className="shadow rounded">
                    <div className="text-[15px] font-semibold p-4 relative">
                      {task.completion < 100 ? (
                        <span className="text-[10px] text-black absolute top-[-12px] right-[0px] bg-red-100 px-2 py-1 rounded-full">
                          Incomplete
                        </span>
                      ) : (
                        <span className="text-[10px] text-black absolute top-[-12px] right-[0px] bg-green-100 px-2 py-1 rounded-full">
                          Completed
                        </span>
                      )}
                      <p className="mb-2 text-[#2565e6] capitalize">
                        {task.taskTitle}
                      </p>
                      <hr />
                    </div>
                    {/* Body */}
                    <div className="px-3 pb-3">
                      {/* Completion */}
                      <div className="flex justify-between items-center">
                        <h5
                          className={`text-[11px] font-semibold ${
                            task.completion < 100
                              ? "text-red-500"
                              : "text-green-600"
                          }`}
                        >
                          {task.completion}% completed
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
                        <h5 className="text-[12px] font-semibold">
                          Team Leader
                        </h5>
                        <p className="bg-[#e1e9fa] text-[13px] rounded-full px-4 py-[2px] inline-block capitalize">
                          {task.teamLeader}
                        </p>
                      </div>

                      {/* Members heading */}
                      <div className="flex justify-between mt-2 items-center">
                        <h5 className="text-[12px] font-semibold">
                          Team Members
                        </h5>
                        <h5 className="text-[12px] font-semibold bg-blue-100 rounded-full px-2 py-[3px]">
                          {task.teamMemberNum}
                        </h5>
                      </div>

                      {/* Members body */}
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {task.teamMembers.map((element) => (
                          <div className="bg-gray-200 px-1.5 text-sm py-[3px] rounded-full">
                            <h6 className="text-[11px]">@{element}</h6>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* BOTTOM */}
                    <div className="px-5 py-2 gap-2 flex">
                      <Link
                        href={`/update-task/${task.id}`}
                        className="text-sm text-white px-4 py-1 bg-green-500 rounded-full"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => {
                          setdeleteConfirmationId(task.id);
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
                        } fixed z-50 left-[7%] top-[15%] md:left-[33%] shadow bg-white w-[330px] text-center rounded py-3 h-[170px] flex flex-col justify-center`}
                        style={{ backdropFilter: "blur(8px)" }}
                      >
                        <div>
                          <h5 className="text-[18px] font-semibold">
                            Are you sure
                          </h5>
                          <h5 className="text-[18px] font-semibold">
                            You want to Delete this?
                          </h5>
                        </div>
                        <div className="flex gap-3 justify-center">
                          <button
                            onClick={() => setdeleteConfirmationCard(false)}
                            className="bg-slate-600 px-5 py-2 mt-3 rounded-lg text-white"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleDeleteTask()}
                            className="bg-red-600 px-7 py-2 mt-3 rounded-lg text-white"
                          >
                            Yes, I'm!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center flex justify-center items-center mt-10 gap-2">
              <p>No task is available!</p>
              <button
                onClick={() => navigate.push("/create-task")}
                className="border border-[#2565e6] px-2 py-1 rounded-lg text-sm"
              >
                Create Now
              </button>
            </div>
          )}
        </>

        {/*-----------------PAGINATION------------------ */}
        {tasks.length > 3 ? (
          <div className="flex justify-center mt-14 gap-1">
            {currentPage == 1 ? (
              <button
                onClick={prevPage}
                className="border px-3 py-0 rounded-full text-[11px] font-semibold btn btn-sm capitalize text-slate-300 mr-2 font-normal cursor-not-allowed"
                disabled
              >
                Previous
              </button>
            ) : (
              <button
                onClick={prevPage}
                className="border border-slate-500/75 text-[11px] text-slate-500 font-semibold px-3 py-0 rounded-full btn btn-sm mr-2 capitalize"
              >
                Previous
              </button>
            )}
            {numbers.map((n) => (
              <button
                onClick={() => changeCurPage(n)}
                className={`py-[4px] rounded-full ${
                  currentPage === n
                    ? "px-[12px] text-blue-600  bg-[#e8eefa] "
                    : "px-[5px]"
                } join-item btn btn-sm`}
              >
                {n}
              </button>
            ))}
            {numbers.length === currentPage ? (
              <button
                onClick={nextPage}
                className={`border px-3 py-0 rounded-full btn capitalize text-[11px] text-slate-400 font-semibold btn-sm text-slate-400 ml-2 cursor-not-allowed`}
                disabled
              >
                Next
              </button>
            ) : (
              <button
                onClick={nextPage}
                className={`border px-3 py-0 border-slate-500/75 rounded-full btn capitalize text-[11px] text-slate-500 font-semibold btn-sm`}
              >
                Next
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

// export const metadata = {
//   title: "My Tasks - TaskTrack",
//   description: "TaskTrack is a task management application",
// };
