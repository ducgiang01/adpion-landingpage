'use client';

import { useState } from "react";
import { trackContactFormSubmit } from "../utils/facebookPixel";
import toast from "react-hot-toast";

type ContactFormFields = {
    name: string;
    email: string;
    whatsapp: string;
    message: string;
};

export default function ContactForm() {
    const [fields, setFields] = useState<ContactFormFields>({
        name: "",
        email: "",
        whatsapp: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFields((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Track Facebook Pixel event
            trackContactFormSubmit({
                name: fields.name,
                email: fields.email,
                company: fields.whatsapp
            });

            // Send email using FormSubmit service
            const formData = new FormData();
            formData.append('name', fields.name);
            formData.append('email', fields.email);
            formData.append('whatsapp', fields.whatsapp || 'N/A');
            formData.append('message', fields.message);
            formData.append('_to', 'support@adpion.com');
            formData.append('_subject', `Contact Form Submission from ${fields.name}`);
            formData.append('_template', 'box');
            formData.append('_captcha', 'false');

            const response = await fetch('https://formsubmit.co/ajax/giangds2001@gmail.com', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                toast.success('Message sent successfully!');
                setShowConfirm(true);
                setFields({ name: "", email: "", whatsapp: "", message: "" });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending form:', error);
            toast.error('Failed to send message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseConfirm = () => {
        setShowConfirm(false);
        setFields({ name: "", email: "", whatsapp: "", message: "" });
    };

    return (
        <form onSubmit={onSubmit} className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full name</label>
                <input
                    id="name"
                    name="name"
                    value={fields.name}
                    onChange={onChange}
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl bg-white/10 backdrop-blur-sm border border-gray-600/50 !text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                    id="email"
                    name="email"
                    value={fields.email}
                    onChange={onChange}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-white/10 backdrop-blur-sm border border-gray-600/50 !text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-all"
                    required
                />
            </div>
            <div className="md:col-span-2">
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp / PhoneNumber</label>
                <input
                    id="whatsapp"
                    name="whatsapp"
                    value={fields.whatsapp}
                    onChange={onChange}
                    type="text"
                    placeholder="Your WhatsApp number"
                    className="w-full rounded-xl bg-white/10 backdrop-blur-sm border border-gray-600/50 !text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                />
            </div>
            <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={fields.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="Tell us about your goals..."
                    className="w-full rounded-xl bg-white/10 backdrop-blur-sm border border-gray-600/50 !text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all resize-none"
                    required
                />
            </div>
            <div className="md:col-span-2 flex justify-center">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl text-white font-semibold text-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
            </div>

            {showConfirm && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={handleCloseConfirm}
                        aria-hidden="true"
                    ></div>
                    <div className="relative z-10 w-full max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-3">Thanks!</h3>
                        <p className="text-gray-300 mb-6">
                            Your message has been sent successfully. We'll get back to you soon!
                        </p>
                        <button
                            type="button"
                            onClick={handleCloseConfirm}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:from-primary-600 hover:to-secondary-600 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
}


