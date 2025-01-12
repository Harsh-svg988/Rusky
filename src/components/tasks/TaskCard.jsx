import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { EditTaskModal } from './EditTaskModal';

export const TaskCard = ({ task, onDelete, onUpdate }) => {  // Receive onUpdate
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const getQuadrantStyle = () => {
    switch (task.quadrant) {
      case 'DO_FIRST':
        return 'bg-green-50';
      case 'DO_LATER':
        return 'bg-blue-50';
      case 'DELEGATE':
        return 'bg-yellow-50';
      case 'ELIMINATE':
        return 'bg-red-100';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <>
      <div className={`${getQuadrantStyle()} rounded-lg p-3 flex items-center gap-3`}>
        <input type="checkbox" className="w-4 h-4" />
        <p className="flex-grow">{task.content}</p>
        <div className="flex gap-2">
          <button 
            className="p-1 hover:bg-white rounded"
            onClick={() => setIsEditModalOpen(true)}
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            className="p-1 hover:bg-white rounded text-red-500"
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
        onUpdate={onUpdate}  // Pass the onUpdate function to EditTaskModal
      />
    </>
  );
};
