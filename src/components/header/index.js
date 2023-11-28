"use client";

import React from "react";
import Modal from "./modal";
import Link from "next/link";
import Button from "../button";
import { motion } from "framer-motion";
import { Cat, Globe } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const triger = React.useRef();
  const modal = React.useRef();

  // Click outside func
  React.useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !isOpen ||
        modal.current.contains(target) ||
        triger.current.contains(target)
      )
        return;
      setIsOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // ESC key pressed func
  React.useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!isOpen || keyCode !== 27) return;
      setIsOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // Window resize func
  React.useEffect(() => {
    const resizeHandler = () => {
      if (!isOpen) return;
      setIsOpen(false);
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });

  // Window scrolled func
  React.useEffect(() => {
    const scrollHandler = () => {
      if (!isOpen) return;
      setIsOpen(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });

  // Toggle overflow func
  React.useEffect(() => {
    const overflowHandler = () => {
      if (!isOpen) return document.body.classList.remove("overflow-hidden");
      return document.body.classList.add("overflow-hidden");
    };

    overflowHandler();
  });

  const data = ["Clinics", "Questions", "Adopt", "Blog"];

  return (
    <motion.header
      initial={{
        backgroundColor: "#FFFFFF",
      }}
      animate={{
        backgroundColor: isOpen ? "#F5F5F4" : "#FFFFFF",
        transition: {
          duration: 0.5,
        },
      }}
      exit={{
        backgroundColor: "",
      }}
      className="relative z-50 bg-white">
      <div className="container mx-auto w-full h-16 flex justify-between items-center px-4 md:px-8 xl:px-12">
        <Link
          href="/"
          className="flex items-center gap-2">
          <Cat
            strokeWidth={1.5}
            className="w-11 h-11 xl:w-12 xl:h-12"
          />
          <span className="text-lg font-medium tracking-wider">Veterinary</span>
        </Link>
        <div className="flex justify-end items-center gap-4 md:gap-12">
          <nav className="hidden xl:flex items-center gap-8">
            {data.map((item, index) => (
              <Link
                key={index}
                href={item.toLowerCase()}
                className="text-neutral-600 hover:text-black transition-colors">
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Globe
              strokeWidth={1.5}
              className="w-6 h-6 stroke-neutral-600 hover:stroke-black transition-colors cursor-pointer"
            />
            <Link
              href="/donate"
              className="text-neutral-600 hover:text-black transition-colors hidden md:block pl-4 border-l border-neutral-600">
              Get donate us!
            </Link>
            <Link
              href="/login"
              className="text-neutral-600 hover:text-black transition-colors hidden xl:block">
              Log In
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button
              as={Link}
              href="/signup"
              size="sm"
              children="Get started"
              className="hidden md:flex"
            />
            <Modal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              triger={triger}
              modal={modal}
              data={data}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
