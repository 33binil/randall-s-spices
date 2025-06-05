import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-black">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                autoPlay
                loop
                muted
                src="/public/Fireburn.mp4"
            ></video>

            {/* Black Faded Frame */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Content Container */}
            <div className="relative flex flex-col items-center justify-center top-10 md:top-10 text-white text-center px-2">
                {/* Logo */}
                <motion.img
                    src="/public/logo1.png"
                    alt="Logo"
                    className="w-28 md:w-48 mb-12"
                    initial={{ y: "-100%", opacity: 0 }} // Starts off-screen above
                    animate={{ y: "0%", opacity: 1 }} // Moves down into position
                    transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
                />

                {/* Main Heading */}
                <motion.h1
                    className="text-[37px] relative top-2 md:-top-2 mb-6 md:mb-0 md:text-7xl font-bold font-kalam"
                    initial={{ y: "-100%", opacity: 0 }} // Starts completely off-screen above
                    animate={{ y: "0%", opacity: 1 }} // Moves to original position
                    transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                >
                    Introducing OmniBlend
                </motion.h1>

                {/* Subheading */}
                <div className="relative flex flex-col items-center justify-center top-3 md:top-8 text-white text-center px-10 md:flex md:flex-row md:items-center md:justify-between md:gap-0">
                    {/* Left Text */}

                    <motion.p
                        className="block w-screen md:w-1/3 text-[18px] md:text-[30px] font-kalam opacity-90"
                        initial={{ x: "-100%", opacity: 0 }} // Start completely off-screen to the left
                        animate={{ x: "0%", opacity: 1 }}  // Move to original position
                        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation effect
                    >
                        OmniBlend is our all‑in‑one spice innovation—meticulously balanced ingredients, 20+ from smoked paprika to real sumac, crushed and powdered for maximum depth and texture.
                    </motion.p>

                    {/* Product Image */}
                    <motion.img
                        src="/public/omniblend.png"
                        alt="Product"
                        className="w-56 md:w-1/3 mt-1 mb-4"
                        initial={{ scale: 4, opacity: 0 }} // Starts fully zoomed & invisible
                        animate={{ scale: 1, opacity: 1 }} // Moves to correct size & visibility
                        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                    />

                    {/* Right Text */}
                    <motion.p
                        className="block md:w-1/3 text-[18px] md:text-[30px] font-kalam opacity-90"
                        initial={{ x: "100%", opacity: 0 }} // Starts off-screen to the right
                        animate={{ x: "0%", opacity: 1 }}  // Moves to correct position
                        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                    >
                        Whether you’re grilling, roasting, stir‑frying, or sprinkling on snacks, one shake transforms any meal into a masterpiece.
                    </motion.p>
                </div>


                {/* Scroll Down Button */}
                <button className="mt-10 md:mt-8 px-3 md:px-7 py-0 md:py-2 text-[11px] font-kalam md:text-lg relative top-16 md:top-10 bg-[#804801] text-white rounded-lg shadow-md transition transform hover:scale-110">
                    Scroll Down ⬇
                </button>
            </div>
        </div>
    );
};

export default Home;
