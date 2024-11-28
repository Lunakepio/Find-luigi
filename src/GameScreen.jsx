import React, { useEffect } from 'react';
import { Level1 } from './Levels/Level1';
import { Level2 } from './Levels/Level2';
import { Level3 } from './Levels/Level3';
import { useGameStore } from './store/store';

export const GameScreen = () => {
    const { level, setGameToAnimation } = useGameStore();


    const renderLevel = () => {
        switch (level) {
            case 1:
                return <Level1 />;
            case 2:
                return <Level2 />;
            case 3:
                return <Level3 />;
            default:
                return <div>Select a Level</div>;
        }
    };

    return (
        <>
            {renderLevel()}
        </>
    );
};