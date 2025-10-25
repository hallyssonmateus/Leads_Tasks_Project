import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import Button from "../components/Ui/Button";
import SearchBar from "../components/Ui/SearchBar";
import FilterTabs from "../components/Ui/FilterTabs";
import LeadCard from "../components/LeadCard";

type LeadStatus = 'New' | 'Qualified' | 'Won' | 'Lost';
interface Lead {
    id: number;
    name: string;
    email: string;
    status: LeadStatus;
}
export default function LeadsPage() {
    const MOCK_LEADS: Lead[] = [
    { id: 1, name: "Acme Corporation", email: "contact@acme.com", status: "New" },
    { id: 2, name: "TechStart Inc", email: "hello@techstart.io", status: "Qualified" },
    { id: 3, name: "Global Solutions", email: "info@globalsolutions.com", status: "Won" },
  ];
  
    const [currentFilter, setCurrentFilter] = useState<LeadStatus | 'All'>('All');

    const filteredLeads = MOCK_LEADS.filter(lead => 
        currentFilter === 'All' || lead.status === currentFilter
    );

 return (
   <div className="bg-gray-100 min-h-screen">
        <div className=" bg-white shadow-md mb-6">
            {/* Cabeçalho da Página */}
            <header className="container mx-auto px-4 py-6 flex flex-col gap-2 sm:flex-row justify-between md:justify-between ">
                <div>
                    <h1 className="text-3xl font-semibold text-blue-800">Leads</h1>
                    <p>Administre seus leads aqui</p>
                </div>
                <Button variant="primary">
                    <FaPlus className="mr-2"/> New Lead
                </Button>
            </header>
        </div>

        <div className='container mx-auto px-4'>
            {/* Barra de Busca e Filtros */}
            <div className="container mx-auto py-2">
                <div className="flex flex-col gap-2 sm:flex-col sm:gap-2 md:flex-row justify-between">
                    <div className="w-full md:w-1/3">
                        <SearchBar placeholder="Busque por email ou nome" onSearch={() => {}}/>
                    </div>

                    <FilterTabs currentStatus={currentFilter} onChangeStatus={setCurrentFilter}/>
                </div>
            </div>

            {/* Contagem de Leads e Lista */}
            <p className="text-sm text-gray-600 mb-4">
            Showing x of x leads
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
            {filteredLeads.length > 0 ? (
                            // 4. CORREÇÃO DA RENDERIZAÇÃO: Iteração correta com .map()
                            filteredLeads.map((lead) => (
                                <LeadCard key={lead.id} lead={lead} /> // Passando a prop 'lead'
                            ))
                        ) : (
                            <div className="col-span-full text-center py-10 text-gray-500">
                                Nenhum lead encontrado com o filtro atual.
                            </div>
                        )}
            </div>
        </div>    
     
   </div>
 );
}