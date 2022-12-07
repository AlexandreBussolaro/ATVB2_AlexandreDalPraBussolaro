import { useContext } from "react";
import { ArmasContext } from "../context/ArmasContext";

export function useArmas() {
    const context = useContext(ArmasContext);
    return context;
}