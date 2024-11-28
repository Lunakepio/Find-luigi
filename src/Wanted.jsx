
import luigi from './assets/wanted/luigi.png';

import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGameStore } from './store/store';



const sinDuration = 1.5;
const repeat = 0;

const revealDuration = 1;
export const Wanted = () => {
    const circle1Ref = useRef(null);
    const circle2Ref = useRef(null);

    const { gameState, setGameToPlay, increaseLevel, level, setGameToAnimation } = useGameStore();

    const [yoyo, setYoyo] = useState(true);
    useGSAP(() => {
        gsap.set(circle1Ref.current, { attr: { r: 50 } });
        setGameToAnimation();
        level >= 1 && setYoyo(false);
        console.log(yoyo);
        gsap.fromTo(circle1Ref.current, {
            attr: { cx: 400 },
        },
            {
                repeat: repeat,
                yoyo: yoyo,
                attr: { cx: -100 },
                duration: sinDuration,
                ease: 'linear',
                onComplete: () => {
                    gsap.to(circle1Ref.current, {
                        attr: { cx: 150 }, ease: 'linear', duration: revealDuration, onComplete: () => {

                            setGameToPlay();
                        }
                    });
                },
            });

        gsap.fromTo(circle2Ref.current, {
            attr: { cx: -100 },
        },
            {
                repeat: repeat,
                yoyo: yoyo,
                attr: { cx: 400 },
                duration: sinDuration,
                ease: 'linear',
                onComplete: () => {
                    gsap.to(circle2Ref.current, {
                        attr: { cx: 150 }, ease: 'linear', duration: revealDuration, onComplete: () => {
                        }
                    });
                },
            });
    }, [level]);

    useGSAP(() => {
        if (gameState === 'pause') {
            gsap.to(circle1Ref.current, {
                attr: { r: 300 }, ease: 'linear', duration: 2, onComplete: () => {
                    setTimeout(() => {
                        increaseLevel();
                    }, 500);
                }
            });
        }
    }, [gameState])
    return (
        <section className="wanted">
            <div className="poster">
                <svg width="300" height="300">
                    <defs>
                        <clipPath id="circle1">
                            <circle cx="150" cy="150" r="50" ref={circle1Ref} />
                        </clipPath>
                        <clipPath id="circle2">
                            <circle cx="150" cy="150" r="50" ref={circle2Ref} />
                        </clipPath>
                    </defs>
                    <image href={luigi} width="300" height="300" clip-path="url(#circle1)" />
                    <image href={luigi} width="300" height="300" clip-path="url(#circle2)" />
                </svg>
            </div>
        </section>
    )
}