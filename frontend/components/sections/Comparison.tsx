// components/sections/Comparison.tsx
import type { LucideIcon } from "lucide-react";
import { Check, X, Rocket, Shield, BarChart3, UserPlus, Zap, Headphones } from "lucide-react";

type Row = {
    feature: string;
    icon: LucideIcon;
    gradyn: string; // label cho cột brand (giữ key như bạn gửi)
    others: string;
};

interface ComparisonProps {
    brandName?: string;       // mặc định: "Adpion"
    rows?: Row[];             // nếu truyền sẽ thay toàn bộ data mặc định
    className?: string;       // optional để bạn thêm class ngoài
}

export default function Comparison({
    brandName = "Adpion",
    rows,
    className = "",
}: ComparisonProps) {
    const comparisonData: Row[] =
        rows ??
        [
            {
                feature: "No Spend Limits",
                icon: Rocket,
                gradyn: "Scale freely from day one. No daily or monthly caps.",
                others: "Strict spending limits throttle growth.",
            },
            {
                feature: "Whitelisted accounts",
                icon: Shield,
                gradyn: "Platinum-tiered for increased stability. Fewer bans and ad rejections.",
                others: "Random disapprovals and frequent flags.",
            },
            {
                feature: "Increased Performance",
                icon: BarChart3,
                gradyn: "Optimized for better CPMs, higher ROAS & lower CPA.",
                others: "High CPMs destroy your ROAS.",
            },
            {
                feature: "Account Creation",
                icon: UserPlus,
                gradyn: "Unlimited account creation and scaling setups.",
                others: "Limited to a few accounts.",
            },
            {
                feature: "Onboarding Speed",
                icon: Zap,
                gradyn: "Go live within 24 hours with full setup done for you.",
                others: "Manual setup takes days or weeks.",
            },
            {
                feature: "Support",
                icon: Headphones,
                gradyn: "24/7 priority human support.",
                others: "No real-time help – just auto replies.",
            },
        ];

    return (
        <section className={`py-20 section-bg relative overflow-hidden ${className}`}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

                {/* Floating Particles */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-100"></div>
                    <div className="absolute top-40 right-20 w-1 h-1 bg-secondary-400 rounded-full animate-bounce delay-300"></div>
                    <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent-400 rounded-full animate-bounce delay-700"></div>
                    <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary-300 rounded-full animate-bounce delay-500"></div>
                    <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-secondary-300 rounded-full animate-bounce delay-900"></div>
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px)",
                        }}
                    />
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                        <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                        COMPARISON
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        How{" "}
                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">{brandName}</span> Compares to
                        Personal AD Accounts
                    </h2>

                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Skip the middlemen and unstable accounts. {brandName} gives you premium ad infrastructure with real support and real results.
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

                {/* Table */}
                <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/30 rounded-2xl overflow-hidden shadow-2xl shadow-black/20 hover:shadow-3xl hover:shadow-primary-500/10 transition-all duration-500">
                    {/* Header Row */}
                    <div className="grid grid-cols-3 gap-4 p-6 bg-gray-800/70 border-b border-gray-700/50">
                        <div className="text-center">
                            <span className="text-white font-semibold text-xl mb-2 block"></span>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/50 rounded-xl px-4 py-3">
                                <img src="/brand/logo.png" alt={`${brandName} Logo`} className="h-8 mx-auto" />
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-500/20 border border-gray-500/50 rounded-xl px-4 py-3">
                                <h3 className="text-white font-bold text-lg">Personal AD Accounts</h3>
                            </div>
                        </div>
                    </div>

                    {/* Feature Rows */}
                    <div className="divide-y divide-gray-700/50">
                        {comparisonData.map((row, index) => {
                            const IconComponent = row.icon;
                            return (
                                <div key={index} className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-800/40 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 group">
                                    {/* Feature Column */}
                                    <div className="flex items-center gap-3">
                                        <IconComponent className="w-6 h-6 text-green-400 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300" />
                                        <span className="text-white font-medium group-hover:text-gray-100 transition-colors duration-300">{row.feature}</span>
                                    </div>

                                    {/* Brand Column */}
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 flex items-center gap-3 w-full group-hover:bg-green-500/30 group-hover:border-green-500/50 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-white group-hover:text-green-100 transition-colors duration-300">{row.gradyn}</span>
                                        </div>
                                    </div>

                                    {/* Others Column */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center group-hover:bg-gray-500 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                                            <X className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{row.others}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
