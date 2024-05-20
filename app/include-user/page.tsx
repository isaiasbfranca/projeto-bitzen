import Image from 'next/image';

import ArrowBack from '../../public/arrowBack.svg';
import Link from 'next/link';
import WithNavbar from '@/utils/WithNavbar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import IncludeUserForm from '@/components/Forms/IncludeUserForm';

async function IncludeUser() {
    return (
        <div className="bg-white w-full h-full">
            <div className="max-w-[1000px] m-auto w-full">
                <div className="pt-[120px]">
                    <Link className="flex ml-4 items-center" href="/login">
                        <Image src={ArrowBack} alt="Cadastrar pet" />
                        <p className="font-semibold text-base pl-4 text-primary">
                            Voltar
                        </p> 
                    </Link>
                </div>

                <div className="flex flex-col my-[30px]">
                    <span className="text-[40px] leading-[60px] font-semibold">Cadastre-se</span>
                    <span className="font-normal text-base">
                        Já possui uma conta? <a href="/login" className="font-semibold text-primary">Entrar na plataforma</a>
                    </span>
                </div>

                <div>
                    <IncludeUserForm />
                </div>
            </div>
        </div>
    )
}

export default IncludeUser;