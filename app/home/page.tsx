import Image from 'next/image';

import Plus from '../../public/plus.svg';
import Search from '../../public/search.svg';
import Eye from '../../public/eye.svg';
import Trash from '../../public/trash.svg';
import WithNavbar from '@/utils/WithNavbar';

function Home() {
  return (
    <>
      <div className="h-[74px] bg-base-100 flex items-center">
        <div className="max-w-[1440px] m-auto w-full">
          <p className="font-semibold text-2xl leading-9 ml-4">Seus pets</p>
        </div>
      </div>

      <div className="flex justify-between max-w-[1440px] m-auto pt-[33px]">
        <div className="flex ml-4">
          <label className="
            input
            input-bordered
            flex
            items-center
            gap-2
            w-[370px]
            rounded-r-none"
          >
            <Image src={Search} alt="pesquisar" />
            <input type="text" className="grow" placeholder="Pesquisar um pet" />
          </label>
          <button className="rounded-l-none btn btn-primary text-white w-[91px] h-[42px]">Buscar</button>
        </div>

        <div className="mr-4">
          <button className="btn w-[213px] h-[42px] btn-primary text-white">
            <Image src={Plus} alt="Cadastrar pet" />
            Cadastrar pet
          </button>
        </div>
      </div>

      <div className="max-w-[1440px] m-auto h-[74px] bg-base-100 flex items-center mt-[41px]">
        <div className="max-w-[1440px]">
          <p className="font-semibold text-base ml-4">Lista de pets</p>
        </div>
      </div>

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
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask w-12 h-12">
                          <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Leona
                  </td>
                  <td>6 meses</td>
                  <td>Rajado</td>
                  <th>
                    <div className="flex justify-end gap-8">
                      <button className="btn">
                        <Image src={Eye} alt="olho" />
                      </button>
                      <button className="btn">
                        <Image src={Trash} alt="lixo" />
                      </button>
                    </div>
                  </th>
                </tr>

                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask w-12 h-12">
                          <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Leona
                  </td>
                  <td>6 meses</td>
                  <td>Rajado</td>
                  <th>
                    <div className="flex justify-end gap-8">
                      <button className="btn">
                        <Image src={Eye} alt="olho" />
                      </button>
                      <button className="btn">
                        <Image src={Trash} alt="lixo" />
                      </button>
                    </div>
                  </th>
                </tr>

              </tbody>
            </table>
        </div>
      </div>

    </>
  );
}

export default WithNavbar(Home)