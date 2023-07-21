import { MoonIcon } from "@heroicons/react/solid";
import React from "react";
import { clients } from "../data/clients";
import { motion } from "framer-motion";

export default function OwnedClients() {
  return (
    <section id="clients">
      <div className="text-gray-400 bg-dark px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
        <div className="mx-auto">
          <div className="mb-20 text-center">
            <div className="bg-lilbitdark">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                  <MoonIcon className="text-gray-400 mx-auto inline-block w-10 mb-4" />
                  <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Minecraft hacker clients that I use
                  </p>
                  <p className="max-w-xl mt-5 mx-auto text-xl text-gray-400">
                    I play legit all the time tho!
                  </p>
                  <br />
                  <div className="flex flex-wrap -m-4">
                    {clients.map((client) => (
                      <a
                        href={client.link}
                        key={client.image}
                        className="sm:w-1/2 w-100 p-4"
                      >
                        <motion.div whileHover={{ scale: 1.07 }}>
                          <div className="flex relative">
                            <img
                              alt={client.title}
                              className="absolute inset-0 object-cover object-center h-full w-full"
                              src={client.image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full bg-etabledaaark opacity-0 hover:opacity-100">
                              <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                                {client.subtitle}
                              </h2>
                              <h1 className="title-font text-lg font-medium text-white mb-3">
                                {client.title}
                              </h1>
                              <p className="leading-relaxed">
                                {client.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
