'use client'

import Image from 'next/image';

import Edit from '../../public/edit.svg';
import { useParams, useRouter } from 'next/navigation'

export default function EditButton() {
    const params = useParams();
    const { push } = useRouter();

    const redirectEdit = () => {
        push(`/edit/${params.id}`)
    }

    return (
        <div className="mr-4">
            <button className="btn w-[213px] h-[42px] btn-primary text-white" onClick={redirectEdit}  >
                <Image src={Edit} alt="Cadastrar pet" />
                Editar
            </button>
        </div>
    )
}