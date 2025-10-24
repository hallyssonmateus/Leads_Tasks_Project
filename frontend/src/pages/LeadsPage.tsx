import { FaPlus } from "react-icons/fa";
import Button from "../components/Ui/Button";
export default function LeadsPage() {
 return (
   <div>
        <div className="container mx-auto px-4 py-6">
            {/* 3. Cabeçalho da Página */}
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

        {/* 4. Barra de Busca e Filtros */}
        <div>

        </div>
   </div>
 );
}