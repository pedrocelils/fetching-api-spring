'use client'
import { ArrowUpNarrowWideIcon, DownloadIcon, Filter, KanbanSquareIcon, LayoutDashboardIcon, MenuIcon, SearchIcon, TicketIcon, TruckIcon } from 'lucide-react'
import { useEffect, useState } from "react";

export default function TicketComponent() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/tickets");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Erro ao obter os dados:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Exibir os dados obtidos */}
            {data && (
                <div className='grid grid-cols-4 gap-y-4'>
                    {data.map((item: any) => (
                        <div key={item.id}>
                            <div className="">
                                <div className="bg-white rounded-lg shadow-lg px-4 w-72 h-72 flex flex-col justify-between">
                                <div>
                                    <p className="text-xs text-gray-400">TICKET - #{item.id}</p>
                                </div>
                                
                                <div className="bg-gray-300 w-64 h-8 flex justify-center items-center rounded">{item.status}</div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-700 font-semibold">{item.title}</span>
                                    <span className="text-sm text-slate-600 pt-2">Solicitante</span>
                                    <span className="text-sm">{item.requerente.name}</span>
                                    <span className="text-sm text-slate-600 pt-2">Abertura</span>
                                    <span className="text-sm">{item.formattedDatetime}</span>
                                    <span className="text-sm text-slate-600 pt-2">Atribuido</span>
                                    <span className="text-sm">ROBERTO CARLOS</span>
                                </div>
                                <div>
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-64">Detalhes</button>
                                    <div className="pt-2"></div>
                                </div>
                                </div>
                            </div>   
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
