import Image from 'next/image';

import Plus from '../public/plus.svg';
import WithNavbar from '@/utils/WithNavbar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import PetsTable from '@/components/Tables/PetsTable';
import SearchButton from '@/components/Buttons/SearchButton';
import IncludePetButton from '@/components/Buttons/IncludePetButton';

async function Home() {
  const session = await getServerSession();

  const data: any = [];

  if (!session){
    redirect("/login")
  }

  

  return (
    <>
      <div className="h-[74px] bg-base-100 flex items-center">
        <div className="max-w-[1440px] m-auto w-full">
          <p className="font-semibold text-2xl leading-9 ml-4">Seus pets</p>
        </div>
      </div>

      <div className="flex justify-between max-w-[1440px] m-auto pt-[33px]">
        <SearchButton data={data} />

        <IncludePetButton />
      </div>

      <div className="max-w-[1440px] m-auto h-[74px] bg-base-100 flex items-center mt-[41px]">
        <div className="max-w-[1440px]">
          <p className="font-semibold text-base ml-4">Lista de pets</p>
        </div>
      </div>

      <PetsTable data={data} />
    </>
  );
}

export default WithNavbar(Home)
