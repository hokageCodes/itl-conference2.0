import Image from 'next/image';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#FEFBF6] pt-24 text-[#7F5283]">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="mt-[-50px]">
            <Image className='pt-4' src="/assets/1.png" alt="Logo" width={150} height={100} />
            <p className="mt-[-5px]">The largest gathering of Internationally Trained Lawyers (ITLs) in Canada.</p>
        </div>
        <div className="p-5">
            <div className="text-sm uppercase font-bold">Quick Links</div>
            <a className="my-3 block" href="/">Home <span className="text-xs p-1"></span></a>
            <a className="my-3 block" href="/itl25-conference">About <span className="text-xs p-1"></span></a>
            <a className="my-3 block" href="/speakers">Speakers <span className="text-xs p-1"></span></a>
            <a className="my-3 block" href="/itl25-conference">Schedule <span className="text-xs p-1"></span></a>
        </div>
        <div className="p-5">
            <div className="text-sm uppercase font-bold">LEGAL</div>
            <a className="my-3 block" href="#">Privacy Policy <span className="text-xs p-1"></span></a>
            <a className="my-3 block" href="#">Terms and Conditions <span className="text-xs p-1"></span></a>
        </div>
        <div className="p-5">
            <div className="text-sm uppercase font-bold">Contact Us</div>
            <a className="my-3 block" href="#">Canada<span className="text-xs p-1"></span></a>
            <a className="my-3 block" href="mailto:contact@company.com">theitlnetwork@gmail.com <span className="text-xs p-1"></span></a>
        </div>
    </div>

        <div className="bg-[#FEFBF6] pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-sm flex-col max-w-screen-lg items-center text-[#7F5283]">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="https://www.instagram.com/globallawyersca?igsh=ZG5iOWVmZWJ2eTk0&utm_source=qr" className="w-6 mx-1 text-[#7F5283] hover:text-[#3F2E3E]">
                <FaInstagram size="100%" />
            </a>
            <a href="https://twitter.com/theITLNetwork" className="w-6 mx-1 text-[#7F5283] hover:text-[#3F2E3E]">
                <FaTwitter size="100%" />
            </a>
            <a href="https://www.facebook.com/share/oCJwFpzhsF5n2Qeb/?mibextid=K35XfP" className="w-6 mx-1 text-[#7F5283] hover:text-[#3F2E3E]">
                <FaFacebookF size="100%" />
            </a>
            <a href="https://www.linkedin.com/company/the-itl-network/" className="w-6 mx-1 text-[#7F5283] hover:text-[#3F2E3E]">
                <FaLinkedinIn size="100%" />
            </a>
        </div>
            <div className="my-5">© Copyright 2024. All Rights Reserved.</div>
        </div>
        </div>
    </footer>
    );
};

export default Footer;
