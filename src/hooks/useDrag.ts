import { create } from 'zustand';
import React from "react";

interface DragState {
    isDrag: boolean,
    draggableObject: React.RefObject<HTMLDivElement> | null,
    drag: (ref: React.RefObject<HTMLDivElement>, callback?: () => void) => void,
    drop: () => void,
    onDropCallback: (() => void) | null
}

const useDrag = create<DragState>((set) => ({
    isDrag: false,
    draggableObject: null,
    onDropCallback: null,
    drag: (ref, callback) => {
        set(() => ({
            isDrag: true,
            draggableObject: ref,
            onDropCallback: callback ? callback : null,
        }));
    },
    drop: () => {
        set(() => ({
            isDrag: false,
            draggableObject: null,
            onDropCallback: null,
        }));
    },
}));

export default useDrag;