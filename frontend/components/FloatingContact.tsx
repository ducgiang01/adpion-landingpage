'use client';

import { FaEnvelope, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import ScrollLink from './ScrollLink';

type Item = {
    id: string;
    label: string;
    value: string;
    href: string;
    icon: React.ReactNode;
};

const ITEMS: Item[] = [
    {
        id: 'email',
        label: 'Email',
        value: 'support@adpion.com',
        href: 'mailto:support@adpion.com',
        icon: <FaEnvelope className="text-white text-lg" />,
    },
    {
        id: 'facebook',
        label: 'Facebook',
        value: '@adpion',
        href: 'https://www.facebook.com/adpion',
        icon: <FaFacebook className="text-white text-lg" />,
    },
    {
        id: 'phone',
        label: 'WhatsApp',
        value: '+84 762 866 888',
        href: 'https://wa.me/84762866888',
        icon: <FaWhatsapp className="text-white text-lg" />,
    },
];

export default function FloatingContact() {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <ul className="flex flex-col items-end gap-3">
                {ITEMS.map((it) => (
                    <li key={it.id} className="group">
                        {it.href === 'contact' ? (
                            <ScrollLink targetId={it.href} className="flex items-center gap-3 px-3 py-2 rounded-full text-white shadow-lg transform transition-all duration-200 hover:scale-110" ariaLabel="Scroll to contact">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20">
                                    {it.icon}
                                </span>
                                <span className="opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-200 overflow-hidden whitespace-nowrap">
                                    {it.label}: {it.value}
                                </span>
                            </ScrollLink>
                        ) : (
                            <a
                                href={it.href}
                                className="flex items-center gap-3 px-3 py-2 rounded-full text-white shadow-lg transform transition-all duration-200 hover:scale-110"
                                target={it.href.startsWith('http') ? '_blank' : undefined}
                                rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20">
                                    {it.icon}
                                </span>
                                <span className="opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-200 overflow-hidden whitespace-nowrap">
                                    {it.label}: {it.value}
                                </span>
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}


