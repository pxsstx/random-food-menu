import React from 'react';
import { data } from '../contents/listMenu';

const Page = () => {
  return (
    <div className="lg:h-[95%] h-[90%]  overflow-scroll">
      <h1 className="text-4xl font-bold mb-6 text-center sticky top-0 bg-base-200 z-40">
        All Menu
      </h1>
      <div className="space-y-8 lg:w-[90%] w-full mx-auto">
        {Object.keys(data).map(category => (
          <div key={category} className=" rounded-lg p-8 border border-red-300">
            <h2 className="text-3xl font-semibold  mb-5 text-center">
              {category}
            </h2>
            <ul className="list-disc list-inside grid lg:grid-cols-5 grid-cols-2 gap-4">
              {data[category].map(item => (
                <li key={item} className=" list-none underline-animate w-fit">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
