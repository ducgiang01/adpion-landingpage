// Icons removed

export default function Benefits() {
    const list = [
        {
            title: "Unlimited Spending Limits",
            description: "Run ads at any scale, from day one—no warming up or budget caps.",
        },
        {
            title: "Lower Risk Of Ban",
            description: "Whitelisted Meta accounts minimize random suspensions, maximizing uptime.",
        },
        {
            title: "Dedicated Compliance Manager",
            description: "Expert compliance support to ensure campaigns stay policy-safe and profitable.",
        },
        {
            title: "Dedicated Account Managers",
            description: "Your personal point of contact who knows your business, ready anytime.",
        },
        {
            title: "Onboarding within 24 hours",
            description: "From signup to live ads in less than one day—fast, simple, efficient.",
        },
        {
            title: "24/7 Support",
            description: "Instant communication via Telegram or Whatsapp for quick resolutions and peace of mind.",
        },
    ];

    return (
        <section id="services" className="relative py-24 section-bg overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold">
                            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                            BENEFITS
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Why Agencies Choose
                            <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                                Adpion Meta Ad Accounts
                            </span>
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                            Your biggest client's ad just got banned—again. Adpion ensures it never happens. Run campaigns on Meta without random
                            shutdowns or sudden spending limits.
                        </p>

                        <div className="pt-6">
                            <a
                                href="https://wa.me/+84762866888"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white font-semibold text-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                            >
                                <span className="relative z-10">Speak to a Specialist</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="space-y-3">
                        {list.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 hover:bg-gray-800/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
                            >
                                <details className="group/details">
                                    <summary className="cursor-pointer list-none flex items-center gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white group-hover/details:text-primary-400 transition-colors duration-300">
                                                {benefit.title}
                                            </h3>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="text-primary-400 text-xl transform group-open/details:rotate-180 transition-transform duration-300">▼</span>
                                        </div>
                                    </summary>
                                    <div className="mt-4">
                                        <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
