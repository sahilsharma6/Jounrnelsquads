import React from "react";
import data from "./Authordata";
import "boxicons/css/boxicons.min.css";
import AbbreviationTable from "./AbbreviationTable";
import APC from "./APC";

const JournalSection = ({ title, icon, content }) => (
  <div className="box1 mt-14">
    <h4 className="font-bold text-2xl text-green-500">
      <i className={`bx ${icon}`}></i> {title}
    </h4>
    <hr className="border-t-2 border-dotted border-black mb-4 mt-[0.5rem]" />
    

    {title == "Abbreviations" && <AbbreviationTable />}
    {title == "Article Processing Charges (APC)" && <APC />}
    
    { content.map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ))}
  </div>
);

const Author = () => {
  return (
        <div className="grid md:grid-cols-[65%,30%] gap-[3.2rem] py-[3.25rem] px-[10%]  grid-rows-auto ">
          <div className="container">
            {data.map((item) => (
              <JournalSection
                key={item.id}
                title={item.id}
                icon={item.icon}
                content={Object.values(item).slice(2)}
              />
            ))}
          </div>
          <div className="sidebar">
            <div className="container1 flex flex-col mt-14 shadow-2xl shadow-gray-400 ">
              <button className="flex items-center py-[12px] px-[23px] text-lg bg-sky-900 text-white hover:bg-sky-950">
                <i className="bx bx-upload mr-2"></i> Submit Article
              </button>
              <a
                href=""
                className="flex items-center py-[12px] px-[23px] text-lg hover:bg-gray-200"
              >
                <i className="bx bx-file mr-2"></i> Author guidelines
              </a>
              <a
                href=""
                className="flex items-center py-[12px] px-[23px] text-lg hover:bg-gray-200"
              >
                <i className="bx bx-group mr-2"></i> Editorial board
              </a>
              <a
                href=""
                className="flex items-center py-[12px] px-[23px] text-lg hover:bg-gray-200"
              >
                <i className="bx bxs-file-export mr-2"></i> Abstracting & Indexing
              </a>
              <button className="flex items-center py-[12px] px-[23px] text-lg text-white bg-green-500 hover:bg-green-600">
                <i className="bx bx-log-in mr-2"></i> Sign up for content alert
              </button>
            </div>
          </div>
        </div>
      );
    };

export default Author
