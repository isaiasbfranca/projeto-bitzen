'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Logo from '../../public/logoFull.svg';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export const Navbar = async () => {
    const pathname = usePathname();
    
    return (
        <>
            <div className="navbar bg-base-100 max-w-[1920px] h-[86px]">
                <div className="navbar max-w-[1440px] m-auto">
                    <div className="flex-1">
                        <Link href="/">
                            <Image className="btn btn-ghost" src={Logo} alt='Logo'  />
                        </Link>
                        <Link 
                            className={`${pathname === '/' ? 'active:bg-violet-700' : ''} `}
                            href="/"
                            
                        >
                            <p className="font-medium text-base">
                                Inicio
                            </p>
                            
                        </Link>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={''} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                            <a className="justify-between" href='/profile'>
                                Profile
                            </a>
                            </li>
                            <li><a onClick={() => signOut()}>Logout</a></li>
                        </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="divider m-0 p-0 h-0" />
        </>
    )
}