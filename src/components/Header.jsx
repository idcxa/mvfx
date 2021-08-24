import React, { useState } from 'react'
import Swal from 'sweetalert2'

var swalContact = function () {
  Swal.fire({
    title: 'Reaching us',
    html:
      `Please send orders & enquiries to <a href="mailto:pinkpillpharma@protonmail.com">pinkpillpharma@protonmail.com </a> <br>` +
      `<br>
    <p> Be sure to include your name, address, items you wish to purchase or the nature of your query </p>`,
    icon: 'info',

    allowEscapeKey: true,
    allowEnterKey: true,
  })
}

export default function Navbar(props) {
  const [expanded, toggleOpen] = useState(false)
  return (
    <>
      <nav className="bg-purple fixed w-full flex items-center center flex-wrap p-2 sm:p-6 md:items-center md:justify-center mx-auto">
        <div className="flex items-center flex-no-shrink mr-6 md:items-center xpad:items-left">
          <img
            className="h-8 w-8 mr-2"
            width="54"
            height="54"
            src="/logo.webp"
            alt="logo"
          />
          <a
            href="/"
            className="p-2 hover:text-ash font-semibold text-2xl text-sand tracking-tight"
          >
            M \/ F X
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded border-ash hover:text-sivler hover:border-sivler"
            onClick={() => toggleOpen(!expanded)}
          >
            <img
              className="h-3 w-3"
              width={14}
              height={14}
              src="/icons/noun_Menu.png"
            ></img>
          </button>
        </div>
        <div
          id="hideuntil"
          className={
            `w-full block flex-grow lg:flex lg:items-center xpad:items-right xpad:visible lg:w-auto
          sm:hidden` + (!expanded ? ' sm:hidden' : 'sm:visible')
          }
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="/about"
              className="text-silver hover:text-pine text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-sivler mr-4"
            >
              About
            </a>

            {/* <img className="h-8 w-8 mr-2 sm:hidden" width="24" height="24" src="/icons/noun_Heart.png" /> */}
            <a
              href="/faq"
              className="text-silver hover:text-pine text-lg block mt-4 lg:inline-block lg:mt-0  hover:text-sivler mr-4"
            >
              FAQ
            </a>

            {/* <img className="h-8 w-8 mr-2 sm:hidden" width="24" height="24" src="/icons/noun_Shop.png" /> */}
            <a
              onClick={swalContact}
              className="text-silver  hover:text-pine text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-sivler"
            >
              Contact us
            </a>
            {/* <img className="h-8 w-8 mr-2 sm:hidden" width="24" height="24" src="/icons/noun_Phone.png" /> */}
          </div>
        </div>
      </nav>
    </>
  )
}
