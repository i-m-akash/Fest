import { Link } from 'react-router-dom'
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import img from "../Images/logo.webp";
import { IoLogoWhatsapp } from 'react-icons/io'
const Footer = () => {
    const date = new Date;
    const year = date.getFullYear();
    return (
        <div className="bg-[#001f3f] text-sm ">

            <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-[auto] items-start justify-items-center">

                <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-1 md:order-1 lg:order-1'>

                    <Link href="/">
                        <img src={img} alt="logo" className='h-20' />
                    </Link>

                    <p className='max-w-[17rem] py-3 text-base text-white'>Pyrexia, is AIIMS Rishikesh's annual fest. </p>
                    <div className='flex gap-3 py-2 '>
                        
                        <a target='_blank' href="https://wa.me/917597240902" className='transition ease-in delay-50 text-green-400 hover:text-green-500 hover:scale-[110%]'>
                            <IoLogoWhatsapp size={30} />
                        </a>
                        <a target='_blank' href="https://youtube.com/@pyrexiaaiimsrishikesh?si=VHQO-FJe5a-o5frS" className='transition ease-in delay-50 text-blue-500 hover:text-blue-600 hover:scale-[110%]'>
                            <FaYoutube size={30} />
                        </a>
                        <a target='_blank' href="https://www.instagram.com/pyrexiaaiims?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='transition ease-in delay-50 text-pink-500 hover:text-pink-600 hover:scale-[110%]'>
                            <FaInstagram size={30} />
                        </a>
                    </div>
                </div>

                <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
                    <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-bold'>Useful Links</h1></div>
                    <ul className='mt-4 flex flex-col gap-3 text-base'>
                        <li className='hover:text-blue-600 text-white'><Link to="/events">Events</Link></li>
                        <li className='hover:text-blue-600 text-white'><Link to="/basic-registration">Basic Registration</Link></li>
                        <li className=' hover:text-blue-600 text-white'><Link to="/schedule">Event Schedule</Link></li>
                        <li className=' hover:text-blue-600 text-white'><Link to="/starnight">Star Night</Link></li>
                    </ul>
                </div>

                <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
                    <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-bold'>Legals</h1></div>
                    <ul className='mt-4 flex flex-col gap-3 text-base'>
                        <li className='hover:text-blue-600 text-white'><Link to="/legals/privacy-policy">Privacy   Policy</Link></li>
                        <li className='hover:text-blue-600 text-white'><Link to="/legals/terms-of-service">Terms & Cond.</Link></li>
                        <li className='hover:text-blue-600 text-white'><Link to="/legals/code-of-conduct">Code of Conduct</Link></li>
                        <li className='hover:text-blue-600 text-white'><Link to="/legals/refund-policy">Refund Policy</Link></li>
                    </ul>
                </div>

                <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base'>
                    <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-bold'>Contact Us</h1></div>
                    <p className='max-w-[16rem] pt-4 text text-white'>AIIMS Rishikesh, Virbhadra Road, Rishikesh · Uttarakhand- 249 203, India</p>
                    <p className='pt-2 text-white'>Contact : <a href="tel:+918875666240" className='text-blue-700 ml-2 font-semibold'>+918875666240</a></p>
                    <p className='pt-2'><a href="tel:+917814887657" className='text-blue-700 ml-20 font-semibold'>+917814887657</a></p>
                    <p className='pt-2 text-white'>Mail : <a href="mailto:aiims.rsk@gmail.com" className='text-blue-700 ml-2 font-semibold'>aiims.rsk@gmail.com</a></p>
                </div>

            </div>

            <div className=" bg-gray-900 h-[1px]"></div>
            <div className="m-[auto] p-7 text-white flex justify-center items-center lg:w-[90%] md:w-[90%] w-[95%] text-base gap-2">
                <p className='lg:text-base text-sm'>
                    © {year} Pyrexia. All Rights Reserved.
                </p>
                
            </div>
        </div>
    )
}

export default Footer
