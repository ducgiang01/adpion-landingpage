import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 section-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Contact Us</span>
                </h2>
                <ContactForm />
            </div>
        </section>
    );
}
