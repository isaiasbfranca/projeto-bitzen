import Image from 'next/image';

import ArrowBack from '../../../public/arrowBack.svg';

import Link from 'next/link';
import WithNavbar from '@/utils/WithNavbar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import DetailForm from '@/components/Forms/DetailForm';
import EditButton from '@/components/Buttons/EditButton';

async function Details() {
    const session = await getServerSession();
    

    if (!session){
        redirect("/login")
    }
    
    return (
        <>
            <div className="h-[74px] bg-base-100 flex items-center">
                <div className="max-w-[1440px] m-auto w-full">
                <p className="font-semibold text-2xl leading-9 ml-4">Detalhes</p>
                </div>
            </div>

            <div className="flex justify-between max-w-[1440px] m-auto pt-[33px]">
                <Link className="flex ml-4 items-center" href="/">
                    <Image src={ArrowBack} alt="Cadastrar pet" />
                    <p className="font-semibold text-base pl-4 text-primary">
                        Voltar
                    </p> 
                </Link>

                <EditButton />

                
            </div>

            <DetailForm />            
        </>
    )
}

export default WithNavbar(Details)