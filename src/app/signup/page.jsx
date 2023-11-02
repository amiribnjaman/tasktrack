import Link from "next/link";

export default function page() {
  return (
    <div className="mt-8">
      <div className="flex justify-center items-center">
        <div className="w-[60%] shadow-md border px-3 py-2 text-center min-h-[200px]">
          <h3 className="text-xl font-semibold">Signup</h3>
          <div className="my-3 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter your Name"
              className="px-2 py-2 pl-4 rounded-full"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-2 pl-4 rounded-full"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="px-2 py-2 pl-4 rounded-full"
            />
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
