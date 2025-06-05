import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Home from "./components/Home.jsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); // Loader duration
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            {loading ? (
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: "-100%" }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 2.500 }}
                >
                    <LoadingScreen />
                </motion.div>
            ) : (
                <Home />
            )}
        </main>
    );
}

export default App;
