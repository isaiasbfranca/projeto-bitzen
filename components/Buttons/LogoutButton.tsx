"use client"

import Image from "next/image";

import Exit from '../../public/exit.svg';
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <div className="flex max-w-[704px] m-auto pt-[33px] pb-8">
            <div className="w-full">
                <div className="bg-white rounded-lg border h-[68px] flex justify-between items-center">
                    <button className="btn btn-ghost ml-[40px] p-0" onClick={() => signOut()}>
                        <Image src={Exit} alt="sair" />
                        <p className="font-semibold text-base pl-4 text-error">
                            Sair da minha conta
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}