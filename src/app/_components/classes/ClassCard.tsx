
import React from 'react';

export default function ClassCard({ title, description, classLink, curriculum }) {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <a
          href={classLink}
          className="text-blue-500 font-semibold hover:text-blue-700"
        >
          View Detail
        </a>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Course Class Images */}
        <div className="flex space-x-2 overflow-hidden">
          {/* {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Course class ${index + 1}`}
              className="w-16 h-16 rounded"
            />
          ))} */}
        </div>

        {/* Curriculum */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Curriculum</h3>
          <div className="flex space-x-4 overflow-x-auto mt-2">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-100 p-3 rounded-md shadow text-center w-24"
              >
                <div className="text-blue-500 font-bold">Week {item.week}</div>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
