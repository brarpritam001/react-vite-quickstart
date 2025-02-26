import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, AlertCircle } from 'lucide-react';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        // Enhanced form validation
        if (!username.trim()) {
            setError('Please enter your username');
            return;
        }

        if (!password) {
            setError('Please enter your password');
            return;
        }

        // Set loading state
        setIsLoading(true);

        // Simulate authentication process
        setTimeout(() => {
            setIsLoading(false);

            // Simulate successful login
            localStorage.setItem('isLoggedIn', 'true');
            if (rememberMe) {
                localStorage.setItem('rememberedUser', username);
            } else {
                localStorage.removeItem('rememberedUser');
            }

            window.location.href = '/dashboard';
        }, 1500);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Check for saved username on component mount
    React.useEffect(() => {
        const savedUsername = localStorage.getItem('rememberedUser');
        if (savedUsername) {
            setUsername(savedUsername);
            setRememberMe(true);
        }
    }, []);

    return (
        <div className="login-container">
            <div className="text-center">
                <h2 className="text-3xl">Welcome Back</h2>
                <p className="text-sm">Sign in to your account to continue</p>
            </div>

            {error && (
                <div className="error-message">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>{error}</span>
                </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <div className="input-container">
                        <label htmlFor="username" className="block text-sm font-medium">
                            Username
                        </label>
                        <div className="relative">
                            <div className="input-icon">
                                <User className="w-5 h-5" />
                            </div>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="input-field"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input-container">
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <div className="input-icon">
                                <Lock className="w-5 h-5" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                className="input-field"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="password-visibility-btn"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="remember-me">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="h-4 w-4"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="/forgotPassword" className="forgot-password">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="button"
                        disabled={isLoading}
                        onClick={() => window.location.href = '/home'}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Signing in...
                            </span>
                        ) : (
                            "Sign in"
                        )}
                    </button>
                </div>
            </form>

            <div className="divider">
                <div className="divider-text">
                    Don't have an account?
                </div>
            </div>

            <div>
                <a href="/signUp" className="create-account-btn">
                    Create new account
                </a>
            </div>
        </div>
    );
};

export default Login;