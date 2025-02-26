import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './splashScreen.css'; // Make sure to create this CSS file

const SplashScreen = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Create a smoother loading animation with multiple steps
        const interval = setInterval(() => {
            setLoadingProgress(prev => {
                const newProgress = prev + 2;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => navigate('/login'), 500); // Short delay after reaching 100%
                    return 100;
                }
                return newProgress;
            });
        }, 40); // Update every 40ms for a smooth animation

        // Cleanup function
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="splash-container">
            <div className="splash-content">
                <div className="logo-container">
                    {/* You can replace this with your actual logo */}
                </div>

                <h1 className="app-name">Your App Name</h1>

                <div className="loading-bar-container">
                    <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
                </div>

                <p className="loading-text">
                    {loadingProgress < 100 ? 'Loading...' : 'Welcome!'}
                </p>
            </div>
        </div>
    );
};

export default SplashScreen;