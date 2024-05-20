"use client"

import { findUser } from "@/services/services"
import { useEffect, useState } from "react"

export default function ProfileForm() {
    const [user, setUser] = useState<any>();
    const [name, setName] = useState<any>();
    const [email, setEmail] = useState<any>();

    useEffect(() => {
        findUser().then(async (resp) => {
            const data =  resp.json()
            setUser(await data)
        })

    }, [])

    useEffect(() => {
        setName(user?.name);
        setEmail(user?.email);

    }, [user])

    return (
        <form className="m-[40px]">
            <div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Nome</span>
                    </div>
                    <input value={name} onChange={(e) => setName(e)} name="name" type="text" placeholder="Nome" className="input input-bordered w-full" />
                </label>
            </div>

            <div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input value={email} onChange={(e) => setEmail(e)} name="email" type="text" placeholder="Email" className="input input-bordered w-full" />
                </label>
            </div>

            <button className="btn w-full h-[48px] btn-primary text-white mt-[40px]">
                Salvar
            </button>
        </form>
    )

}