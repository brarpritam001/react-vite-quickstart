import React, { useState } from 'react';
import { Mail, AlertCircle, ArrowLeft } from 'lucide-react';
import './forgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // Email validation
        if (!email.trim()) {
            setError('Please enter your email address');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        // Set loading state
        setIsLoading(true);

        // Simulate password reset request process
        setTimeout(() => {
            setIsLoading(false);
            setSuccess(true);
            // Reset email field after successful submission
            setEmail('');
        }, 1500);
    };

    return (
        <div className="forgot-password-container">
            <div className="text-center">
                <h2 className="text-3xl">Reset Password</h2>
                <p className="text-sm">Enter your email to receive a password reset link</p>
            </div>

            {error && (
                <div className="error-message">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>{error}</span>
                </div>
            )}

            {success && (
                <div className="success-message">
                    <span>Password reset instructions have been sent to your email address. Please check your inbox.</span>
                </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
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
                                Sending Reset Link...
                            </span>
                        ) : (
                            "Send Reset Link"
                        )}
                    </button>
                </div>
            </form>

            <div className="mt-6">
                <a href="/login" className="back-to-login">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Login
                </a>
            </div>
        </div>
    );
};

export default ForgotPassword;