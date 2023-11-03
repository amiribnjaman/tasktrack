"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function page() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const signUpSubmit = (data) => {
    console.log(data);
  };

  const customId = "custom-id-yes"

  return (
    <div className="mt-8">
      <div className="flex justify-center items-center">
        <div className="w-[60%] shadow-md border px-3 py-2 text-center min-h-[200px]">
          <h3 className="text-xl font-semibold">Signup</h3>
          {/* {errors && <Toaster />} */}
          <form
            onSubmit={handleSubmit(signUpSubmit)}
            className="my-3 flex flex-col gap-2"
          >
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your Name"
              className="px-2 py-2 pl-4 rounded-full"
            />
            <p className="hidden">
              {errors?.name &&
                toast.error("Name field is required", { toastId: customId })}
            </p>

            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="px-2 py-2 pl-4 rounded-full"
            />
            <p className="hidden">
              {errors?.email &&
                toast.error("Email field is required", { toastId: customId })}
            </p>

            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Enter password"
              className="px-2 py-2 pl-4 rounded-full"
            />
            <p className="hidden">
              {errors?.password &&
                toast.error("Password field is required", { toastId: customId })}
            </p>
            <button
              className=" px-2 py-1 text-white mt-2 bg-green-500 rounded-full"
              type="submit"
            >
              Signup
            </button>

            <p className="text-[12px] m-0">
              Already registered?
              <Link href="/login" className="ml-1 text-blue-700">
                Login
              </Link>
            </p>
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
