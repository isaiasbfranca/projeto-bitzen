"use client"

import { signIn } from "next-auth/react";

export default function LoginForm() {

    async function login(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
        }

        signIn("credentials", {
            ...data,
            callbackUrl: "/"
        })
    }

    return (
        <form onSubmit={login}>
            <div>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input name="email" type="text" placeholder="seu email" className="input input-bordered" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Senha</span>
                    </div>
                    <input name="password" type="password" placeholder="sua senha" className="input input-bordered" />
                </label>
            </div>

            <div className="flex justify-between mt-8">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <span className="label-text pl-4">Manter conectado</span> 
                    </label>
                </div>

                <div>
                    <span className="font-semibold text-base text-primary">
                        Esqueceu sua senha?
                    </span>
                </div>
            </div>

            <div>
                <button type="submit" className="btn w-full h-[48px] btn-primary text-white mt-[40px]">
                    Entrar na plataforma
                </button>
            </div>
        </form>
    )
}