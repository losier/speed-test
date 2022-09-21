import React from 'react'

const Footer = () => {
  return (
    // added some tailwindcss similar to previous css.
    <div className='w-full flex flex-col justify-center items-center'>
      <ul className='flex flex-wrap justify-center gap-8 m-12 mb-[10px]'>
        <li>
          <a
            href="https://github.com/losier"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://aarab.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://Instagram.com/zzcwc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://aarab.vercel.app/project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="mailto:arv95464@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className='m-5 font-mono text-gray-400'>
        <small>&copy; Losier. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
