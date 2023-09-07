'use client'
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function Page() {
  const [name, setName,] = useState('');
  const [email, setEmail,] = useState('');
  const [description, setDescription,] = useState('');
  const [priority, setPriority,] = useState('');
  const [status, setStatus,] = useState('ABERTO');
  const [title, setTitle,] = useState('');

  const router = useRouter();


  async function onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();

    const formData:  {
    name: any,
    email: any,
    description: any,
    priority: any,
    status: any,
    title: any,

  }= {
    name: name,
    email: email,
    description: description,
    priority: priority,
    status: status, 
    title: title, 
  
  }


    const response = await fetch('http://localhost:8080/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  
    });

    // Handle response if necessary
    const data = await response.json();
    // ...

    window.location.href = '/';
  }

  return (
    

    <div className="px-96 py-60">
            <h1 className="text-2xl font-bold pb-8">Abrir novo Chamado</h1>
            <form className="shadow-lg" onSubmit={onSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Solicitante
                        </label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                    </div>
                    <div className="w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            E-mail
                        </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="example@gmail.com" />

                    </div>
                    <div className="w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Título
                        </label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Pioridade
                    </label>
                    <div className="relative">
                        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>BAIXA</option>
                            <option>MEDIA</option>
                            <option>ALTA</option>
                            <option>CRITICA</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <label className="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2">
                        Descrição
                    </label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} className="appearance-none block w-full h-72 bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                </div>
                <div className="py-6">
                    <button type="submit" className="h-10 bg-green-500 hover:bg-green-400 px-8 text-white font-semibold">
                     ABRIR CHAMADO
                    </button>
                </div>
            </form>
        </div>
  );
}
