import React, { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "./components/data";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
      </div>
    </div>
  );
}
export default App;