"use client"

import Image from 'next/image';

import ImageDefaut from '../../public/imagemDefaut.png';
import { useEffect, useState } from 'react';
import { DetailsPet, UpdatePet } from '@/services/services';
import { useParams } from 'next/navigation';

export default function EditForm() {
    const [pet, setPet] = useState<any>()
    const [name, setName] = useState<any>()
    const [color, setColor] = useState<any>()
    const [birthdate, setBirthdate] = useState<any>()
    const [observation, setObservation] = useState<any>()
    const params = useParams()

    useEffect(() => {
        DetailsPet(Number(params.id)).then(async (resp) => {
            const data =  resp.json()
            setPet(await data)
        })

    }, [])

    useEffect(() => {
        setName(pet?.name);
        setColor(pet?.color);
        setBirthdate(pet?.birthdate);
        setObservation(pet?.observation);

    }, [pet])

    async function edit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            color: formData.get("color"),
            birthdate: formData.get("birthdate"),
            observation: formData.get("observation"),
        }

        UpdatePet(Number(params.id), data);
    }
    
    return (
        <div className="flex max-w-[1440px] m-auto pt-[33px] ">
            <div>
                <img className="w-[336px] h-[280px] rounded-lg" src={pet?.image_url ? pet?.image_url : ImageDefaut} alt="imagem animal" width={336} height={280} />
            </div>

            <form className="w-full ml-[32px]" onSubmit={edit}>
                <div className="bg-white rounded-lg border">
                    <div className="ml-[40px] mt-[44px] mb-[70px]">
                        <div>
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Nome</span>
                                    </div>
                                    <input
                                        name="name"
                                        value={name}
                                        type="text"
                                        placeholder="Nome do pet"
                                        className="input input-bordered w-[487px]"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Cor</span>
                                    </div>
                                    <input
                                        name="color"
                                        value={color}
                                        type="text"
                                        placeholder="Cor do pet"
                                        className="input input-bordered w-[487px]"
                                        onChange={(e) => setColor(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Data de nascimento</span>
                                    </div>
                                    <input
                                        name="birthdate"
                                        value={birthdate}
                                        type="date"
                                        placeholder="Selecione"
                                        className="input input-bordered w-[487px]"
                                        onChange={(e) => setBirthdate(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Sobre o pet</span>
                                    </div>
                                    <textarea
                                        name="observation"
                                        value={observation}
                                        className="textarea textarea-bordered w-[487px]"
                                        placeholder="Escreva um pequeno texto sobre o pet"
                                        onChange={(e) => setObservation(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn w-full h-[48px] btn-primary text-white mt-[40px]">
                    Salvar
                </button>

            </form> 
        </div>
    )
}