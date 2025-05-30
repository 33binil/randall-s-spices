import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Home from "./components/Home.jsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); // Loader duration
        return () => clearTimeout(timer); // Cleanup function
    }, []);

    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            {loading ? (
                <LoadingScreen /> // Show loader only on first load
            ) : (
                <>
                    <Home />
                </>
            )}
        </main>
    );
}

export default App;
