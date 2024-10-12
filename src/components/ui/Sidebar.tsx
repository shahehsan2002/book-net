// import Link from "next/link";
// import React, { ReactNode } from "react";

// const Sidebar = ({ children }: { children: ReactNode }) => {
//   return (
//     <div className="drawer lg:drawer-open">
//       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content flex flex-col items-center justify-center">
//         {/* Page content here */}
//         {children}
//       </div>
//       <div className="drawer-side ">
//         <label
//           htmlFor="my-drawer-2"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu bg-fuchsia-100 text-base-content min-h-full w-80 p-4">
//           {/* Sidebar content here */}
//           <li className="bg-fuchsia-200 rounded mb-2 ">
//             <Link href="/">🏠Home</Link>
//           </li>
//           <li className="bg-fuchsia-200 rounded">
//             <Link href="/dashboard/create-post">📝Create a Post</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import Link from "next/link";
import React, { ReactNode } from "react";

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open relative">
      {/* Background with space vibes */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-purple-900 overflow-hidden z-0">
        {/* Floating Stars */}
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-1000" style={{ top: '15%', left: '25%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-2000" style={{ top: '55%', left: '45%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle" style={{ top: '75%', left: '65%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle" style={{ top: '35%', right: '20%' }}></div>
      </div>

      {/* Sidebar Content */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center z-10">
        {/* Page content here */}
        {children}
      </div>

      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Sidebar Menu with Hover Animations */}
        <ul className="menu bg-gray-900 bg-opacity-80 text-white min-h-full w-80 p-4 shadow-xl">
          <li className="mb-2 transition duration-500 hover:scale-105 transform hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500 rounded">
            <Link href="/">
              <span className="text-lg font-bold transition duration-300 ease-in-out hover:text-yellow-400">
                🏠 Home
              </span>
            </Link>
          </li>
          <li className="transition duration-500 hover:scale-105 transform hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500 rounded">
            <Link href="/dashboard/create-post">
              <span className="text-lg font-bold transition duration-300 ease-in-out hover:text-yellow-400">
                📝 Create a Post
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
