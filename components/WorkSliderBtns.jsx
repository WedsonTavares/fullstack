"use client";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

export default function WorkSliderBtns({ onPrev, onNext, btnsStyles, containerStyles, btnStyles, iconsStyles }) {
    return (
        <div
            className={
                `${containerStyles} flex items-center justify-center w-full mx-auto mt-4 md:-mt-8 gap-16 md:gap-32 lg:gap-48 max-w-[220px] md:max-w-[320px] lg:max-w-[420px]`
            }
        >
            <button
                className={
                    `${btnStyles} flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent`
                }
                onClick={onPrev}
                aria-label="Projeto anterior"
            >
                <PiCaretLeftBold className={iconsStyles || "text-2xl md:text-3xl"} />
            </button>
            <button
                className={
                    `${btnsStyles} flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent`
                }
                onClick={onNext}
                aria-label="Próximo projeto"
            >
                <PiCaretRightBold className={iconsStyles || "text-2xl md:text-3xl"} />
            </button>
        </div>
    );
}