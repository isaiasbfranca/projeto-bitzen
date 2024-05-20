"use client"

import { IncludeUserService } from "@/services/services";

export default function IncludeUserForm() {
    async function include(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            document: formData.get("document"),
            phone_number: formData.get("phone_number"),
            password: formData.get("password"),
            password_confirmation: formData.get("password_confirmation"),
        }

        IncludeUserService(data);
        
    }
    return (
        <form onSubmit={include}>
            <div>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Nome</span>
                    </div>
                    <input name="name" type="text" placeholder="Seu nome" className="input input-bordered" />
                </label>
            </div>
            <div>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">E-mail</span>
                    </div>
                    <input name="email" type="text" placeholder="Insira o seu e-mail" className="input input-bordered" />
                </label>
            </div>
            <div className="flex gap-[33px]">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">CPF</span>
                    </div>
                    <input name="document" type="text" placeholder="Insira o seu CPF" className="input input-bordered " />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Telefone</span>
                    </div>
                    <input name="phone_number" type="text" placeholder="Insira o seu telefone" className="input input-bordered" />
                </label>
            </div>
            <div className="flex gap-[33px]">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Senha</span>
                    </div>
                    <input name="password" type="password" placeholder="crie uma senha" className="input input-bordered" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Confirmar senha</span>
                    </div>
                    <input name="password_confirmation" type="password" placeholder="Repita a senha" className="input input-bordered" />
                </label>
            </div>

            
            <div className="form-control flex flex-row my-[35px]">
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                <span className="label-text pl-4">
                    Li e concordo com os <a href='#'>Termos de uso</a> e a <a href='#'>Política de privacidade</a> do sistema.
                </span> 
            </div>

            <div className="pb-[40px]">
                <button type="submit" className="btn w-full h-[48px] btn-primary text-white mt-[5px]">
                    Criar conta
                </button>
            </div>
        </form>
    )
}