import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./Components/Header";
import Navbars from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Posts from "./Components/Posts/Posts";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer";

function App() {
  const date = new Date().toGMTString();
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [search, setSearch] = useState("");
  const [postsData, setPostsData] = useState([
    {
      id: 1,
      title: "Cricket - ",
      date: date,
      body: "Austraila Victory And South Africa ....",
    },
    {
      id: 2,
      title: "Messi Vs Ronaldo",
      date: date,
      body: "Messi Vs Ronaldo Last Tournament ....",
    },
    {
      id: 3,
      title: "Kholi New Record",
      date: date,
      body: "Messi Vs Ronaldo Last Tournament ....",
    },
    {
      id: 4,
      title: "BabarAzam Comeback?",
      date: date,
      body: "Messi Vs Ronaldo Last Tournament ....",
    },
  ]);

  const [filteredPosts, setFilteredPosts] = useState([]);

  const HandleSearch = () => {
    const newFilteredPosts = postsData.filter(
      (Data) =>
        Data.title.toLowerCase().includes(search.toLowerCase()) ||
        Data.body.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(newFilteredPosts);
  };

  useEffect(() => {
    HandleSearch();
  }, [search , postsData]);

  const AddItems = () => {
    const id = postsData.length ? postsData[postsData.length - 1].id + 1 : 1;
    const datei = new Date().toGMTString();
    const newPost = { id, title: Title, date: datei, body: Body };
    const allPosts = [...postsData, newPost];
    setPostsData(allPosts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddItems();
    setTitle("");
    setBody("");
  };


  const HandleDelete = (idToDelete) => {
    console.log("Deleting post with id:", idToDelete);
    const updatedData = postsData.filter((data) => data.id !== idToDelete);
  
    console.log("Updated data after delete:", updatedData);
    if (updatedData) {
      setPostsData(updatedData);
    }
  };

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/" element={<Navbars />}>
        <Route
          index
          element={
            <Home
              search={search}
              setSearch={setSearch}
              postsData={filteredPosts}
              HandleDelete={HandleDelete}
              HandleSearch={HandleSearch}
            />
          }
        />
        <Route path="About" element={<About />} />
        <Route
          path="Post"
          element={
            <Posts
              Title={Title}
              setTitle={setTitle}
              Body={Body}
              setBody={setBody}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Route>
    )
  );

  return (
    <>
      <Header />
      <RouterProvider router={Router} />
      <Footer postsData={postsData} />
    </>
  );
}

export default App;
