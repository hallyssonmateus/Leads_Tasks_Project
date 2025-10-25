import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdMoreVert } from 'react-icons/md';
import { IoEyeSharp } from "react-icons/io5"; 
import type { Lead } from '../types/Lead';

interface LeadCardProps {
  lead: Lead;
}

const LeadCard: React.FC<LeadCardProps> = ({ lead }) => {
    const navigate = useNavigate();

    const getStatusStyles = (status: Lead['status']) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800'; // Azul para Novos
      case 'Qualified':
        return 'bg-green-100 text-green-800'; // Verde para Qualificados
      case 'Won':
        return 'bg-purple-100 text-purple-800'; // Roxo/Vinho para Ganhos
      case 'Lost':
        return 'bg-red-100 text-red-800'; // Vermelho para Perdidos
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = () => {
    navigate(`/leads/${lead.id}`);
  };
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start mb-3">
        {/* Nome do Lead */}
        <h3 className="font-bold text-xl text-gray-800 leading-snug">
          {lead.name}
        </h3>
        
        {/* Menu de Opções (Placeholder) */}
        <button 
          className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
          title="More actions" 
        >
          <MdMoreVert size={20} />
        </button>
      </div>
      
      {/* --- Email --- */}
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <MdEmail className="mr-2 text-zinc-400" />
        <span className="truncate">{lead.email}</span>
      </div>
      <span 
        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider 
                    ${getStatusStyles(lead.status)}`}
      >
        {lead.status}
      </span>
      <button 
        onClick={handleViewDetails}
        className="mt-6 flex flex-col sm:flex-row items-center md:items-center justify-center gap-6 w-full text-center py-2 text-sm font-semibold cursor-pointer 
                   text-zinc-400 border border-zinc-400 rounded-lg 
                   hover:bg-blue-400 hover:text-white transition duration-150"
      >
        <IoEyeSharp />
        View Details
      </button>
    </div>
  )
};

export default LeadCard;