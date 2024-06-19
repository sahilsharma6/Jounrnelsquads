import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Custm from "./components/Home/Custm";
import Hero from "./components/Home/Hero";
import Journal from "./components/Journal/Journal";
import SubHeader from "./components/Journal/SubHeader";
import Author from "./components/Journal/AuthorGuidelines/Author";
import Reviewer from "./components/Journal/ReviewerGuidelines/Reviewer";
import Editor from "./components/Journal/EditorGuidelines/Editor"
import Heroimage from "./components/Journal/Heroimage";
import ReHero from "./components/Journal/ReHero";
import Submitbtn from "./components/Submitbtn";
import Register from "./components/Register";
import Testimonial from "./components/Testimonial";
import JoinUsBox from "./components/Home/JoinUsBox";
import JournalGrid from "./components/Home/JournalGrid";

// import Custm from "./Components/Home/Custm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Hero />
          <Custm />
          <JoinUsBox />
          <JournalGrid />
          <Testimonial />
          <Footer />
        </>
      ),
    },
    {
      path: "/journal",
      element: (
        <>
          <Header />
          <ReHero />
          <SubHeader />
          <Journal />
          <Footer />
        </>
      ),
    },
    {
      path: "/journal/author",
      element: (
        <>
          <Header />
          <ReHero />
          <Author />
          <Submitbtn />
          <Footer />
        </>
      ),
    },
    {
      path: "/journal/reviewer",
      element: (
        <>
          <Header />
          <ReHero />
          <Reviewer />
          <Submitbtn />
          <Footer />
        </>
      ),
    },
    {
      path: "/journal/editor",
      element: (
        <>
          <Header />
          <ReHero />
          <Editor />
          <Submitbtn />
          <Footer />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Header />
          <Register />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
      {/* <Header />
      <Hero />
      <Custm />
      <Journal />
      <Footer /> */}
      {/* <Custm /> */}
    </>
  );
}

export default App;
