import { create } from 'zustand';
import React from "react";

interface ModalState {
    isOpen: boolean,
    children: React.ReactNode,
    title: React.ReactNode,
    open: () => void,
    close: () => void,
    setTitle: (title: React.ReactNode) => void,
    setChildren: (children: React.ReactNode) => void,
}

const useModal = create<ModalState>((set) => ({
    isOpen: false,
    children: "",
    title: "Window",
    setTitle: (title) => set({ title: title }),
    setChildren: (children) => set({ children: children }),
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false, children: "" }),
}));

export default useModal;