import type { LeadStatus } from "../../types/Lead";
import React from 'react';

interface FilterTabsProps {
    currentStatus: LeadStatus | 'All';
    onChangeStatus: (status: LeadStatus | 'All') => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ currentStatus, onChangeStatus }) => {
  const filters: (LeadStatus | 'All')[] = ['All', 'New', 'Qualified', 'Won', 'Lost'];
  
  return (
    <div className="flex bg-gray-100 gap-2">
        {filters.map((status) => {
                const isActive = status === currentStatus;
                
                const statusStyles = isActive 
                    ? 'bg-white text-blue-600 shadow-md font-bold'
                    : 'bg-transparent text-gray-600 hover:bg-blue-300 font-medium hover:text-white';
                
                return (
                    <button
                        key={status}
                        onClick={() => onChangeStatus(status)}
                        // Combinação dos estilos base e condicionais
                        className={`
                            ${statusStyles}
                            px-4 py-1.5 rounded-md text-sm transition-all duration-150 whitespace-nowrap
                        `}
                    >
                        {status}
                    </button>
                );
            })}
    </div>
  )
};
export default FilterTabs;