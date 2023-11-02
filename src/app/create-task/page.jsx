import Link from "next/link";

export default function page() {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center">
        <div className="w-[80%] shadow-md border px-3 py-3 text-center">
          <h3 className="text-xl font-semibold">Create a new Task</h3>
          <div className="my-3 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Task name"
              className="px-2 pl-4 py-2 rounded-full"
            />
            <input
              type="text"
              placeholder="Completion (%)"
              className="px-2 pl-4 py-2 rounded-full"
            />
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Team Leader"
                className="px-2 pl-4 py-2 rounded-full"
              />
              <input
                type="number"
                placeholder="Total Member"
                className="px-2 pl-4 py-2 rounded-full"
              />
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Member Name"
                className="px-2 pl-4 py-2 w-[70%] rounded-full"
              />
              <button
                type="text"
                placeholder="Member Name"
                className="px-4 border bg-blue-200 py-2 rounded-full text-[14px]"
              >Add Member</button>
            </div>
            <button
              className=" px-2 py-1 text-white mt-2 bg-blue-500 rounded-full"
              type="submit"
            >
              Create Task
            </button>

        
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
