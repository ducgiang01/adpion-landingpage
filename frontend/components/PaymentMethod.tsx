import React from "react";

export default function PaymentMethod() {
    const methods = [
        {
            key: "usdt",
            // title: "USDT (TRC20)",
            description:
                "Fast, low-fee stablecoin payments. Recommended for international transfers.",
            image: { src: "/images/usdt.png", alt: "USDT TRC20" },
            details: [
                "Network: TRC20, BEP20 ( Recommended )",
                "Processing: ~5-10 minutes",
                "Fees: Free"
            ]
        },
        {
            key: "paypal",
            // title: "PayPal",
            description:
                "Convenient global payments with buyer protection. Fees may apply.",
            image: { src: "/images/paypal.svg", alt: "PayPal" },
            details: [
                "Currency: USD",
                "Processing: Instant to a few minutes",
                "Fees: 3%"
            ]
        },
        {
            key: "payoneer",
            // title: "Payoneer",
            description:
                "Reliable cross-border business payments with competitive rates.",
            image: { src: "/images/payoneer.png", alt: "Payoneer" },
            details: [
                "Currency: USD",
                "Processing: Same day to 1 business day",
                "Fees: Free"
            ]
        }
    ];

    return (
        <section id="payment" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                        Payment Methods
                    </span>
                </h2>
                {/* <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                    Choose the method that works best for you: USDT, PayPal, or Payoneer.
                </p> */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {methods.map((m) => (
                        <div
                            key={m.key}
                            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="mb-5 flex items-center justify-center">
                                <img
                                    src={m.image.src}
                                    alt={m.image.alt}
                                    className="h-10 w-auto object-contain drop-shadow"
                                />
                            </div>

                            {/* <h3 className="text-2xl font-bold mb-3 text-white">{m.title}</h3> */}
                            <p className="text-gray-400 mb-5 leading-relaxed">{m.description}</p>

                            <ul className="space-y-2 text-gray-300 mx-auto w-max">
                                {m.details.map((d, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-primary-400"></span>
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
