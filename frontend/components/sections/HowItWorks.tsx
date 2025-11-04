export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 section-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                        <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                        HOW IT WORKS
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        From Intro to Launch in{" "}
                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">&lt;24 Hours</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Get your agency onboarded in less than a day. No paperwork headaches — just fast access to scalable Meta accounts.
                    </p>

                    <a
                        href="https://wa.me/+84762866888"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl text-white font-semibold text-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                        <span className="relative z-10">Speak to a Specialist</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connector lines */}
                    <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                        <div className="flex justify-between">
                            <div className="w-1/3 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
                            <div className="w-1/3 h-0.5 bg-gradient-to-r from-secondary-500 to-accent-500"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* 01 */}
                        <div className="relative group">
                            <div className="bg-gray-800/70 backdrop-blur-sm border border-primary-500/50 rounded-2xl p-8 hover:bg-gray-800/90 hover:border-primary-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">01</div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Intake</h3>
                                <p className="text-gray-300 leading-relaxed">You tell us what you run. We check eligibility, share pricing & setup details.</p>
                            </div>
                        </div>

                        {/* 02 */}
                        <div className="relative group">
                            <div className="bg-gray-800/70 backdrop-blur-sm border border-secondary-500/50 rounded-2xl p-8 hover:bg-gray-800/90 hover:border-secondary-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-secondary-500/20">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">02</div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Setup</h3>
                                <p className="text-gray-300 leading-relaxed">We create a support channel and your dashboard, so you can onboard your clients.</p>
                            </div>
                        </div>

                        {/* 03 */}
                        <div className="relative group">
                            <div className="bg-gray-800/70 backdrop-blur-sm border border-accent-500/50 rounded-2xl p-8 hover:bg-gray-800/90 hover:border-accent-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/20">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">03</div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Go Live</h3>
                                <p className="text-gray-300 leading-relaxed">Request your Meta ad accounts, top up, and go live.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
