"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import squidward from "../../../public/assets/images/squidward.png";
import Image from "next/image";

import { GlareCard } from "@/components/ui/glare-card";
function More() {
    const words = `Hi there! My name is Yohannes S. Hirko, But you can just call me John and I'm a full-stack developer based in Addis Ababa, with years of experience creating secure, scalable, and user-friendly web applications. With a background in Software Engineering and a Google Cybersecurity Certification, I focus on building efficient and secure software solutions. 
    I specialize in JavaScript, TypeScript, React, Node.js, and have extensive experience in backend development, cloud services, and deployment pipelines. Security is central to my process, ensuring that the applications I build are reliable and robust.
    Let's collaborate to create impactful and innovative software!`;
    return (
        <div className="flex justify-evenly items-center w-full">
            <div>
                <GlareCard className="flex flex-col items-center justify-center">
                    <Image
                        src={squidward}
                        alt="meme face"
                        className="min-w-64"
                    />
                </GlareCard>
            </div>
            <div>
                <div className="flex gap-7 items-center">
                    <h1 className="text-white font-jetbrains font-bold text-2xl">
                        More Info
                    </h1>
                    {/* <Link href={"x.com"} passHref legacyBehavior>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <Button
                                variant="outline"
                                className=" h-12 hover:scale-105 transition hover:duration-200"
                            >
                                Resume <MdOutlineArrowOutward />
                            </Button>
                        </a>
                    </Link> */}
                </div>
                <TextGenerateEffect
                    words={words}
                    className="max-w-4xl font-normal opacity-60 text-base"
                />
            </div>
        </div>
    );
}

export default More;
