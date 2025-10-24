import { FaPlus } from "react-icons/fa";
import Button from "../components/Ui/Button";
import SearchBar from "../components/Ui/SearchBar";
import FilterTabs from "../components/Ui/FilterTabs";

export default function LeadsPage() {

 return (
   <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-6 bg-white shadow-md">
            {/* Cabeçalho da Página */}
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-semibold text-blue-800">Leads</h1>
                    <p>Administre seus leads aqui</p>
                </div>
                <Button variant="primary">
                    <FaPlus className="mr-2"/> New Lead
                </Button>
            </header>
        </div>

        {/* Barra de Busca e Filtros */}
        <div className="container mx-auto px-4 py-2 border">
            <div className="flex justify-between items-center">
                <SearchBar placeholder="Busque por email ou nome" />

                <FilterTabs currentStatus={FilterTabs} />
            </div>
        </div>
        
        {/* Contagem de Leads e Lista */}
        <p className="text-sm text-gray-600 mb-4 px-4">
        Showing x of x leads
      </p>

   </div>
 );
}