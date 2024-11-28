import { mario, wario, luigi, yoshi } from '../Images';
import { Character } from '../Character';
import { shuffle } from 'lodash';
import { useMemo, useEffect } from 'react';
import gsap from 'gsap';
import { useGameStore } from '../store/store';
export const Level3 = () => {
    const { gameState } = useGameStore();
    const characterArray = useMemo(() => {
        const characters = [mario, wario, yoshi];
        const repetitions = 10;
        const numColumns = 8;


        let baseArray = [];


        for (let i = 0; i < numColumns * repetitions; i++) {
            baseArray.push(...characters);
        }

        baseArray = [...baseArray, ...Array(numColumns * repetitions).fill(null)];


        baseArray = shuffle(baseArray);


        const randomColIndex = Math.floor(Math.random() * numColumns);
        const randomIndexInColumn = Math.floor(Math.random() * repetitions);


        const cols = Array.from({ length: numColumns }, () => []);


        for (let i = 0; i < numColumns * repetitions; i++) {
            const colIndex = i % numColumns;
            cols[colIndex].push(baseArray[i] || null);
        }

        cols[randomColIndex][randomIndexInColumn] = luigi;

        return cols;
    }, []);

    useEffect(() => {
        const columns = document.querySelectorAll('.column');
        if (columns.length > 0) {
            columns.forEach((column) => {
                const shouldGoUp = Math.random() < 0.5;
                gsap.to(column, {
                    y: shouldGoUp ? -500 : 50vi0,
                    duration: (Math.random() * 5) + 3,
                    yoyo: true,
                    ease: 'linear',
                    repeat: -1,
                });
            });
        }

    }, []);

    useEffect(() => {
        if(gameState === 'pause'){
            gsap.killTweensOf('.column');
        }
    }, [gameState])
    return (
        <section className="level-3">
            {characterArray.map((col, colIndex) => (
                <div key={colIndex} className='column'>
                    {col.map((character, rowIndex) => (
                        <div key={rowIndex} className="cell">
                            {character ? <Character icon={character} /> : null}
                        </div>
                    ))}
                </div>
            ))}
        </section>
    )
}