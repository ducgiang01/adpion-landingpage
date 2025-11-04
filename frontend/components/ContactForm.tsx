'use client';

import { useState } from "react";
import { trackContactFormSubmit } from "../utils/facebookPixel";

type ContactFormFields = {
    name: string;
    email: string;
    company: string;
    message: string;
};

export default function ContactForm() {
    const [fields, setFields] = useState<ContactFormFields>({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [showConfirm, setShowConfirm] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFields((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Track Facebook Pixel event
        trackContactFormSubmit({
            name: fields.name,
            email: fields.email,
            company: fields.company
        });

        const to = "support@adpion.com";
        const subject = encodeURIComponent(`Contact from ${fields.name || 'Website Visitor'}`);
        const body = encodeURIComponent(
            `Name: ${fields.name}\nEmail: ${fields.email}\nCompany: ${fields.company}\n\nMessage:\n${fields.message}`
        );
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        setShowConfirm(true);
    };

    const handleCloseConfirm = () => {
        setShowConfirm(false);
        setFields({ name: "", email: "", company: "", message: "" });
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
                    className="w-full rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                    className="w-full rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                />
            </div>
            <div className="md:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input
                    id="company"
                    name="company"
                    value={fields.company}
                    onChange={onChange}
                    type="text"
                    placeholder="Company or project"
                    className="w-full rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                    className="w-full rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500"
                    required
                />
            </div>
            <div className="md:col-span-2 flex justify-center">
                <button
                    type="submit"
                    className="px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl text-white font-semibold text-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                    Submit
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
                            Your email client should open with your message. If it doesn't, please contact
                            <span className="text-primary-400"> support@adpion.com</span>.
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


