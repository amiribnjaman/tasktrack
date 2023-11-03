"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Signup submit function
  const signUpSubmit = (data) => {
    if (data.name && data.email && data.password) {
      fetch("http://localhost:4000/api/user/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status == "201") {
            toast.success("Signup successfully! Login now.");
            // Redirect user to Login page
            router.push('/my-task')
          } else {
            toast.error(data.msg);
          }
        });
    }

    reset();
  };

  // Custom id for tostify
  const customId = "custom-id-yes";

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
                toast.error("Password field is required", {
                  toastId: customId,
                })}
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