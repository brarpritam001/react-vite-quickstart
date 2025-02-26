import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, Mail, AlertCircle } from 'lucide-react';
import './signUp.css'; // You can create this file with similar styles to login.css

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        // Form validation
        if (!formData.fullName.trim()) {
            setError('Please enter your full name');
            return;
        }

        if (!formData.email.trim()) {
            setError('Please enter your email address');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (!formData.username.trim()) {
            setError('Please enter a username');
            return;
        }

        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!termsAccepted) {
            setError('You must accept the Terms and Conditions');
            return;
        }

        // Set loading state
        setIsLoading(true);

        // Simulate account creation process
        setTimeout(() => {
            setIsLoading(false);

            // Redirect to login page after successful signup
            window.location.href = '/login';
        }, 1500);
    };

    return (
        <div className="signup-container">
            <div className="text-center">
                <h2 className="text-3xl">Create an Account</h2>
                <p className="text-sm">Fill in your details to get started</p>
            </div>

            {error && (
                <div className="error-message">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>{error}</span>
                </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div className="input-container">
                        <label htmlFor="fullName" className="block text-sm font-medium">
                            Full Name
                        </label>
                        <div className="relative">
                            <div className="input-icon">
                                <User className="w-5 h-5" />
                            </div>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                className="input-field"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="input-container">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="input-icon">
                                <Mail className="w-5 h-5" />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="input-field"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

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
                                placeholder="Choose a username"
                                value={formData.username}
                                onChange={handleChange}
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
                                autoComplete="new-password"
                                required
                                className="input-field"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
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

                    <div className="input-container">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <div className="input-icon">
                                <Lock className="w-5 h-5" />
                            </div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                autoComplete="new-password"
                                required
                                className="input-field"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="password-visibility-btn"
                                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="terms-container">
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="h-4 w-4"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm">
                        I accept the <a href="/terms" className="terms-link">Terms and Conditions</a> and <a href="/privacy" className="terms-link">Privacy Policy</a>
                    </label>
                </div>

                <div>
                    <button
                        type="submit"
                        className="button"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Creating Account...
                            </span>
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </div>
            </form>

            <div className="divider">
                <div className="divider-text">
                    Already have an account?
                </div>
            </div>

            <div>
                <a href="/login" className="login-account-btn">
                    Sign in to your account
                </a>
            </div>
        </div>
    );
};

export default SignUp;