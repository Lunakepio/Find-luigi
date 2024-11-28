import { mario, wario, luigi, yoshi } from '../Images';
import { Character } from '../Character';
import { shuffle } from 'lodash';
import { useMemo } from 'react';

export const Level1 = () => {
    const characterArray = [
        mario,
        wario,
        luigi,
        yoshi
    ]
    const shuffledArray = useMemo(() => shuffle(characterArray), []);
    return (
        <section className="level-1">
            {shuffledArray.map((character, index) => {
                return <Character key={index} icon={character} />
            })}
        </section>
    )
}