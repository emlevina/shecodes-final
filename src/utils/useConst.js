import { useRef } from 'react';

export const useConst = (initialValue) => {
    const ref = useRef();
    if (ref.current === undefined) {
        ref.current = typeof initialValue === 'function' ? initialValue() : initialValue;
    }
    return ref.current;
}