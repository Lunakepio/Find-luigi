import { mario, wario, luigi, yoshi } from '../Images';
import { Character } from '../Character';
import { shuffle } from 'lodash';
import { useMemo } from 'react';

const characterRepetition = 13;
export const Level2 = () => {

    const characterArray = useMemo(() => {
        const characters = [
            mario,
            wario,
            yoshi
        ]

        const repeatedArray = characters.flatMap(character => Array(characterRepetition).fill(character));
        repeatedArray.push(luigi);

        return shuffle(repeatedArray);
    }, [])
    return (
        <section className="level-2">
            {characterArray.map((character, index) => (
                <Character icon={character} key={index} />
            ))}
        </section>
    )
}