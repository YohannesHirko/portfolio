"use client";
import { navLinks } from "@/constants/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();
    return (
        <div className="w-40 m-5">
            <ul>
                {navLinks.map((link) => {
                    const isActive = link.path === pathname;
                    return (
                        <li
                            key={link.name}
                            className={`flex items-center justify-center border-r-4 w-full h-20 ${
                                isActive ? "" : "opacity-60"
                            }`}
                        >
                            <Link
                                href={link.path}
                                className={`text-center  text-white  font-semibold uppercase hover:scale-125 transition hover:duration-200 ${
                                    isActive ? "text-lg" : "text-xs"
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navigation;
