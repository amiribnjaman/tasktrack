import Link from "next/link";

export default function page() {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center">
        <div className="w-[60%] shadow-md border px-3 py-2 text-center">
          <h3 className="text-xl font-semibold">Login</h3>
          <div className="my-3 flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 pl-4 py-2 rounded-full"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="px-2 pl-4 py-2 rounded-full"
            />
            <button
              className=" px-2 py-1 text-white mt-2 bg-blue-500 rounded-full"
              type="submit"
            >
              Login
            </button>

            <p className="text-[12px] m-0">
              Haven't account?
              <Link href="/signup" className="text-green-700 ml-1">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Dashboard - TaskTrack",
  description: "TaskTrack is a task management application",
};
