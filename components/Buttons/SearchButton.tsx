"use client"

import Image from 'next/image';
import Search from '../../public/search.svg';
import { PetListService } from '@/services/services';

export default function SearchButton(dataResponse: any) {

    async function search(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("search"),
            
        }

        PetListService(data.name?.toString() || '').then(async (resp) => {
            const data =  resp.json()
            dataResponse = await data;
        });

    }

    return (
        <form className="flex ml-4" onSubmit={search}>
            <label className="
                input
                input-bordered
                flex
                items-center
                gap-2
                w-[370px]
                rounded-r-none"
            >
                <Image src={Search} alt="pesquisar" />
                <input name='search' type="text" className="grow" placeholder="Pesquisar um pet" />
            </label>
            <button className="rounded-l-none btn btn-primary text-white w-[91px] h-[42px]">Buscar</button>
        </form>
    )
}