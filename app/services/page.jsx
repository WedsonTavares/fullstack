"use client"; // Indica que este arquivo deve ser tratado como um componente do lado do cliente

import { BsArrowDownRight } from 'react-icons/bs'; // Importa o ícone BsArrowDownRight do react-icons
import Link from 'next/link'; // Importa o componente Link do Next.js para navegação
import { Description } from '@radix-ui/react-dialog'; // Importa o componente Description do Radix UI

// Definição dos serviços
const services = [
    {
        num: '01',
        title: 'Desenvolvimento Web',
        description: 'Criação de sites e aplicações web responsivas e otimizadas.',
        href: ""
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'Design de interfaces intuitivas e experiências de usuário envolventes..',
        href: ""
    },
    {
        num: '03',
        title: 'Logo Design',
        description: 'Desenvolvimento de logo com IA.',
        href: ""
    },
    {
        num: '04',
        title: 'Backend Dev',
        description: 'Criação do back otimizado e eficiente, atendendo suas necessidades.',
        href: ""
    },
];

import { motion } from 'framer-motion'; // Importa animações do framer-motion

// Definição do componente Services
export default function Services() {
    return (
        <section className='min-h-[80vh] flex flw-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }} // Animação inicial com opacidade 0
                    animate={{
                        opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
                    }} // Animação para opacidade 1 com transição
                    className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className='flex flex-1 flex-col justify-center gap-6 group'>
                                {/* Topo */}
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-5xl font-extrabold text-outline text-transparent 
                                    group-hover:text-outline-hover transition-all duration-500'>
                                        {service.num}
                                    </div>
                                    <Link href={service.href} className='w-[65px] h-[65px] flex bg-white rounded-full 
                                    group-hover:bg-accent transition-all duration-500 
                                    justify-center items-center hover:-rotate-45'>
                                        <BsArrowDownRight className='text-primary text-3xl' />
                                    </Link>
                                </div>
                                {/* Título */}
                                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent 
                                transition-all duration-500'>
                                    {service.title}
                                </h2>
                                {/* Descrição */}
                                <p className='text-white/60'>{service.description}</p>
                                {/* Borda */}
                                <div className='border-b border-white/20 w-full'></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}