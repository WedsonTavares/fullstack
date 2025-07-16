"use client";

import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
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
            '/assets/interiores2.png',
            '/assets/interiores3.png',
            '/assets/interiores-mob.png',
            '/assets/interiores-mob2.png',
            '/assets/interiores4.png',
            '/assets/interiores5.png',
            '/assets/interiores6.png'
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
        category: 'Landing Page',
        title: 'Projeto3',
        description: 'Descrição do projeto 3',
        stack: [
            { name: 'Html5' },
            { name: 'Css' },
            { name: 'Javascript' }
        ],
        images: [
            '/assets/soldati.png'
        ],
        live: 'https://www.soldatieletricaear.com.br/',
        github: 'https://www.soldatieletricaear.com.br/'
    },
    {
        num: '04',
        category: 'FullStack',
        title: 'Projeto4',
        description: 'Descrição do projeto 4',
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
        title: 'Projeto5',
        description: 'Descrição do projeto 5',
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
        title: 'Projeto6',
        description: 'Descrição do projeto 6',
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
    const [projectIndex, setProjectIndex] = useState(0);
    const project = projects[projectIndex];

    // Funções para as setas verdes dos projetos
    const handlePrevProject = () => setProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    const handleNextProject = () => setProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: 'easeIn' } }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    {/* COLUNA DE INFORMAÇÕES DO PROJETO */}
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
                                {project.live ? (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-[70px] h-[70px] items-center justify-center rounded-full bg-white/5 flex group"
                                    >
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <span>
                                                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Ver Projeto</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </a>
                                ) : (
                                    <span className='w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white/5 text-gray-400 cursor-not-allowed'>
                                        <BsArrowUpRight className='text-3xl' />
                                    </span>
                                )}
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
                    {/* COLUNA DO SLIDESHOW DE IMAGENS */}
                    <div className='w-full xl:w-[50%] flex flex-col items-center'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-4 w-full'
                            navigation={true}
                            modules={[Navigation]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            style={{
                                '--swiper-navigation-size': '28px',
                                '--swiper-navigation-color': '#22c55e', // verde
                            }}
                        >
                            {project.images && project.images.length > 0 ? (
                                project.images.map((img, idx) => (
                                    <SwiperSlide key={idx} className='w-full'>
                                        <div className='h-[460px] relative flex justify-center items-center bg-transparent rounded-xl'>
                                            {/* Carregamento */}
                                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                            <Image
                                                src={img}
                                                alt={`Imagem ${idx + 1} do projeto ${project.title}`}
                                                fill
                                                className='object-contain rounded-xl transition-all duration-300 shadow-lg'
                                                style={{
                                                    left: 0,
                                                    top: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    position: 'absolute'
                                                }}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))
                            ) : (
                                <SwiperSlide className='w-full'>
                                    <div className='h-[460px] flex justify-center items-center bg-transparent rounded-xl'>
                                        <span className="text-white/60">Sem imagem</span>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        {/* Botões verdes para trocar de projeto, abaixo das imagens */}
                        <div className="w-full flex justify-center">
                            <WorkSliderBtns
                                onPrev={handlePrevProject}
                                onNext={handleNextProject}
                                containerStyles='flex gap-2 w-full justify-between xl:w-max xl:justify-none'
                                btnsStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[40px] flex justify-center items-center transition-all rounded'
                                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[40px] flex justify-center items-center transition-all rounded'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}