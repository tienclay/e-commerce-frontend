"use client";
import React from 'react';
import Link from 'next/link';

// Định nghĩa kiểu dữ liệu cho props
interface CurriculumItem {
  week: number; // Tuần
  description: string; // Mô tả
}

interface ClassCardProps {
  id: string;
  title: string; // Tiêu đề
  description: string; // Mô tả
  curriculum: CurriculumItem[]; // Danh sách các mục trong chương trình học
}


export default function ClassCard({ id, title, description, curriculum }: ClassCardProps) {
  return (
    <div className="rounded overflow-hidden shadow-2xl bg-blue-100 w-full mx-auto">
      {/* Header */}
      <div className="grid grid-cols-12 px-2 py-4 border-b min-h-40">
        <div className="px-8 py-4 col-span-9 self-center">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <Link
          href={`/classes/${id}`}
          className="text-blue-500 font-semibold hover:text-blue-700 col-span-3 block self-center text-center"
        >
          View Detail
        </Link>
      </div>

      {/* Body */}
      <div className="px-4 py-8 min-h-16">
        {/* Course Class Images */}
        <div className="flex overflow-hidden">
          {/* {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Course class ${index + 1}`}
              className="w-16 h-16 rounded"
            />
          ))} */}
        </div>

        {/* Chips Row */}
        <div className="flex justify-between items-center mt-4">
          {/* Left Chips */}
          <div className="flex space-x-4">
            <div className="bg-gray-100 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
              4 Weeks
            </div>
            <div className="bg-gray-100 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
              Beginner
            </div>
          </div>

          {/* Right Chip */}
          <div className="bg-gray-100 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
            By Author
          </div>
        </div>
        {/* Curriculum */}
        <div className="mt-4 px-4">
          <h3 className="text-lg font-semibold text-gray-800">Curriculum</h3>
          <div className="grid grid-cols-3 gap-x-4 gap-y-6 mt-4 min-h-16">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-1 rounded-md shadow text-center max-w-sm min-h-10"
              >
                <div className="text-blue-500 font-bold">Week {item.week}</div>
                <p className="text-gray-600 text-sm mt-1 overflow-hidden break-words">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
