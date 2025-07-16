import Link from "next/link";
import { Button } from "./ui/button";
//componentes
import Nav from "./Nav";
import MobileNav from "./MobileNav";


export default function Header() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold cursor-pointer">
                        Wedson <span className="text-accent">Tavares</span>
                    </h1>
                </Link>

                {/* Nav e Button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href={"/contact"}>
                        <Button>Entre em Contato</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}

                <div className="xl:hidden">
                   <MobileNav/>
                </div>
            </div>
        </header>
    );
}