'use client'

import { useEffect, useState } from 'react';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("wireframe");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem("theme");
            const initialTheme = storedTheme ? storedTheme : "wireframe";
            setTheme(initialTheme);
            document.querySelector("html").setAttribute("data-theme", initialTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "wireframe" ? "black" : "wireframe";
        setTheme(newTheme);
        if (typeof window !== 'undefined') {
            localStorage.setItem("theme", newTheme);
            document.querySelector("html").setAttribute("data-theme", newTheme);
        }
    };

    return (
        <div>
            <button className='p-2 rounded-md bg-neutral-content text-base-200' onClick={toggleTheme}>
                {theme === "wireframe" ? <IoMdMoon size={20} /> : <IoMdSunny size={20} />}
            </button>
        </div>
    );
};

export default ThemeSwitcher;
