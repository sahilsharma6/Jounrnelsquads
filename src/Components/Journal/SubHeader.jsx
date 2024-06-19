// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
 
// const SubHeader = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
 
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
 
//   const handleDropdownEnter = (index) => {
//     setActiveDropdown(index);
//   };
 
//   const handleDropdownLeave = () => {
//     setActiveDropdown(null);
//   };
 
//   // Dropdown data for each tab
//   const dropdownData = [
//     [
//       { id: "d1", text: "Dummy" },
//       { id: 2, text: "Dummy" },
//       { id: 3, text: "Dummy" },
//     ],
//     [
//       { id: 4, text: "Dummy" },
//       { id: 5, text: "Dummy" },
//       { id: 6, text: "Dummy" },
//     ],
//     [
//       { id: 7, text: "Authors Guidelines" },
//       { id: 8, text: "Reviewer Guidelines" },
//       { id: 9, text: "Editors Guidelines" },
//     ],
//   ];
 
//   // Specific links for the last two tabs
//   const specificLinks = ["fir", "sec"];
 
//   return (
//     <div className=" relative ">
//       {/* Horizontal tabs */}
//       <div className="hidden md:flex justify-around items-center  bg-green-500 text-white py-4 ">
//         {["Journal Overview","Editorial Board", "Guidlines", "Special Issues", "Articles"].map(
//           (tab, index) => (
//             <div key={index} className="  hover:bg-blue-900 p-2 hover:rounded ">
//               {index < 3 ? (
//                 <div>
//                   <button
//                     className="hover:text-gray-300"
//                     onMouseEnter={() => handleDropdownEnter(index)}
//                     // onMouseLeave={handleDropdownLeave}
//                   >
//                     {tab}
//                     <FontAwesomeIcon icon={faAngleDown} className="pl-2" />
//                   </button>
//                   {activeDropdown === index && (
//                     <div
//                       className="absolute top-full left-0 right-0  flex justify-around h-[60px]  bg-white text-gray-800 shadow-lg rounded-lg   overflow-hidden"
//                       onMouseLeave={handleDropdownLeave}
//                     >
//                       {dropdownData[index].map((item) => (
//                         <a
//                           key={item.id}
//                           href="/journal/author"
//                           className="px-4 py-2 hover:bg-gray-200 flex items-center "
//                         >
//                           {item.text}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <a
//                   href={specificLinks[index - 3]}
//                   className="hover:text-gray-300  "
//                 >
//                   {tab}
//                 </a>
//               )}
//             </div>
//           )
//         )}
//       </div>
 
//       {/* Sidebar toggle button for small screens */}
//       <div className="md:hidden flex justify-end p-4  bg-green-500 text-white h-14  relative ">
//         <button
//           onClick={toggleSidebar}
//           className="focus:outline-none absolute left-5 "
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={
//                 isSidebarOpen
//                   ? "M6 18L18 6M6 6l12 12"
//                   : "M4 6h16M4 12h16m-7 6h7"
//               }
//             />
//           </svg>
//         </button>
//       </div>
 
//       {/* Sidebar for small screens */}
//       <div
//         className={`fixed inset-y-0 left-0 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 md:hidden`}
//       >
//         <div className="p-4">
//           <button onClick={toggleSidebar} className="focus:outline-none mb-4">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//           {["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"].map((tab, index) => (
//             <div key={index} className="relative mt-5">
//               {index < 3 ? (
//                 <div>
//                   <button
//                     className="hover:text-gray-300"
//                     onMouseEnter={() => handleDropdownEnter(index)}
//                     // onMouseLeave={handleDropdownLeave}
//                   >
//                     {tab}
//                     <FontAwesomeIcon icon={faAngleDown} className="pl-2" />
//                   </button>
//                   {activeDropdown === index && (
//                     <div
//                       className="absolute z-20 top-full left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden"
//                       onMouseLeave={handleDropdownLeave}
//                     >
//                       {dropdownData[index].map((item) => (
//                         <a
//                           key={item.id}
//                           href={`#${item.id}`}
//                           className="px-4 py-2 hover:bg-gray-200 flex items-center"
//                         >
//                           {item.text}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <a
//                   href={specificLinks[index - 3]}
//                   className="block px-4 py-2 hover:bg-gray-700"
//                 >
//                   {tab}
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default SubHeader;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const SubHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Dropdown data for each tab
  const dropdownData = [
    [
      { id: "d1", text: "Dummy" },
      { id: 2, text: "Dummy" },
      { id: 3, text: "Dummy" },
    ],
    [
      { id: 4, text: "Dummy" },
      { id: 5, text: "Dummy" },
      { id: 6, text: "Dummy" },
    ],
    [
      { id: 7, text: "Authors Guidelines", link: "/journal/author" },
      { id: 8, text: "Reviewer Guidelines", link: "/journal/reviewer" },
      { id: 9, text: "Editors Guidelines", link: "/journal/editor" },
    ],
  ];

  // Specific links for the last two tabs
  const specificLinks = ["fir", "sec"];

  return (
    <div className="relative">
      {/* Horizontal tabs */}
      <div className="hidden md:flex justify-around items-center bg-green-500 text-white py-4">
        {[
          "Journal Overview",
          "Editorial Board",
          "Guidelines",
          "Special Issues",
          "Articles",
        ].map((tab, index) => (
          <div key={index} className="hover:bg-blue-900 p-2 hover:rounded">
            {index < 3 ? (
              <div>
                <button
                  className="hover:text-gray-300"
                  onMouseEnter={() => handleDropdownEnter(index)}
                >
                  {tab}
                  <FontAwesomeIcon icon={faAngleDown} className="pl-2" />
                </button>
                {activeDropdown === index && (
                  <div
                    className="absolute top-full left-0 right-0 flex justify-around h-[60px] bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden"
                    onMouseLeave={handleDropdownLeave}
                  >
                    {dropdownData[index].map((item) => (
                      <a
                        key={item.id}
                        href={item.link}
                        className="px-4 py-2 hover:bg-gray-200 flex items-center"
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={specificLinks[index - 3]}
                className="hover:text-gray-300"
              >
                {tab}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Sidebar toggle button for small screens */}
      <div className="md:hidden flex justify-end p-4 bg-green-500 text-white h-14 relative">
        <button
          onClick={toggleSidebar}
          className="focus:outline-none absolute left-5"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 md:hidden`}
      >
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none mb-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"].map((tab, index) => (
            <div key={index} className="relative mt-5">
              {index < 3 ? (
                <div>
                  <button
                    className="hover:text-gray-300"
                    onMouseEnter={() => handleDropdownEnter(index)}
                  >
                    {tab}
                    <FontAwesomeIcon icon={faAngleDown} className="pl-2" />
                  </button>
                  {activeDropdown === index && (
                    <div
                      className="absolute z-20 top-full left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden"
                      onMouseLeave={handleDropdownLeave}
                    >
                      {dropdownData[index].map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="px-4 py-2 hover:bg-gray-200 flex items-center"
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={specificLinks[index - 3]}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  {tab}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
