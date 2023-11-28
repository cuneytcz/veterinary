import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Button from "../button";

export default function Modal({ isOpen, setIsOpen, triger, modal, data }) {
  return (
    <>
      <button
        ref={triger}
        type="button"
        className="relative w-6 h-6 xl:hidden"
        onClick={() => setIsOpen((prev) => !prev)}>
        <motion.span
          initial={{
            top: isOpen ? "0.5rem" : "",
          }}
          animate={{
            top: isOpen ? "50%" : "",
            translateY: isOpen ? "-50%" : "none",
            rotate: isOpen ? "45deg" : "0deg",
            transition: { duration: 0.1 },
          }}
          exit={{
            top: "0.5rem",
            transition: { duration: 0.1 },
          }}
          className="absolute top-2 left-0 w-full h-0.5 rounded-full bg-neutral-600"
        />
        <motion.span
          initial={{
            bottom: isOpen ? "0.5rem" : "",
          }}
          animate={{
            bottom: isOpen ? "50%" : "",
            translateY: isOpen ? "50%" : "none",
            rotate: isOpen ? "-45deg" : "0deg",
            transition: { duration: 0.1 },
          }}
          exit={{
            bottom: "0.5rem",
            transition: { duration: 0.1 },
          }}
          className="absolute bottom-2 left-0 w-full h-0.5 rounded-full bg-neutral-600"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={modal}
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: 1,
              transition: {
                duration: 0.1,
                ease: [0.12, 0, 0.39, 0],
              },
            }}
            exit={{
              scaleY: 0,
              opacity: 0,
              visibility: "invisible",
              transition: {
                duration: 0.1,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] origin-top overflow-y-auto bg-stone-100">
            <div className="w-full h-full flex flex-col bg-white">
              <div className="w-full h-full flex flex-col px-8 py-4">
                <ul className="flex flex-col">
                  {data.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={item.toLowerCase()}
                        className="text-neutral-600 hover:text-black font-medium transition-colors w-full h-[50px] flex items-center border-b border-stone-200">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4 pt-8">
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={Link}
                    size="md"
                    href="signup"
                    children="Get started"
                  />
                  <Button
                    onClick={() => setIsOpen(false)}
                    as={Link}
                    variant="outline"
                    size="md"
                    href="login"
                    children="Log In"
                  />
                </div>
              </div>
              <ul className="w-full h-12 flex bg-[#EEEBEA]">
                <li className="w-1/3 h-full flex justify-center items-center border-r border-[#A5A4A3]">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/contact"
                    className="text-sm md:text-base text-neutral-600 hover:text-black transition-colors">
                    Contact
                  </Link>
                </li>
                <li className="w-1/3 h-full flex justify-center items-center border-r border-[#A5A4A3]">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/donate"
                    className="text-sm md:text-base text-neutral-600 hover:text-black transition-colors">
                    Get donate us !
                  </Link>
                </li>
                <li className="w-1/3 h-full flex justify-center items-center border-r border-[#A5A4A3]">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/app"
                    className="text-sm md:text-base text-neutral-600 hover:text-black transition-colors">
                    Download app
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
