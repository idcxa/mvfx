import React, { useEffect } from "react";
import "../styles/header.scss";

/*
export default function Header() {
	return (
		<>
			<nav>
				<div className='head'>
					<a className="text-2xl text-purple" href="/">MVFX LTD.</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className='tail'>
					<a href='/work'>Work</a>
					<a href='/about'>About</a>
					<a href='/products'>Products</a>
					<a href='/book'>Book now</a>
					<a href='/Contact'>Contact</a>
				</div>
			</nav>
		</>
	)
}
	 */

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["header"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <>
      <header className={navbarClasses.join(" ")}>
        <div className="head">
          <a className="text-2xl text-purple" href="/">
            MVFX LTD.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="tail">
          <a href="/work">Work</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/book">Book now</a>
          <a href="/Contact">Contact</a>
        </div>
      </header>
    </>
  );
};
export default Navbar;
