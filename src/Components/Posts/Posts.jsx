import React  from "react";
const Posts = ({Title , setTitle , Body , setBody , handleSubmit}) => {

  return (
    <div className="bg-gray-700 border-t-2 border-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className=" items-center">
          <div className="md:ml-auto">
            <form onSubmit={handleSubmit} className="bg-gray-400 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Create Post
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-900 text-sm font-semibold mb-2"
                >
                  Title
                </label>
                <input
                  value={Title}
                  onChange={(e)=>setTitle(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border bg-gray-600 text-white rounded"
                  placeholder="Your Title"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-900 text-sm font-semibold mb-2"
                >
                  Description
                </label>
                <textarea
                  value={Body}
                  onChange={(e)=>setBody(e.target.value)}
                  id="message"
                  name="message"
                  className="w-full p-2 border bg-gray-600 text-white  rounded"
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
