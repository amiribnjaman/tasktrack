"use client";
import React, { useState, useContext } from "react";
import { SearchContext } from "../app/context/SearchContext";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function FilterSidebar() {
  const navigate = useRouter();
  const [filterSeleted, setFilterSelected] = useState({
    teamLeader: "",
    teamMemberNum: "",
    completion: "",
  });
  // SERACH CONTEXT VALUE
  const { tasks, setTasks, oldData, setOldData } = useContext(SearchContext);

  // Check token and if haven't the token then push to login page
  // let token;
  // if (typeof window !== "undefined") {
  //   token = localStorage.getItem("Token");
  // }
  // if (!token) {
  //   setTasks([])
  // }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Filter handle function.
  const handleFilter = (data) => {
    console.log(data);
    // Here getting the filter selected value for reset leter
    setFilterSelected({
      teamLeader: data.teamLeader,
      teamMemberNum: data.teamMemberNum,
      completion: data.completion,
    });
    let result;
    // condition for leader and team membernum matchend or not
    if (
      data.teamLeader &&
      data.teamMemberNum &&
      data.completion == "complete"
    ) {
      result = tasks.filter((task) => {
        return (
          task.teamMemberNum == data.teamMemberNum &&
          task.teamLeader == data.teamLeader &&
          task.completion == 100
        );
      });
      setTasks(result);
    } else if (
      data.teamLeader &&
      data.teamMemberNum &&
      data.completion == "incomplete"
    ) {
      result = tasks.filter((task) => {
        return (
          task.teamMemberNum == data.teamMemberNum &&
          task.teamLeader == data.teamLeader &&
          task.completion < 100
        );
      });
      setTasks(result);
      // condition only for team leader
    } else if (data.teamLeader && data.teamMemberNum) {
      result = tasks.filter((task) => {
        return (
          task.teamMemberNum == data.teamMemberNum &&
          task.teamLeader == data.teamLeader
        );
      });
      setTasks(result);
    } else if (data.teamLeader && data.completion == "complete") {
      result = tasks.filter((task) => {
        return (
          task.teamMemberNum == data.teamMemberNum && task.completion == 100
        );
      });
      setTasks(result);
    } else if (data.teamLeader && data.completion == "incomplete") {
      result = tasks.filter((task) => {
        return (
          task.teamMemberNum == data.teamMemberNum && task.completion < 100
        );
      });
      setTasks(result);
    } else if (data.teamLeader) {
      result = tasks.filter((task) => task.teamLeader == data.teamLeader);
      setTasks(result);
      // condition only for teamMemberNum
    } else if (data.teamMemberNum) {
      result = tasks.filter((task) => task.teamMemberNum == data.teamMemberNum);
      setTasks(result);
      // Condition for complete or incomplete radio options
    } else if (data.completion == "complete") {
      result = tasks.filter((task) => task.completion == 100);
      setTasks(result);
    } else if (data.completion == "incomplete") {
      result = tasks.filter((task) => task.completion < 100);
      setTasks(result);
    }
  };

  // Handle filter reset
  const handleReset = () => {
    // Reset all filter selected value
    setFilterSelected({
      teamLeader: "",
      teamMemberNum: "",
      completion: "",
    });
    setTasks(oldData);
  };

  return (
    <div className="">
      {/*-------------------- Filter box ---------------------*/}
      <form
        onSubmit={handleSubmit(handleFilter)}
        className={`pt-3 shadow-sm block dark:bg-[#17181B] bg-white px-4 dark:shadow-md  dark:border-slate-800 rounded-md `}
      >
        <h3 className=" text-[16px] font-semibold dark:text-white text-black pb-3">
          Filter Options
        </h3>
        <hr className="pb-2" />
        <div className="mb-5">
          <label
            htmlFor="countries"
            class="block mb-2 text-[14px] font-medium text-gray-600 dark:text-gray-400"
          >
            Team Leader
          </label>
          <select
            {...register("teamLeader")}
            id="countries"
            className="bg-[#F9FAFC] border border-gray-100 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" selected>
              Seletect Leader
            </option>
            {tasks.length > 0
              ? tasks.map((task) => (
                  <option value={task.teamLeader}>{task.teamLeader}</option>
                ))
              : ""}
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="countries"
            className="block mb-2 text-[14px] font-medium text-gray-600 dark:text-gray-400"
          >
            Team members
          </label>
          <select
            {...register("teamMemberNum")}
            id="countries"
            className="bg-[#F9FAFC] border border-gray-100 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" selected>
              Select Member
            </option>
            {tasks.length > 0
              ? tasks.map((task) => (
                  <option value={task.teamMemberNum}>
                    {task.teamMemberNum}
                  </option>
                ))
              : ""}
          </select>
        </div>

        {/*------COMPLETEION OPTION------ */}
        <div className="mb-5">
          <label
            htmlFor="countries"
            class="block mb-2 text-[14px] font-medium text-gray-600 dark:text-gray-400"
          >
            Completion
          </label>
          <select
            {...register("completion")}
            id="countries"
            className="bg-[#F9FAFC] border border-gray-100 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" selected>
              Seletect Completion
            </option>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
            {/* {tasks.length > 0
              ? tasks.map((task) => (
                  <option value={task.completion}>{task.completion}</option>
                ))
              : ""} */}
          </select>
        </div>
        {/*<div className="mb-2">
          <label
            for="complete"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Completion
          </label>
          <div className="flex">
            <div class="flex w-1/2 items-center mr-4">
              <input
                {...register("completion")}
                id="inline-radio"
                type="radio"
                value="complete"
                class="w-4 h-4 text-[#564FB1] border-[#564FB1] focus:ring-[#564FB1] dark:ring-offset-gray-800 focus:ring-1 dark:border-[#564FB1]"
              />
              <label
                for="inline-radio"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                complete
              </label>
            </div>
            <div class="flex w-1/2 items-center mr-4">
              <input
                {...register("completion")}
                id="inline-2-radio"
                type="radio"
                value="incomplete"
                class="w-4 h-4 text-[#564FB1] border-[#564FB1] focus:ring-[#564FB1] dark:ring-offset-gray-800 focus:ring-1 dark:border-[#564FB1]"
              />
              <label
                for="inline-2-radio"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                incomplete
              </label>
            </div>
          </div>
        </div>*/}

        {/*--------------FILTER BUTTON-------------- */}
        <div className="text-right pb-2 pt-5">
          <button
            onClick={handleReset}
            type="button"
            className="text-black border border-[#f6f9ff] bg-[#f6f9ff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-gray-900"
          >
            Reset
          </button>
          <button
            type="submit"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-semibold text-white focus:outline-none bg-[#2565e6] rounded-lg border border-gray-200 hover:bg-[#5952bf] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-[#5e56ce] dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#5952bf]"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
