import { useEffect, useRef } from "react";

export const useObserver = (ref, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        let clb = function(entries, observer) {
            if (entries[0].isIntersecting) {
                callback();
            }
        };

        observer.current = new IntersectionObserver(clb);
        observer.current.observe(ref.current);
    }, [isLoading]);
}