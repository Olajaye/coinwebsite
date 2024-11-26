'use client'
import { menuVar, menuVariant } from "@/lib/motion"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { IoCloseSharp } from "react-icons/io5";

const navigation = [
  {nav: "Home", link: "/"},
  {nav: "About", link: "/about"},
  {nav: "Get in touch", link: "/contactus"},
  {nav: "FAQs", link: "/faq"},
]
const Navbar = () => {
  const path = usePathname()
  const [menuOpen, setMenuOpen]=useState(false)
  return (

    <section className="relative">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center lg:px-16">
          <div>
            <Link href={'/'}>
              <Image src={'/logo.svg'} alt="logo" width={70} height={70}/>
            </Link>
          </div>

          <div className="space-x-9 hidden lg:block">
            {navigation.map((nav, index)=>(
              <Link key={index} href={nav.link} className={` text-xl font-semibold ${path === nav.link ? 'text-textyellow':'text-[#322F35]'}`}>
                {nav.nav}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <button className="bg-bgyellow p-3 rounded-lg text-lg font-semibold text-foreground">
              Download Coinnet App
            </button>
          </div>


          <div className="lg:hidden">
            <motion.div
              variants={menuVar}
              initial="initial"
              animate="animate"
              onClick={()=> setMenuOpen(true)}
              className="flex lg:hidden flex-col justify-end rotate-180"
            >
              <motion.div variants={menuVariant("2.5rem")}
                className="border-2 border-yellow-400 w-10 h-1 mt-1 bg-bgyellow"></motion.div>
              <motion.div
                variants={menuVariant("2rem")}
                className="border-2 border-yellow-400 w-8 h-1 mt-1 bg-bgyellow"></motion.div>
              <motion.div
                variants={menuVariant("1.5rem")}
                className="border-2 border-yellow-400 w-6 h-1 mt-1 bg-bgyellow"></motion.div>
            </motion.div>
          </div>

        
        </nav>
      </div>
      <AnimatePresence>
        {menuOpen && <motion.div 
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1, transition: {
            duration:1.5
            }
          }}
          exit={{opacity:0}}
          className="fixed top-0 right-0 h-screen w-[60vw] bg-bgyellow lg:hidden rounded-s-[60px] z-50 p-4">
            <div className="flex justify-end items-end">
              <div onClick={()=> setMenuOpen(false)} className="border-2 border-black rounded-full p-2">
                <IoCloseSharp className="w-7 h-7"/>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col h-[70%]">
              <div className="grid grid-cols-1 gap-y-10 text-center transition-all duration-300 ">
                {navigation.map((nav, index)=>(
                  <Link key={index} href={nav.link} className={` transition-all duration-300 text-xl font-semibold ${path === nav.link ? 'hidden':'text-[#322F35]'}`}>
                    {nav.nav}
                  </Link>
                ))}
              </div>

              <button className="bg-black text-white p-3 rounded-lg text-lg font-semibold text-foreground mt-16">
                Download Coinnet App
              </button>
              
            </div>

        </motion.div>}
      </AnimatePresence>
    </section>
    
  )
}

export default Navbar