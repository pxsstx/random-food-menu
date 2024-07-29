'use client';

import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClose = () => {
        setIsOpen(false);
    };

    return (
        <nav className="w-full p-4 bg-neutral dark:bg-base-200">
            <div className="flex flex-col lg:flex-row gap-y-3 justify-between items-center">
                <h1 className="text-2xl bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                    <Link href={'/'}>Random Food Menu</Link>
                </h1>
                <div className="hidden lg:flex items-center gap-10">
                    <h3 className="text-lg cursor-pointer underline-animate" onClick={handleMenuClose}>
                    <Link href={'../all-menu'}>All Menu</Link>
                    </h3>
                    <div onClick={handleMenuClose}>
                        <ThemeSwitcher />
                    </div>
                </div>
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? <IoMdClose /> : <IoMdMenu />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden flex flex-col mt-4 gap-4 items-center">
                    <h3 className="text-lg cursor-pointer" onClick={handleMenuClose}>
                        All Menu
                    </h3>
                    <div onClick={handleMenuClose}>
                        <ThemeSwitcher />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
