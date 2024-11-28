import { create } from 'zustand';

export const useGameStore = create((set) => ({
    score: 0,
    gameState: 'animation',
    level: 1,
    increaseScore: () => set((state) => ({ score: state.score + 5 })),
    decreaseScore: () => set((state) => ({ score: state.score - 5 })),
    setGameState: (state) => set((state) => ({ gameState: state })),
    setGameToPlay: () => set((state) => ({ gameState: 'play' })),
    setGameToAnimation: () => set((state) => ({ gameState: 'animation' })),
    setGameToPause: () => set((state) => ({ gameState: 'pause' })),
    increaseLevel: () => set((state) => ({ level: state.level + 1 })),
    decreaseLevel: () => set((state) => ({ level: state.level - 1 })),
}));

