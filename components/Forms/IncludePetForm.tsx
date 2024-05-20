"use client"

import { IncludePetService } from "@/services/services"
import { useState } from "react";

export default function IncludePetForm() {
    const [file, setFile] = useState();

    const teste = (e: any) => {
        e.preventDefault();

        setFile(e.target.files[0])

    }

    async function submitInclude(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            color: formData.get("color"),
            birthdate: formData.get("birthdate"),
            description: formData.get("description"),
            image: file,
        }

        IncludePetService(data);
        
    }

    const handleFileChange = (event: any) => {
        setFile(event.target.files[0]);
    };

    return (
        <form onSubmit={submitInclude} className="flex max-w-[1440px] m-auto pt-[33px]">
            <div>
                <input onChange={handleFileChange} name="file" type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>

            <div className="w-full ml-[32px]">
                <div className="bg-white rounded-lg border">
                    <div className="ml-[40px] mt-[44px] mb-[70px]">
                        <div>
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Nome</span>
                                    </div>
                                    <input name="name" type="text" placeholder="Nome do pet" className="input input-bordered w-[487px]" />
                                </label>
                            </div>
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Cor</span>
                                    </div>
                                    <input name="color" type="text" placeholder="Cor do pet" className="input input-bordered w-[487px]" />
                                </label>
                            </div>
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Data de nascimento</span>
                                    </div>
                                    <input name="birthdate" type="date" placeholder="Selecione" className="input input-bordered w-[487px]" />
                                </label>
                            </div>
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Sobre o pet</span>
                                    </div>
                                    <textarea name="description" className="textarea textarea-bordered w-[487px]" placeholder="Escreva um pequeno texto sobre o pet"></textarea>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn w-full h-[48px] btn-primary text-white mt-[40px]">
                    Salvar
                </button>

            </div>
        </form>
    )
}