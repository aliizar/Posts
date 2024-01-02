import React from "react";

const Footer = ({postsData}) => {
  return (
    <>
      <div className="bg-slate-900  border-t-2 border-white  text-white text-center py-4  bottom-0 w-full">
        {postsData.length} New Posts @ {new Date().getFullYear()}
      </div> 
    </>
  );
};

export default Footer;

