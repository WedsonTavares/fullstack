"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", path: "/" },
    { name: "Serviços", path: "/services" },
    { name: "Sobre", path: "/resume" },
    { name: "Projetos", path: "/projects" },
    
];

export default function Nav() {
    const pathName = usePathname();
    console.log(pathName)
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link 
                href={link.path} 
                key={index} 
                className={`
                    capitalize font-medium transition-all
                    ${(link.path === "/" && pathName === "/") || (link.path !== "/" && pathName.startsWith(link.path)) ? "text-accent border-b-2 border-accent" : "text-white border-b-2 border-transparent"}
                    hover:text-accent
                `}
                >
                    {link.name}
                    </Link>
            })}
        </nav>
    );
}