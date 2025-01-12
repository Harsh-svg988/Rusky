import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { EditTaskModal } from './EditTaskModal';
import { useTheme } from '../../context/ThemeContext';

export const TaskCard = ({ task, onDelete, onUpdate }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const getQuadrantStyle = () => {
    if (isDarkMode) {
      switch (task.quadrant) {
        case 'DO_FIRST':
          return 'bg-[#132A1F]';
        case 'DO_LATER':
          return 'bg-[#15292F]';
        case 'DELEGATE':
          return 'bg-[#2C2815]';
        case 'ELIMINATE':
          return 'bg-[#2A1616]';
        default:
          return 'bg-gray-800';
      }
    }
    // Light mode styles remain unchanged
    switch (task.quadrant) {
      case 'DO_FIRST':
        return 'bg-green-50';
      case 'DO_LATER':
        return 'bg-blue-50';
      case 'DELEGATE':
        return 'bg-yellow-50';
      case 'ELIMINATE':
        return 'bg-red-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <>
      <div className={`${getQuadrantStyle()} rounded-lg p-3 flex items-center gap-3 ${isDarkMode ? 'text-gray-200' : ''}`}>
        <input type="checkbox" className="w-4 h-4" />
        <p className="flex-grow">{task.content}</p>
        <div className="flex gap-2">
          <button 
            className={`p-1 hover:bg-opacity-10 hover:bg-white rounded transition-colors`}
            onClick={() => setIsEditModalOpen(true)}
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            className={`p-1 hover:bg-opacity-10 hover:bg-white rounded transition-colors text-red-500`}
            onClick={() => onDelete(task.id)}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <EditTaskModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        task={task}
        onUpdate={onUpdate}
      />
    </>
  );
};
