export default function FAQ() {
    const faqs = [
        { q: "Do I get full creative and campaign control with Adpion?", a: "Yes, Adpion gives you full control over ads, targeting, and budget." },
        { q: "Will Adpion's Meta accounts get banned?", a: "Accounts are verified, compliant, and supported to reduce ban risk." },
        { q: "How fast can I start with Adpion accounts?", a: "You can launch campaigns within hours after signup." },
        { q: "Are Adpion's accounts compliant?", a: "Yes, fully verified and compliant with Meta policies." },
        { q: "How much will Adpion accounts cost me?", a: "Affordable pricing with reseller margins available." },
        { q: "Is Adpion safe and legal to use?", a: "Yes, all accounts are Business Verified and ToS compliant." },
        { q: "How are funds managed with Adpion?", a: "Funds are transparent, with separate wallets per account." },
        { q: "Can I onboard multiple brands with Adpion?", a: "Yes, manage multiple brands under one Business Manager." },
    ];

    return (
        <section id="faq" className="py-20 section-bg">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    FAQs
                </h2>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <details key={idx} className="group bg-gray-800/70 border border-gray-700 rounded-xl p-5">
                            <summary className="cursor-pointer list-none text-lg font-semibold text-white flex justify-between items-center">
                                {item.q}
                                <span className="ml-4 text-primary-400">+</span>
                            </summary>
                            <p className="mt-3 text-gray-300">{item.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
