import luigi from './assets/icons/luigi.png';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGameStore } from './store/store';

const ScoreModifier = ({positive}) => {
    const divRef = useRef(null);
    const { increaseScore, decreaseScore, setGameToPause } = useGameStore();
    useGSAP(() => {
        gsap.to(divRef.current, {
            y: positive ? -25 : 25, ease: 'linear', duration: 0.5
        });
        if (positive) {
            increaseScore();
        } else {
            decreaseScore();
        }
        setGameToPause();
    }, []);
    return (
        <div className={`score-increase ${positive ? null : 'blue'}`} ref={divRef}>
            {positive ? '+5' : '-10'}
        </div>
    )
}
export const Character = ({ icon }) => {
    const [clicked, setClicked] = useState(false);
    const { gameState } = useGameStore();
    return (
        <div className="character">
            <img src={icon ? icon : ''} alt="character" onClick={() => {gameState === 'play' && setClicked(true)}} />
            {clicked && <ScoreModifier positive={icon === luigi} />}

        </div>
    )
}