"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function page({ params }) {
  const navigate = useRouter();
  // Check token and if haven't the token then push to login page
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("Token");
  }
  if (!token) {
    navigate.push("/login");
  }

  const id = params.id;

   const {
     register,
     formState: { errors },
     handleSubmit,
     reset,
   } = useForm();

   // Custom id for tostify
   const customId = "custom-id-yes";


  const handleUpdateTask = data => {
    console.log(data)
    if (data) {
      fetch(`http://localhost:4000/api/task/${id}`, {
        method: "PATCH",
        headers: {
          authorization: "Bearer " + localStorage.getItem("Token"),
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.status == "201") {
            toast.success("Task updated succefully!");
            // Redirect to task page
            navigate.push('/my-task')
          } else {
            toast.error(data.msg);
          }
        });
    }

    reset();
  }
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center">
        <div className="w-[80%] shadow-md border px-3 py-3 text-center">
          <h3 className="text-xl font-semibold">Update Task</h3>
          <form
            onSubmit={handleSubmit(handleUpdateTask)}
            className="my-3 flex flex-col gap-2"
          >
            <input
              {...register("taskTitle", { required: false })}
              type="text"
              placeholder="Task name"
              className="px-2 pl-4 py-2 rounded-full"
            />
            <p className="hidden">
              {errors?.taskTitle &&
                toast.error("Taks Name is required", { toastId: customId })}
            </p>

            <input
              {...register("completion", { required: true })}
              type="text"
              placeholder="Updated Completion (%)"
              className="px-2 pl-4 py-2 rounded-full"
            />
            <p className="hidden">
              {errors?.completion &&
                toast.error("Completion is required", { toastId: customId })}
            </p>

            {/* <div className="flex justify-between"> */}
            <input
              {...register("teamLeader", { required: false })}
              type="text"
              placeholder="Team Leader"
              className="px-2 pl-4 py-2 rounded-full"
            />
            <p className="hidden">
              {errors?.teamLeader &&
                toast.error("Leader is required", { toastId: customId })}
            </p>

            <input
              {...register("teamMemberNum", { required: false })}
              type="number"
              placeholder="Update Team Members"
              className="px-2 pl-4 py-2 rounded-full"
            />
            <p className="hidden">
              {errors?.teamMemberNum &&
                toast.error("Members is required", { toastId: customId })}
            </p>
            <button
              className=" px-2 py-1 text-white mt-2 bg-green-500 rounded-full"
              type="submit"
            >
              Update Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// export const metadata = {
//   title: "Dashboard - TaskTrack",
//   description: "TaskTrack is a task management application",
// };
