export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                {/* Floating Particles */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-secondary-400/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent-400/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-primary-500/25 rounded-full animate-pulse"></div>

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary-500/15 to-accent-500/15 rounded-full blur-3xl animate-bounce"></div>

                {/* Grid / Glows (giữ class util của bạn) */}
                <div className="bg-grid-3d"></div>
                <div className="grid-plane"></div>
                <div className="glow-blob blob-1"></div>
                <div className="glow-blob blob-2"></div>
            </div>

            {/* Foreground */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div className="text-center max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in-up">
                            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                            <span className="animate-pulse">Ready to Scale?</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient-x">
                                Scale Safely
                            </span>
                            <br />
                            <span className="text-white animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                                Grow Globally
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                            Digital marketing–ready Meta ad accounts with transparent funding and 24/7 support.
                        </p>

                        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
                            <a
                                href="https://wa.me/+84762866888"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-xl text-white font-semibold text-lg hover:from-primary-600 hover:via-secondary-600 hover:to-accent-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/50 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 -top-1 -left-1 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
                            </a>
                        </div>

                        {/* Benefits */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
                            {["Self-service Platform for Agencies", "Instant Top Ups", "Unlimited Scaling", "Premium Whitelisted Ad Accounts"].map(
                                (benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-3 group">
                                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 font-medium text-sm group-hover:text-primary-400 transition-colors duration-300">
                                            {benefit}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "1.7s" }}>
                            {[
                                { number: "35", label: "Satisfied Partners" },
                                { number: "24/7", label: "Support Availability" },
                                { number: "150M+", label: "Managed Adspend" },
                                { number: "4+", label: "Years of Experience" },
                            ].map((stat, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-12 bg-gradient-to-b from-primary-500 to-secondary-500 group-hover:from-primary-400 group-hover:to-secondary-400 transition-all duration-300"></div>
                                        <div className="flex-1">
                                            <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                                                {stat.number}
                                            </div>
                                            <div className="text-gray-400 text-xs font-medium group-hover:text-gray-300 transition-colors duration-300">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
