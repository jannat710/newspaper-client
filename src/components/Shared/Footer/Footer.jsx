import { FaFacebookF, FaGoogle, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
<div>
<footer className="footer p-10 bg-[#12151a] text-white">

<nav>
    <header className="footer-title border-b w-full py-3">CONTACT US</header> 
    <a className="link link-hover">123 ABS Street, Uni 21, Bangladesh</a>
    <a className="link link-hover">+88 123456789</a>
    <a className="link link-hover">Mon - Fri: 08:00 - 22:00</a>
    <a className="link link-hover">Sat - Sun: 10:00 - 23:00</a>
  </nav> 
  <nav>
    <header className="footer-title border-b w-full py-3">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title border-b w-full py-3">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>  
  <form>
    <header className="footer-title border-b w-full py-3">Newsletter</header> 
    <fieldset className="form-control w-80">
      <div className="">
        <input type="text" placeholder="Enter your email address" className="rounded-sm input input-bordered join-item" /> 
        <button className="btn border-none rounded-sm ml-2 bg-[#dc0003] text-white">Subscribe</button>
      </div>
    </fieldset>
  </form>

  
</footer>
<div className="footer items-center p-4 bg-black text-white">
  <aside className="items-center grid-flow-col"> 
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a><FaFacebookF className="bg-[#dc0003] h-8 w-8 p-2 rounded-full"></FaFacebookF></a>
    <a><FaYoutube className="bg-[#dc0003] h-8 w-8 p-2 rounded-full"></FaYoutube></a>
    <a><FaGoogle className="bg-[#dc0003] h-8 w-8 p-2 rounded-full"></FaGoogle></a>
<a><FaPinterest className="bg-[#dc0003] h-8 w-8 p-2 rounded-full"></FaPinterest></a>
<a className="bg-[#dc0003] h-8 w-8 p-2 rounded-full"><FaTwitter></FaTwitter></a>
  </nav>
</div>
<div className="h-2 bg-[#dc0003]"></div>
</div>
    );
};

export default Footer;