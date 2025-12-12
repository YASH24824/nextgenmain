"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Google from "../../assets/google.png";
import Image from "next/image";

export default function GoogleReviewSlider() {
    const reviews = [
        {
            name: "Anurag Seervi",
            text: "I had an excellent experience working with the Next Gen Humanized Small team. They were incredibly helpful in getting me registered for the hackathon, ensuring a smooth and hassle-free process. What impressed me the most was their ability to quickly understand the project idea and translate it into a clear, compelling, and well-designed pitch deck. Their professionalism, creativity, and support made a real difference in our hackathon journey. Highly recommended!",
        },
        {
            name: "Tadar Tata",
            text: "NextGen provided me with a highly professional and well-structured pitch deck. Their team clearly understood my business concept and transformed it into a powerful, investor-ready presentation. The design was clean, modern, and visually impressive, which added great value to the overall impact. They were responsive, cooperative, and open to feedback throughout the process. It was a smooth and efficient experience from start to finish. I’m highly satisfied with their service and would definitely recommend them to any startup or entrepreneur.",
        },
        {
            name: "Ravikant Raut",
            text: "Very prompt, fast response from Dedicated Executives who created successful application & presentation within short period of time. Thank you very much for kind support. Next Gen Team has very talented executives so looking forward for more and more future tie ups.",
        },
        {
            name: "Aniket Raj",
            text: "I had a great experience with NEXT-GEN BUSINESS CONSULTANCY PRIVATE LIMITED. Their team helped my company get the Startup India Certificate along with the DSC smoothly and efficiently. The team members were humble, professional, and always ready to assist. Overall, they provided excellent service and I highly recommend them!",
        },
        {
            name: "Jitendra Jain",
            text: "Next Gen has been incredibly supportive in helping us create a strong startup funding pitch. Their expert guidance and dedication have made the entire process smooth and professional.",
        },
        {
            name: "Manish Gupta",
            text: "Amazingly fast n excellent service. They are on toes to complete their given task. The best part working with them was their quick understanding of clients requirements. Good job 👍",
        },
        {
            name: "Sudheer Kumar",
            text: "I'm really thankful to Next Gen Business Consultancy Private Limited for their excellent support in getting my Startup India certificate. The entire process was smooth and well-managed. Their team was always available to guide me, answered all my questions, and handled the documentation perfectly. As a new startup, I found their help extremely valuable. I highly recommend their services to anyone looking for reliable support in business certifications and startup documentation.",
        },
        {
            name: "Rahul Soni",
            text: "Pitch deck report created by next gen business consultancy is extremely good. I am very happy with next gen business team. They are doing great help to new entrepreneurs.",
        },
        {
            name: "Dharmendra Jadeja",
            text: "We have received our startup certificate, and we are extremely satisfied with the outstanding support provided by the team at every step. Their dedication and assistance have been invaluable, and we will definitely recommend their services to others.",
        },
        {
            name: "Kumar Santyam",
            text: "I am extremely satisfied with the services provided by Next Gen Business Consultant. Their entire team is highly professional, responsive, and supportive at every step. No matter the task, they deliver solutions quickly and efficiently, always maintaining high standards of quality. I truly appreciate their commitment and prompt service. A big thank you to the entire Next Gen team for their exceptional support and dedication.",
        },
        {
            name: "Juned Siddique",
            text: "The service has been excellent so far. The pitch deck prepared was up to the mark, crisp and precise. They take their job seriously is all i can say.",
        },
        {
            name: "Jitendra Gohel",
            text: "I had a great experience with Next Gen Business Consultancy Private Limited. They helped me get my Startup India certificate smoothly and without any delays. The team was very professional, supportive, and always ready to guide me at every step. As a new startup founder, I wasn’t familiar with the process, but their clear communication and expert handling made everything easy. I truly appreciate their service and highly recommend them to any startup looking for reliable help with certifications and documentation.",
        },
        {
            name: "Raj Dangar",
            text: "I had a wonderful experience with Next Gen Business Consultancy Private Limited. They assisted me in obtaining my Startup India certificate quickly and without any complications. The team was professional, approachable, and consistently guided me throughout the entire process. As a first-time startup founder, I had limited knowledge about the procedure, but their clear communication and expert support made everything simple and stress-free. I truly value their service and highly recommend them to any startup seeking trusted assistance with certifications and documentation.",
        },
        {
            name: "Chameleon Infotech",
            text: "We recently availed services from this team, and I must say the entire experience was smooth and professional from start to finish. Krishna Kathiriya, in particular, was extremely supportive, knowledgeable, and responsive throughout the process. She made sure all our queries were addressed promptly and guided us at every step. The team is well-organized, reliable, and truly committed to delivering what they promise. It’s rare to find such a dedicated group of professionals who genuinely care about their clients. Looking forward to working with them again in the future. Highly recommended!",
        },
        {
            name: "Prashant Kumar",
            text: "Absolutely thrilled with the experience I had with Next-Gen! From the moment I reached out, the team was prompt, professional, and incredibly efficient. I needed my startup certificate urgently, and they delivered it faster than I thought possible—without a single hiccup. A special thanks to Nilav and Sakshi for their outstanding support. They walked me through every step, answered all my queries with patience, and ensured the process was completely seamless. It’s rare to find such a reliable and responsive team these days. Impressed by their speed and service quality, I’ve already started using more of their offerings for my business setup and compliance needs. Highly recommended for any entrepreneur who wants peace of mind and quick results!",
        },
        {
            name: "Roshan Mehta",
            text: "I had a great experience working with NextGen for my pitch deck and MSME Udyam certificate services. The team is highly professional, responsive, and well-versed with government processes. They helped me get my Udyam registration quickly and guided me step-by-step through creating a strong and investor-ready pitch deck. Their insights and support truly added value to my startup journey. Highly recommend NextGen to any entrepreneur or startup looking for reliable business support services!",
        },
        {
            name: "RCPK Jewellers",
            text: "Next Gen Business Consultant offers top-notch service! Krishna Kathiriya was incredibly professional and made the entire process seamless and hassle-free. Everything was handled with great care, making it a truly smooth and enjoyable experience.",
        },
        {
            name: "Mahesh Hadiyal",
            text: "Very professional and impressive pitch deck presentation. Jalva Chodvadiya explained everything clearly and made the concept easy to understand. Highly recommended!",
        },
        {
            name: "Krishnabh Barman",
            text: "The service was very good. Also the connection between the consultancy and us were very reliable. The next gen consultancy helped us in getting important certificates and services which will help us to manage our business smoothly in the coming days.",
        },
        {
            name: "Karan Jena",
            text: "I am heading for a start up and Next gen is helping me do that. They got me the start up certificate in a very short time. Their service was quick and hassle free. I would recommend them to anyone who wants to start a Start up.",
        },
        {
            name: "Preet Javiya",
            text: "The start-up india certificate process was very smoothly done by next-gen. Proper follow up & replies were received to us. We had a very good experience working with next-gen",
        },
        {
            name: "Dipen M",
            text: "Excellent service. Fast communication. Multiple schemes submissions. Satisfactory response and timely guidance from their team. Special thanks to Sakshi for follow ups, reminders and amazing documentation as per my requirements.",
        },
        {
            name: "Sudindra Rao",
            text: "The pitch deck prepared was most professional and satisfying.All this was done in reasonably good time. Hats off to the Next Gen team.",
        },
        {
            name: "Wetrock Bangalore",
            text: "A team consisting of Amazing employees. We have personally taken services from them. From the beginning till the end of the service the team was very co-operative and handled all our queries very professionally and helped us get our certificates. Looking forward for more service from them from here on. An amazing team to rely on for any professional service. Specially Mahima and Sakshi helped me a lot. Looking forward for more services from you guys. Next-Gen has wonderful team whatever they promise they will definitely abide by the same. Thanks team",
        },
        {
            name: "Sanjeev Bhatia",
            text: "We are very happy with the execution speed demonstrated by Next Gen Business Consultancy in getting the Start Up Certificate for our entity and wish them all the best for their future endeavours"
        },
        {
            name: "Ramsewak DHruv",
            text: "On behalf of Nishchay Online services Pvt Ltd., we had a great experience working with NextGen for obtaining StartUp India certificate services. The team is highly professional, responsive, and well-versed with government processes. They helped us to get our Start up India registration quickly and guided us step-by-step through creating a strong and investor-ready pitch deck. Their insights and support truly added value to my startup journey. We highly recommend NextGen to any entrepreneur or startup looking for reliable business support services!"
        },
    ];

    const [active, setActive] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const next = () => setActive((prev) => (prev + 1) % reviews.length);
    const prev = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

    useEffect(() => {
        const id = setInterval(next, 5000);
        return () => clearInterval(id);
    }, [next]);

    return (
        <section className="bg-gray-100 flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#1c4268] mb-4 relative inline-block cursor-pointer group text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                What Our Clients Say
                <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
            </motion.h2>

            <motion.p
                className="text-gray-600 text-lg max-w-2xl mx-auto px-4 text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Discover how our clients describe their experience with us — their trust and satisfaction inspire everything we do.
            </motion.p>

            <div className="relative w-full flex justify-center items-center">
                <div
                    className="relative flex items-center justify-center w-full max-w-[1200px] h-[480px]"
                    style={{ perspective: "1000px" }}
                >
                    {reviews.map((rev, idx) => {
                        let offset = idx - active;
                        if (offset < -2) offset += reviews.length;
                        if (offset > 2) offset -= reviews.length;

                        let transform = "";
                        let opacity = 0;
                        let zIndex = 0;
                        let scale = 0.75;

                        if (offset === 0) {
                            transform = "translateX(0) translateZ(0px) rotateY(0deg)";
                            opacity = 1;
                            zIndex = 50;
                            scale = 1;
                        } else if (offset === 1) {
                            transform = "translateX(280px) translateZ(-150px) rotateY(-15deg)";
                            opacity = 0.6;
                            zIndex = 40;
                            scale = 0.9;
                        } else if (offset === -1) {
                            transform = "translateX(-280px) translateZ(-150px) rotateY(15deg)";
                            opacity = 0.6;
                            zIndex = 40;
                            scale = 0.9;
                        } else if (offset === 2) {
                            transform = "translateX(520px) translateZ(-300px) rotateY(-25deg)";
                            opacity = 0.3;
                            zIndex = 30;
                            scale = 0.85;
                        } else if (offset === -2) {
                            transform = "translateX(-520px) translateZ(-300px) rotateY(25deg)";
                            opacity = 0.3;
                            zIndex = 30;
                            scale = 0.85;
                        }

                        return (
                            <div
                                key={idx}
                                className="absolute transition-all duration-700 ease-in-out"
                                style={{
                                    transform,
                                    opacity,
                                    zIndex,
                                    scale,
                                }}
                            >
                                <div
                                    className={`p-8 rounded-2xl w-[400px] sm:w-[440px] md:w-[480px] text-white shadow-[0_0_30px_rgba(0,255,255,0.4)] ${offset === 0
                                        ? "bg-[#1c4268] border border-[#76a5d3] shadow-[0_0_45px_8px_#76a5d3]"
                                        : "bg-[#245586] border border-gray-700"
                                        } transition-all duration-500`}
                                >
                                    {/* Google Review Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={Google}
                                                alt="Google"
                                                width={24}
                                                height={24}
                                                className="w-6 h-6"
                                            />
                                            <span className="text-white font-semibold text-sm">Google Reviews</span>
                                        </div>

                                        {/* Star Rating */}
                                        <div className="flex gap-0.5">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="gold"
                                                    className="w-4 h-4"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.29 3.975a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.464a1 1 0 00-.364 1.118l1.29 3.975c.3.921-.755 1.688-1.54 1.118l-3.39-2.464a1 1 0 00-1.176 0l-3.39 2.464c-.784.57-1.838-.197-1.54-1.118l1.29-3.975a1 1 0 00-.364-1.118L2.037 9.402c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.29-3.975z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Client Info */}
                                    <div className="border-t border-[#76a5d3] pt-4">
                                        <p className="font-semibold">{rev.name}</p> <br />
                                    </div>
                                    <p className="text-white mb-4 leading-relaxed text-base">
                                        “{isExpanded || rev.text.length <= 150 ? rev.text : `${rev.text.slice(0, 150)}...`}”
                                    </p>

                                    {rev.text.length > 150 && (
                                        <button
                                            onClick={() => setIsExpanded(!isExpanded)}
                                            className="text-sm text-[#76a5d3] hover:underline transition"
                                        >
                                            {isExpanded ? "Read Less" : "Read More"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-[-60px] sm:left-[-80px] top-1/2 -translate-y-1/2 bg-[#1c4268] text-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#1c4268]/80 transition"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-[-60px] sm:right-[-80px] top-1/2 -translate-y-1/2 bg-[#1c4268] text-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#1c4268]/80 transition"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
}
