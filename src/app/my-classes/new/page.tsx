'use client';

import {COURSE_DESCRIPTION } from '@/constants';
import { CourseCreationDto } from '@/dto/course';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { randomUUID } from 'crypto';
import { useRouter } from 'next/router';
import { Dispatch, FormEvent, ReactElement, SetStateAction, SyntheticEvent, useState } from 'react';

import Link from 'next/link';

const INITIAL_COURSE: CourseCreationDto = {
  name: '',
  subject: '',
  duration: '',
  startDate: new Date(),
  endDate: new Date(),
  description: '',
  locationId: randomUUID()
}

export default function CreateNewClassPage(): ReactElement {


  const [course, setCourse] = useState(() => INITIAL_COURSE);

  const router = useRouter();


  const onChangeCourseName = (e: SyntheticEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      name: e.currentTarget.value
    });
  };

  const onChangeSubject = (e: SyntheticEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      subject: e.currentTarget.value
    })
  };

  const onChangeDuration = (e: SyntheticEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      subject: e.currentTarget.value
    })
  };

  const onChangeCourseDescription = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    setCourse({
      ...course,
      subject: e.currentTarget.value
    })
  };

  const onChangeStartDate = (e: SyntheticEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      startDate: new Date(e.currentTarget.value)
    })
  };

  const onChangeEndDate = (e: SyntheticEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      endDate: new Date(e.currentTarget.value)
    })
  }

  const onSubmitCourseCreationForm = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  return (
    <section className="mx-auto mt-20 bg-[url('/registration/background/classroom.webp')] py-8">

      <form className="max-w-xl mx-auto px-16 py-10 border border-blue-400 rounded-2xl shadow-md shadow-blue-600 bg-blue-50 relative" onSubmit={register}>
        <h1 className="text-3xl text-blue-800 text-center">Register</h1>

        <div className="mb-8 mt-12 grid grid-cols-2 gap-x-8">
          <div>
            <label htmlFor="course-name" className="block mb-2 text-normal font-medium text-gray-900">
              Course name
            </label>
            <input
              type="text"
              id="course-name"
              className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5"
              required
              placeholder="Introduction to Programming"
              value={course.name}
              onChange={(e) => onChangeCourseName(e)}
            />
          </div>

          <div>
            <label htmlFor="role" className="block mb-2 text-normal font-medium text-gray-900">
              Your role
            </label>

            {/* <Menu as="div" className="relative inline-block text-left w-full">
              <div>
                <MenuButton
                  className="inline-flex w-full border justify-center items-center rounded-md p-2.5 bg-gray-50
                  border-blue-500 text-normal text-gray-900
                  ring-blue-300 hover:bg-blue-50 active:text-gray-50 active:bg-blue-500"
                >
                  {
                    (userRole === null) ? (
                      <div className="flex flex-row">
                        Choose a role &nbsp;
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                      </div>
                    ) : (
                      <div className="flex flex-row">
                        {userRole}
                        &nbsp;
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                      </div>
                    )
                  }
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition
                  focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100
                  data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >

                <div className="py-1">
                  <MenuItem as="div">
                    {
                      ROLES.map((role, _) => (
                        <button
                          type="button"
                          className="block w-full px-4 py-2 text-normal hover:bg-blue-500 hover:text-gray-100"
                          value={role}
                          key={`Button ${role}`}
                          // onClick={(e) => changeUserRole(e)}
                        >
                          {role}
                        </button>
                      ))
                    }
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu> */}
          </div>
        </div>

        <div className="mb-8 mt-12">
          <label htmlFor="subject" className="block mb-2 text-normal font-medium text-gray-900">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5"
            required
            placeholder="example@abc.com"
            value={course.subject}
            onChange={(e) => onChangeSubject(e)}
          />

        </div>
        <div className="mb-8">
          <label htmlFor="duration" className="block mb-2 text-normal font-medium text-gray-900">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5"
            required
            placeholder="10 weeks"
            value={course.duration}
            onChange={(e) => onChangeDuration(e)}
          />
        </div>

        <div className="mb-8">
          <label htmlFor="start-date" className="block mb-2 text-normal font-medium text-gray-900">
            Confirm your password
          </label>
          <input
            type="date"
            id="start-date"
            className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5"
            required
            placeholder={new Date().toISOString()}
            value={course.startDate.toISOString()}
            onChange={(e) => onChangeStartDate(e)}
          />
        </div>

        <div className="mb-8">
          <label htmlFor="end-date" className="block mb-2 text-normal font-medium text-gray-900">
            End date
          </label>
          <input
            type="date"
            id="end-date"
            className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5"
            required
            placeholder={new Date().toISOString()}
            value={course.endDate.toISOString()}
            onChange={(e) => onChangeEndDate(e)}
          />
        </div>

        <div className="mb-12">
          <label htmlFor="description" className="block mb-2 text-normal font-medium text-gray-900">
            Description
          </label>
          <textarea
            id="description"
            rows={30}
            className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5"
            placeholder={COURSE_DESCRIPTION}
            value={course.description}
            onChange={(e) => onChangeCourseDescription(e)}
          />
        </div>

        <div className="grid grid-cols-3">

          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center"
            >
              Register
            </button>
          </div>

          <div>
            <button
              type="reset"
              className="text-gray-800 bg-slate-300 hover:bg-slate-400
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center"
            >
              Reset
            </button>
          </div>

        </div>

        <Link
          href="/login"
          className="absolute font-normal text-normal text-blue-600
          hover:text-blue-700 active:text-blue-800 hover:underline hover:underline-offset-4
          active:underline active:underline-offset-2 top-4 left-8 flex justify-center items-center"
        >
          &larr; Back to login
        </Link>
      </form>
    </section>
  );
}
