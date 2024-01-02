// import React from "react";

// const Home = ({ search, setSearch, postsData, HandleDelete, HandleSearch }) => {
//   return (
//     <>
//       <div className="flex items-center justify-center h-12 bg-gray-600 border-y-2 border-white space-x-14">
//         <p className="text-white text-3xl font-bold font-serif">Posts</p>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             HandleSearch();
//           }}
//         >
//           <input
//             className="rounded bg-gray-500 border-white border-2 text-white pl-2"
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <label className="ml-2 text-white">Search Posts</label>
//         </form>
//       </div>
//       <div className="pt-3 bg-slate-700 p-4">
     
//         {postsData.map((post) => (
//           <div key={post.id} className="bg-gray-600 p-4 mb-4 rounded">
//             <h3 className="text-xl text-orange-400 font-bold mb-2">
//               {post.title}
//             </h3>
//             <p className="text-green-300">{post.body}</p>
//             <p className="text-white">{post.date}</p>
//             <button
//               onClick={() => HandleDelete(post.id)}
//               type="button"
//               className="bg-red-500 relative left-[75rem] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Home;




import React from "react";

const Home = ({ search, setSearch, postsData, HandleDelete, HandleSearch }) => {
  return (
    <>
      <div className="flex items-center justify-center h-12 bg-gray-600 border-y-2 border-white space-x-14">
        <p className="text-white text-3xl font-bold font-serif">Posts</p>
        <form onSubmit={(e) => { e.preventDefault(); HandleSearch(); }}>
          <input
            className="rounded bg-gray-500 border-white border-2 text-white pl-2"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label className="ml-2 text-white">Search Posts</label>
        </form>
      </div>
      <div className="pt-3  bg-slate-700 p-4">
        {postsData.length === 0 ? (
          <p className=" text-4xl text-orange-100 flex items-center justify-center h-96">No posts to show</p>
        ) : (
          postsData.map((post) => (
            <div key={post.id} className="bg-gray-600  p-4 mb-4 rounded">
              <h3 className="text-xl text-orange-400 font-bold mb-2">{post.title}</h3>
              <p className="text-green-300">{post.body}</p>
              <p className="text-white">{post.date}</p>
              <button
                onClick={() => HandleDelete(post.id)}
                type="button"
                className="bg-red-500 text-white relative left-[75rem] py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;

