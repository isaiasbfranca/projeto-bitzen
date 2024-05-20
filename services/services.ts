"use client"

import { NextResponse } from "next/server";

export async function LoginService(formData: any) {
    const URL = process.env.NEXT_PUBLIC_URL || '';
    const res = await fetch(URL + '/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
    })

    const data = await res.json()

    return NextResponse.json(data)
}

export async function IncludeUserService(formData: any) {
    const URL = process.env.NEXT_PUBLIC_URL || '';
    const res = await fetch(URL + '/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Language': 'en'
        },
        body: JSON.stringify(formData)
    })

    const data = await res.json()

    return NextResponse.json(data)
}



export async function PetListService(search: string) {
    const token = localStorage.getItem('token');
    const URL = process.env.NEXT_PUBLIC_URL || '';
    const res = await fetch(URL + '/api/pets?' + new URLSearchParams({
        search: search
    }), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        },
        
    })

    const data = await res.json()

    return NextResponse.json(data.data);
}

export async function DeletePet(id: number) {
    const URL = process.env.NEXT_PUBLIC_URL || '';
    const res = await fetch(URL + `/api/pets/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        },
    })

    const data = await res.json()

    return NextResponse.json(data)
}

export async function DetailsPet(id: number) {
    const URL = process.env.NEXT_PUBLIC_URL || '';
    const res = await fetch(URL + `/api/pets/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        },
    })

    const data = await res.json()

    return NextResponse.json(data.data)
}

export async function UpdatePet(id: number, formData: any) {
    const URL = process.env.NEXT_PUBLIC_URL || '';
    const res = await fetch(URL + `/api/pets/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        },
        body: JSON.stringify(formData)
    })

    const data = await res.json()

    return NextResponse.json(data.data)
}

export async function IncludePetService(formData: any) {
    const URL = process.env.NEXT_PUBLIC_URL || '';
    const res = await fetch(URL + '/api/pets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
        body: JSON.stringify(formData)
    })

    const data = await res.json()

    return NextResponse.json(data)
}

export async function findUser() {
    const URL = process.env.NEXT_PUBLIC_URL || '';
    const res = await fetch(URL + '/api/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
    })

    const data = await res.json()

    return NextResponse.json(data.data)
}