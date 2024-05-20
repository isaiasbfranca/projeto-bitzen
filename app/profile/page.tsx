import Image from "next/image";

import Exit from '../../public/exit.svg';
import Edit from '../../public/edit.svg';
import WithNavbar from "@/utils/WithNavbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ProfileForm from "@/components/Forms/ProfileForm";
import LogoutButton from "@/components/Buttons/LogoutButton";

async function Profile() {

    const session = await getServerSession();

    if (!session){
        redirect("/login")
    }

    return (
        <>
            <div className="h-[74px] bg-base-100 flex items-center">
                <div className="max-w-[1440px] m-auto w-full">
                <p className="font-semibold text-2xl leading-9 ml-4">Meu perfil</p>
                </div>
            </div>

            <div className="flex max-w-[704px] m-auto pt-[33px] ">
                <div className="w-full">
                    <div className="bg-white rounded-lg border">
                        <div className="ml-[40px] my-[20px]">
                            <p className="font-semibold text-base">
                                Meus dados
                            </p>
                        </div>
                        
                        <div className="divider m-0 p-0 h-0" />
                        
                        <ProfileForm />
                    </div>
                </div>
            </div>

            <div className="flex max-w-[704px] m-auto pt-[33px]">
                <div className="w-full">
                    <div className="bg-white rounded-lg border h-[68px] flex justify-between items-center">
                        <div className="mx-[40px] w-full flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-base">Senha</p>
                            </div>

                            <div >
                                <button className="btn btn-ghost">
                                    <Image src={Edit} alt="editar" style={{ filter: 'invert(100%)' }} />
                                    <p className="font-semibold text-base pl-4 text-primary">
                                        Alterar
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <LogoutButton />
        </>
    )
}

export default WithNavbar(Profile)