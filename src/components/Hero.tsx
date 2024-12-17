"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { words } from "@/constants/config";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hero = () => {
    const router = useRouter();
    return (
        <div className="max-w-7xl text-white">
            <h1 className="text-white  text-3xl font-jetbrains">
                HELLO, IM YOHANNES
            </h1>
            <TypewriterEffectSmooth words={words} />
            <p className="text-white  opacity-60 text-xl max-w-3xl text-wrap">
                I craft seamless digital experiences. With expertise in modern
                frameworks, scalable backend systems, and pixel-perfect
                frontends, I bridge creativity and technology to solve
                real-world problems. one line of code at a time.
            </p>
            <div className="flex gap-7 mt-7">
                <Link
                    href="https://linkedin.com/in/yohannesdev"
                    passHref
                    legacyBehavior
                >
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <FaLinkedin
                            className="hover:scale-125 transition hover:duration-200"
                            size={32}
                            style={{ color: "#ffffff" }}
                        />
                    </a>
                </Link>
                <Link href="mailto:yohannessiyum77@gmail.com" passHref>
                    <SiGmail
                        className="hover:scale-125 transition hover:duration-200"
                        size={32}
                        style={{ color: "#ffffff" }}
                    />
                </Link>
                <Link
                    href="https://github.com/YohannesHirko"
                    passHref
                    legacyBehavior
                >
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub
                            className="hover:scale-125 transition hover:duration-200"
                            size={32}
                            style={{ color: "#ffffff" }}
                        />
                    </a>
                </Link>
            </div>
            <div className=" pt-8 flex gap-6">
                <Button
                    onClick={() => router.push("/projects")}
                    className="  h-12 hover:scale-105 transition hover:duration-200"
                >
                    My Projects <ChevronRight />
                </Button>

                <Button
                    onClick={() => router.push("/more")}
                    className="h-12 hover:scale-105 transition hover:duration-200"
                    variant="outline"
                >
                    More About Me <ChevronRight />
                </Button>
            </div>
        </div>
    );
};

export default Hero;
