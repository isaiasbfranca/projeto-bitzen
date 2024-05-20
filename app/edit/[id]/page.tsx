import Image from 'next/image';

import ImageDefaut from '../../../public/imagemDefaut.png';
import WithNavbar from '@/utils/WithNavbar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import EditForm from '@/components/Forms/EditForm';

async function Edit() {
    const session = await getServerSession();

    if (!session){
        redirect("/login")
    }
    return (
        <>
            <div className="h-[74px] bg-base-100 flex items-center">
                <div className="max-w-[1440px] m-auto w-full">
                <p className="font-semibold text-2xl leading-9 ml-4">Editar pet</p>
                </div>
            </div>

            <EditForm />
        </>
    )
}

export default WithNavbar(Edit)