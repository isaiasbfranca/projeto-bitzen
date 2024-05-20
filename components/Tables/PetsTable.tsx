"use client"

import Image from 'next/image';

import Eye from '../../public/eye.svg';
import Trash from '../../public/trash.svg';
import { useEffect, useState } from 'react';
import { DeletePet, PetListService } from '@/services/services';
import { useRouter } from 'next/navigation';


export default function PetsTable(dataResponse: any) {
    const [pets, setPets] = useState<any>(dataResponse);
    const { push } = useRouter();

    useEffect(() => {
        updateList();
    }, [dataResponse])

    const updateList = () => {
        PetListService('').then(async (resp) => {
            const data =  resp.json()
            setPets(await data);
        });
    }

    const deletePet = (id: number) => {
        DeletePet(id);
        updateList();
    }

    const detailView = (id: number) => {
        console.log(id)
        push(`/details/${id}`)
    }

    return (
        <div className="max-w-[1440px] m-auto">
        <div className="overflow-x-auto">
            <table className="table bg-white rounded-none">
              <thead>
                <tr>
                  <th>Pet</th>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Cor</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {pets && pets?.data?.map((pet: any, index: number) => (
                    <tr key={index}>
                        <td>
                            <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask w-12 h-12">
                                <img src={pet.image_url} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            </div>
                        </td>
                        <td>
                            {pet.name}
                        </td>
                        {/* Sem informação de idade e cor no endpoint de listagem de pet */}
                        <td>{pet.age ? pet.age : '-'}</td> 
                        <td>{pet.color ? pet.color : '-'}</td>
                        <th>
                            <div className="flex justify-end gap-8">
                            <button className="btn" onClick={() => detailView(pet.id)}>
                                <Image src={Eye} alt="olho" />
                            </button>
                            <button className="btn" onClick={() => deletePet(pet.id)}>
                                <Image src={Trash} alt="lixo" />
                            </button>
                            </div>
                        </th>
                    </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    )
}