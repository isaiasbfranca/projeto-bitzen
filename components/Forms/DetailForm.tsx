"use client"

import Image from 'next/image';

import ImageDefaut from '../../public/imagemDefaut.png';
import { useEffect, useState } from 'react';
import { DetailsPet } from '@/services/services';
import { useParams } from 'next/navigation'

export default function DetailForm() {
    const [detailsPet, setDetailsPet] = useState<any>();
    const params = useParams()

    useEffect(() => {
        DetailsPet(Number(params.id)).then(async (resp) => {
            const data =  resp.json()
            setDetailsPet(await data)
        })

    }, [])

    return (
        <div className="flex max-w-[1440px] m-auto pt-[33px] ">
            <div>
                <img className="w-[336px] h-[280px] rounded-lg " src={detailsPet?.image_url ? detailsPet?.image_url : ImageDefaut} alt="pet" width={336} height={280} />
            </div>

            <div className='bg-white ml-[32px] w-full rounded-lg border'>
                    <div className="flex gap-[88px] mb-[56px] mt-[48px] ml-[40px]">
                    <div>
                        <p className="font-medium text-base">Nome</p>
                        <span className="font-normal text-base">{detailsPet?.name}</span>
                    </div>
                    <div>
                        <p className="font-medium text-base">Cor</p>
                        <span className="font-normal text-base">{detailsPet?.color}</span>
                    </div>
                    <div>
                        <p className="font-medium text-base">Idade</p>
                        <span className="font-normal text-base">{detailsPet?.age}</span>
                    </div>
                    </div>

                    <div className="ml-[40px]">
                    <p className="font-medium text-base">Sobre o pet</p>
                    <span className="font-normal text-base">{detailsPet?.observation}</span>
                    </div>
            </div>
        </div>
    )
}