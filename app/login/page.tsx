import Image from 'next/image';

import Logo from '../../public/logoFull.svg';
import LoginForm from '@/components/Forms/LoginForm';

function Login() {
    return (
        <>
            <div className="flex max-w-[704px] m-auto pt-[33px]">
                <div className="w-full">
                    <div className="bg-white rounded-lg border">
                        <div className="m-[64px]">
                            <div>
                                <Image className="btn btn-ghost" src={Logo} alt='Logo'  />
                            </div>

                            <div className="flex flex-col my-[45px]">
                                <span className="font-semibold text-2xl leading-9 pb-4">Entrar na platafoma</span>
                                <span className="font-normal text-base">Não tem uma conta?<a href='/include-user' className="font-semibold text-primary"> Cadastre-se gratuitamente</a></span>
                            </div>

                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login