import { Filter, KanbanSquareIcon, LayoutDashboardIcon, TicketIcon } from "lucide-react";
import MyComponent from "./components/page";
import TicketComponent from "./components/tickets/page";

export default function Home() {
  return (
  <div className="flex gap-4">
    <div className="w-80 h-screen bg-white p-8 ">
      <div className=''>
        <button className="h-10 bg-green-500 hover:bg-green-400 px-8  rounded-2xl text-white font-semibold">
          ABRIR CHAMADO
        </button>

        <div className='pt-4'>
          <a href="http://" className='link group block mx-auto rounded-lg p-4 space-y-x hover:bg-green-400/10 hover:text-green-400 '>
            <TicketIcon className='group-hover:text-green-400' />
            Chamados Abertos
          </a>
          <a href="http://" className='link group block mx-auto rounded-lg p-4 space-y-x hover:bg-green-400/10 hover:text-green-400 '>
            <KanbanSquareIcon className='group-hover:text-green-400' />
            Relatórios
          </a>
          <a href="http://" className='link group block mx-auto rounded-lg p-4 space-y-x hover:bg-green-400/10 hover:text-green-400 '>
            <LayoutDashboardIcon className='group-hover:text-green-400' />
            Inventário
          </a>
        </div>
      </div>
    </div>

    <div className="w-full h-screen  p-8">
      <span className='text-2xl font-semibold'>Chamados Abertos</span>

      <div className='pt-8 flex gap-4 '>
        <a href="" className='text-gray-500'>
          Todos
        </a>
        
        <a href="" className='text-gray-500'>
          Material de Consumo
        </a>
        
        <a href="" className='text-gray-500'>
          Assistência
        </a>
        
        <a href="" className='text-gray-500'>
          Software
        </a>

        <a href="" className='text-gray-500'>
          Outros
        </a>            
      </div>

      
      <div className='flex'>
          <div>
            <a href="http://" className='link'>
              <Filter />
                Filtro
            </a>
        </div>
      </div>

      <div className="pt-6">
        <TicketComponent />
    </div>
  </div>
  </div>
  );
}
 