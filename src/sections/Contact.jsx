import React from "react";
import { LinkIcon } from "@heroicons/react/solid";
import { socials } from "../data/socials";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section id="contact">
      <div className="text-gray-400 bg-dark px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
        <div className="mx-auto">
          <div className="mb-20 text-center">
            <div className="bg-lilbitdark">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                  <LinkIcon className="text-gray-400 w-10 inline-block mb-4" />
                  <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Contact Me
                  </p>
                  <p className="max-w-xl mt-5 mx-auto text-xl text-gray-400">
                    If you have any questions, please message me.
                  </p>
                  <br />
                  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {socials.map((account) => (
                      <motion.li
                        whileHover={{ scale: 1.08 }}
                        key={account.name}
                        className="col-span-1 bg-etabledaaark rounded-lg shadow divide-y divide-gray-200 cursor-pointer"
                      >
                        <a href={account.href} target="_blank" rel="noreferrer">
                          <div className="w-full flex items-center justify-between p-6 space-x-6">
                            <div className="truncate">
                              <div className="flex items-center space-x-3">
                                <h3 className="text-gray-300 text-sm font-medium truncate">
                                  {account.name}
                                </h3>
                              </div>
                              <p className="mt-1 text-gray-200 text-sm truncate">
                                {account.description}
                              </p>
                            </div>
                            {account.logo}
                          </div>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
