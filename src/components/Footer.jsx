import {React,useState} from 'react'
import {styles } from '../style'
import { navLinks } from '../constants'

const Footer = () => {
  return (
<footer className={`${styles.paddingX} w-full bg-gray-900 text-white mt-[40px] py-8`}>
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
    {/* Column 1: About */}
    <div className="flex flex-col items-center sm:items-start">
      <h3 className="text-[24px] font-bold leading-[27px] pink-text-gradient">Harish Palanivel</h3>
      <p className="text-secondary text-[18px] mt-2">Excellence in Digital Creation</p>
      <p className="text-[14px] mt-4 text-center sm:text-left">
      I’m an AI Devloper and UI Designer passionate about building intelligent, scalable, and user-centric digital solutions.
      </p>
    </div>

    {/* Column 2: Navigation Links */}
    <div className="flex flex-col items-center sm:pl-[40px] sm:items-start">
      <h4 className="text-[20px] font-semibold mb-2 underline blue-text-gradient">Quick Links</h4>
      <ul className="list-none flex flex-row space-x-2 sm:flex-col sm:space-y-2 sm:space-x-0">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-[16px] hover:text-violet-500 hover:scale-110 transition duration-200"
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 3: Connect */}
    <div className="flex flex-col items-center sm:items-start">
      <h4 className="text-[20px] font-semibold mb-2 blue-text-gradient underline">Connect with Me</h4>
      <p className="text-[16px] mb-2">
        Feel free to reach out for collaborations, freelance work, or just to say hi!
      </p>
      <ul className="list-none sm:space-y-2 flex sm:flex-col flex-row sm:space-x-0 space-x-2">
        <li>
          <a
            href="https://www.linkedin.com/in/harish-palanivel-88b5901b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Harish1404"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=harish13032003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition"
          >
            Email
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom Section */}
  <div className="mt-8 border-t border-gray-700 pt-4 text-center">
    <p className="text-[14px]">
      &copy; 2025 Harish Palanivel. All rights reserved. Designed & Developed by Harish.
    </p>
  </div>
</footer>
)}

export default Footer