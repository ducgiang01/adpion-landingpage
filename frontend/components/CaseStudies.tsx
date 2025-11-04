// components/CaseStudies.tsx
export default function CaseStudies() {
    const studies = [
        {
            title: "Scaling a Global E-commerce Brand",
            metric: "ROAS +38%",
            desc: "Delivered verified Meta ad accounts with transparent top-up, enabling a cross-border store to expand internationally while keeping CPA stable.",
            tags: ["E-commerce", "Cross-border", "Top-up transparency"],
        },
        {
            title: "Agency Multi-Client Expansion",
            metric: "20 verified accounts",
            desc: "Supported an agency in rolling out multiple campaigns across different clients by provisioning verified accounts and linking them with Business Managers, ensuring smooth budget flow.",
            tags: ["Agency", "Verified accounts", "Funding workflows"],
        },
        {
            title: "Crisis Management & Appeal Support",
            metric: "Appeal resolved < 4h",
            desc: "Handled sudden account restrictions during peak season, restored delivery quickly, and protected daily ad budgets with proactive appeal support.",
            tags: ["Risk control", "Appeals", "Always-on support"],
        },
        {
            title: "Safe Scaling with Trust Accounts",
            metric: "Spend stabilized in 72h",
            desc: "Onboarded high-trust Meta accounts for a new advertiser, helping them scale spend from $500 to $5,000 within 3 days without facing disruptions.",
            tags: ["High-trust accounts", "Scaling", "Compliance"],
        }

    ];

    return (
        <section id="case-studies" className="py-20 section-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                            Case Studies
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Real results from verified, stable Meta ad accounts
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {studies.map((s, i) => (
                        <article
                            key={i}
                            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
                        >
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur opacity-0 group-hover:opacity-100 transition" />
                            <div className="relative">
                                <div className="text-sm text-accent-400 font-semibold mb-2">{s.metric}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                                <p className="text-gray-300 leading-relaxed mb-4">{s.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {s.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
