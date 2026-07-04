"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SPECS_IMAGE, SPECS_HEADER } from "./specifications.constants";

const GALLERY_IMAGES = [

    SPECS_IMAGE,

    "/images/gallery/gl_1.webp",

    "/images/gallery/gl_3.webp",

];

export default function SpecificationsLeft() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32 flex flex-col h-max">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
                {SPECS_HEADER.title}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-muted text-base mb-10"
            >
                {SPECS_HEADER.description}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-4 w-full"
            >
                <div className="relative flex items-center justify-center w-full h-[320px] rounded-3xl bg-white/40 dark:bg-white/5 border border-border/50 backdrop-blur-sm overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{
                                opacity: 0
                            }}

                            animate={{
                                opacity: 1
                            }}

                            exit={{
                                opacity: 0
                            }}

                            className="relative w-[80%] h-[80%]"
                        >
                            <Image
                                src={GALLERY_IMAGES[activeIndex]}
                                alt="Xiaomi X20+ Specifications"
                                fill
                                priority
                                sizes="(max-width:768px) 80vw, 35vw"
                                className="
        object-contain

        drop-shadow-[0_35px_70px_rgba(0,0,0,.18)]
        dark:drop-shadow-[0_40px_80px_rgba(0,0,0,.45)]
    "
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex items-center justify-center gap-3">
                    {GALLERY_IMAGES.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`
relative

h-16
w-16

overflow-hidden

rounded-2xl

border-2

transition-all
duration-300

hover:scale-105

${activeIndex === idx
                                    ?
                                    "border-primary bg-white/60 dark:bg-white/10 scale-110 shadow-lg"
                                    :
                                    "border-transparent bg-white/30 dark:bg-white/5 hover:bg-white/50 dark:hover:bg-white/10"
                                }
`}
                        >
                            <Image
                                src={img}
                                alt="Thumbnail"
                                fill
                                sizes="64px"
                                className="
        object-contain
        p-2
    "
                            />
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}