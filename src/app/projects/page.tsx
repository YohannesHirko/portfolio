"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaGithub } from "react-icons/fa";
import image0 from "../../../public/assets/images/project0.png";
import image1 from "../../../public/assets/images/project1.png";
import image2 from "../../../public/assets/images/project2.png";
import { projects } from "@/constants/config";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Lens } from "@/components/ui/lens";
const images = {
    image0,
    image1,
    image2,
};
const getImage = (name: string) => images[name];
const Projects = () => {
    const [selected, setSelected] = useState(0);
    const [hovering, setHovering] = useState(false);
    return (
        <div className=" pl-11 flex justify-between w-full text-white  gap-11 items-center">
            <Lens hovering={hovering} setHovering={setHovering}>
                <Image
                    src={getImage(`image${selected}`)}
                    alt={projects[selected].title}
                    className=" min-w-96"
                />
            </Lens>

            <div className="flex flex-col gap-7 p-2 max-w-2xl ">
                <h1 className=" font-jetbrains text-2xl font-bold">
                    {projects[selected].type}
                </h1>

                {projects[selected].contractor && (
                    <p className="flex items-center gap-2">
                        <HiOutlineBuildingOffice2 />
                        {projects[selected].contractor}
                    </p>
                )}

                <p className=" opacity-60 text-lg">
                    {projects[selected].description}
                </p>
                {projects[selected].tags && (
                    <div className="flex gap-4 flex-wrap">
                        {projects[selected].tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant={"outline"}
                                className="text-white opacity-60"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
                <div className="flex gap-7">
                    {projects[selected].githubLink && (
                        <Link
                            href={projects[selected].githubLink}
                            passHref
                            legacyBehavior
                        >
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                            >
                                <Button
                                    variant="outline"
                                    className="   h-12 hover:scale-105 transition hover:duration-200"
                                >
                                    <FaGithub
                                        size={32}
                                        style={{ color: "#ffffff" }}
                                    />{" "}
                                    Code
                                </Button>
                            </a>
                        </Link>
                    )}

                    {projects[selected].liveLink && (
                        <Link
                            href={projects[selected].liveLink}
                            passHref
                            legacyBehavior
                        >
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                            >
                                <Button
                                    variant="outline"
                                    className="h-12 hover:scale-105 transition hover:duration-200"
                                >
                                    Preview app <ChevronRight />
                                </Button>
                            </a>
                        </Link>
                    )}
                </div>
            </div>
            <div className="flex items-center">
                <ul className="md:w-72">
                    {projects.map((project, index) => (
                        <li
                            key={project.title}
                            className={`${
                                projects.length === index + 1
                                    ? ""
                                    : "border-b border-b-neutral-700"
                            } 
                            } flex flex-col pr-2 items-center justify-center gap-7 h-16 font-jetbrains`}
                            onClick={() => setSelected(index)}
                        >
                            <p
                                className={`${
                                    index === selected
                                        ? "text-xl justify-between"
                                        : "opacity-60 justify-end gap-4"
                                } w-full flex items-center  hover:scale-105 transition hover:duration-200`}
                            >
                                {index === selected && <FaChevronLeft />}
                                <span className=" text-nowrap">
                                    {project.title}
                                </span>
                                <span className=" ">{index + 1}</span>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Projects;
