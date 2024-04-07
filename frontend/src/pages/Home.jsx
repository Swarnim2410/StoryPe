import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import CardFeature from "../component/CardFeature.jsx";
import HomeCardNull from "../component/HomeCardNull.jsx";
import { useRef } from "react";

var socket = io(`${import.meta.env.VITE_APP_DOMAIN}`, {
  transports: ["websocket"],
});

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

    // Listen for new story
    socket.on("newStory", (newStory) => {
      setData((prevData) => [newStory, ...prevData]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_DOMAIN}/api/getstory`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData.reverse()); // Reverse the data here
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const loadingArray = new Array(3).fill(null);
  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 340;
  };

  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 340;
  };

  return (
    <div>
      <div className="">
        <div className="flex w-full items-center">
          <p className="font-bold text-2xl text-slate-600 mb-4">Stories</p>
          <div className="ml-auto flex gap-3">
            <button className="text-lg text-white" onClick={prevProduct}>
              <GrPrevious />
            </button>
            <button className="text-lg text-white" onClick={nextProduct}>
              <GrNext />
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex gap-6 overflow-scroll scrollbar-none scroll-smooth transition-all pl-2 pb-2"
        ref={slideProductRef}
      >
        {data[0]
          ? data.map((itr, index) => (
              <CardFeature
                title={itr.title}
                key={itr._id}
                id={itr._id}
                image={itr.image}
                description={itr.description}
              />
            ))
          : loadingArray.map((_, index) => <HomeCardNull key={index} />)}
      </div>
    </div>
  );
}

export default Home;
