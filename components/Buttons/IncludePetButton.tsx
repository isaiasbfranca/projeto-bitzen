"use client"

import Image from 'next/image';

import Plus from '../../public/plus.svg';
import { useRouter } from 'next/navigation'

export default function IncludePetButton() {
    const { push } = useRouter();

    const redirectInclude = () => {
        push('/include-pet')
    }

    return (
        <div className="mr-4">
            <button className="btn w-[213px] h-[42px] btn-primary text-white" onClick={redirectInclude}>
                <Image src={Plus} alt="Cadastrar pet" />
                Cadastrar pet
            </button>
        </div>
    )
}