import React from "react";
import { EyeIcon } from "@heroicons/react/solid";

function Content() {
  return (
    <section id="skills">
      <div className="text-gray-400 bg-gray-800 px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <EyeIcon className="text-green-600 mx-auto inline-block w-10 mb-4" />
            <iframe
              className="flex justify-center items-center"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/r4z16al39UI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
