"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import { Description } from '@radix-ui/react-dialog';
import WorkSliderBtns from '@/components/WorkSliderBtns';

// Definição dos projetos
const projects = [
    {
        num: '01',
        category: 'Frontend',
        title: 'Projeto1',
        description: 'Landing page Interioses.',
        stack: [
            { name: 'Html5' },
            { name: 'Tailwindcss' },
            { name: 'Javascript' }
        ],
        images: [
            // '/assets/frontend.png',
            '/assets/interiores-mob.png',  // AJUSTAR FOTOS COM A DIMENSÃO 200X200
            // '/assets/interiores-mob2.png'
        ],
        live: 'https://leafy-salamander-302e1a.netlify.app/',
        github: 'https://github.com/WedsonTavares'
    },
    {
        num: '02',
        category: 'FullStack',
        title: 'Projeto2',
        description: 'Descrição do projeto 2',
        stack: [
            { name: 'Html5' },
            { name: 'Css' },
            { name: 'Javascript' }
        ],
        images: [
            '/assets/frontend.png'
        ],
        live: '',
        github: 'https://github.com/WedsonTavares'
    },
    {
        num: '03',
        category: 'FullStack',
        title: 'Projeto3',
        description: 'Descrição do projeto 3',
        stack: [
            { name: 'Html5' },
            { name: 'Css' },
            { name: 'Javascript' }
        ],
        images: [
            '/assets/frontend.png'
        ],
        live: '',
        github: 'https://github.com/WedsonTavares'
    },
    {
        num: '04',
        category: 'FullStack',
        title: 'Projeto3',
        description: 'Descrição do projeto 3',
        stack: [
            { name: 'Html5' },
            { name: 'Css' },
            { name: 'Javascript' }
        ],
        images: [
            '/assets/frontend.png'
        ],
        live: '',
        github: 'https://github.com/WedsonTavares'
    },
    {
        num: '05',
        category: 'FullStack',
        title: 'Projeto3',
        description: 'Descrição do projeto 3',
        stack: [
            { name: 'Html5' },
            { name: 'Css' },
            { name: 'Javascript' }
        ],
        images: [
            '/assets/frontend.png'
        ],
        live: '',
        github: 'https://github.com/WedsonTavares'
    },
    {
        num: '06',
        category: 'FullStack',
        title: 'Projeto3',
        description: 'Descrição do projeto 3',
        stack: [
            { name: 'Html5' },
            { name: 'Css' },
            { name: 'Javascript' }
        ],
        images: [
            '/assets/frontend.png'
        ],
        live: '',
        github: 'https://github.com/WedsonTavares'
    }
];

export default function Projects() {
    const [project, setProjects] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currenIndex = swiper.activeIndex;
        setProjects(projects[currenIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: 'easeIn' } }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* Número do projeto */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline bg-clip-text bg-gradient-to-br from-accent'>
                                {project.num}
                            </div>
                            {/* Categoria do projeto */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                {project.category}
                            </h2>
                            {/* Descrição do projeto */}
                            <p>{project.description}</p>
                            {/* Tecnologias usadas no projeto */}
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => (
                                    <li className='text-xl text-accent' key={index}>
                                        {item.name}
                                        {index !== project.stack.length - 1 && ','}
                                    </li>
                                ))}
                            </ul>
                            {/* Borda */}
                            <div className='border border-white/20'></div>
                            {/* Botões */}
                            <div className='flex items-center gap-4'>
                                {/* Ver projeto ao vivo */}
                                <Link target='_blank' href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] items-center justify-center rounded-full bg-white/5 flex group'>
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Ver Projeto</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* Ver repositório no GitHub */}
                                <Link target='_blank' href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] items-center justify-center rounded-full bg-white/5 flex group'>
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Repositório Github</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className='w-full'>
                                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl'>
                                        {/* Carregamento */}
                                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                        {/* Imagens em cascata */}
                                        <div className='relative w-full h-full flex items-center justify-center'>
                                            {(project.images || []).map((img, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={img}
                                                    alt={`Imagem ${idx + 1} do projeto ${project.title}`}
                                                    fill
                                                    className='object-cover rounded-xl absolute transition-all duration-300'
                                                    style={{
                                                        left: `${idx * 30}px`,
                                                        top: `${idx * 20}px`,
                                                        zIndex: 20 - idx,
                                                        opacity: 1 - idx * 0.18
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* Botões do slider */}
                            <WorkSliderBtns
                                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_12px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                                btnsStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[24px] h-[34px] flex justify-center items-center transition-all rounded-r'
                                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[24px] h-[34px] flex justify-center items-center transition-all rounded-l'
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}