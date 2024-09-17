import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TnC from './TnC'
import PrivacyPolicy from './PrivacyPolicy'
import CnC from './CnC'
import RefundPolicy from './RefundPolicy'



const Legals = () => {
    const { pageName } = useParams();
    const [page, setPage] = useState(0);
    document.title = "Legals | PYREXIA 2024"

    useEffect(() => {
        if (pageName === "privacy-policy") setPage(1);
        if (pageName === "terms-of-service") setPage(0);
        if (pageName === "refund-policy") setPage(3);
        if (pageName === "code-of-conduct") setPage(2);
    }, [pageName]);

    const data = [
        { title: "Terms of Service", id: 0 },
        { title: "Privacy Policy", id: 1 },
        { title: "Code of Conduct", id: 2 },
        { title: "Refund Policy", id: 3 }
    ];

    return (
        <div className='bg-[#001f3f]'>
            <div className="relative h-[50vh]  flex items-center justify-center" >
                
                <h1 className="text-[#ebe6d0] text-center text-[4.5rem] font-semibold leading-[4.5rem] z-10 md:text-[3.7rem] md:px-12 md:leading-[3.5rem]">
                    {data[page].title}
                </h1>
            </div>
            

            <div className="  min-h-screen pb-20 flex relative">
                <div className=" backdrop-blur-sm rounded-xl lg:w-[80%] md:w-[95%] w-[95%] m-auto h-fit p-6 lg:px-10">
                    <div className="flex justify-center items-center gap-3 flex-wrap px-2">
                        <button onClick={() => setPage(0)} className={page === 0 ? "bg-[#ebe6d0] text-black px-4 py-1.5 rounded-lg font-bold text-sm border-black" : "bg-black text-[#ebe6d0] px-4 py-1.5 rounded-lg font-bold text-sm border border-[#ebe6d0]"}>
                            Terms & Conditions
                        </button>
                        <button onClick={() => setPage(3)} className={page === 3 ? "bg-[#ebe6d0] text-black px-4 py-1.5 rounded-lg font-bold text-sm border-black" : "bg-black text-[#ebe6d0] px-4 py-1.5 rounded-lg font-bold text-sm border border-[#ebe6d0]"}>
                            Refund Policy
                        </button>
                        <button onClick={() => setPage(2)} className={page === 2 ? "bg-[#ebe6d0] text-black px-4 py-1.5 rounded-lg font-bold text-sm border-black" : "bg-black text-[#ebe6d0] px-4 py-1.5 rounded-lg font-bold text-sm border border-[#ebe6d0]"}>
                            Code of Conduct
                        </button>
                        <button onClick={() => setPage(1)} className={page === 1 ? "bg-[#ebe6d0] text-black px-4 py-1.5 rounded-lg font-bold text-sm border-black" : "bg-black text-[#ebe6d0] px-4 py-1.5 rounded-lg font-bold text-sm border border-[#ebe6d0]"}>
                            Privacy Policy
                        </button>
                    </div>

                    <div className="px-4 md:px-10 lg:px-10 text-lg font-light text-justify pt-20 pb-10">
                        {page === 0 && <TnC />}
                        {page === 1 && <PrivacyPolicy />}
                        {page === 2 && <CnC />}
                        {page === 3 && <RefundPolicy />}
                    </div>

                    <div className="flex items-center justify-center gap-3 pb-16">
                        <div className="h-3 w-3 bg-[#ebe6d0] rotate-45"></div>
                        <div className="h-3 w-3 bg-[#ebe6d0] rotate-45"></div>
                        <div className="h-3 w-3 bg-[#ebe6d0] rotate-45"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Legals;


