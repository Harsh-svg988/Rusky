import { TaskCard } from '../tasks/TaskCard';
import { useTheme } from '../../context/ThemeContext';

export const Quadrant = ({ title, type, tasks, onDeleteTask, onUpdateTask }) => {
  const { isDarkMode } = useTheme();
  
  const getQuadrantStyle = () => {
    if (isDarkMode) {
      switch (type) {
        case 'DO_FIRST':
          return 'bg-[#1C3829] text-[#34D399]';
        case 'DO_LATER':
          return 'bg-[#1B3741] text-[#38BDF8]';
        case 'DELEGATE':
          return 'bg-[#3F371D] text-[#FCD34D]';
        case 'ELIMINATE':
          return 'bg-[#3D1E1E] text-[#F87171]';
        default:
          return 'bg-gray-800 text-gray-200';
      }
    }
    // Light mode styles remain unchanged
    switch (type) {
      case 'DO_FIRST':
        return 'border-green-500 bg-green-200 text-green-500';
      case 'DO_LATER':
        return 'border-blue-200 bg-[#d2e8ec] text-[#0296a6]';
      case 'DELEGATE':
        return 'border-yellow-200 bg-[#fdf1d3] text-yellow-500';
      case 'ELIMINATE':
        return 'border-red-200 bg-red-200 text-red-800';
      default:
        return 'border-gray-200 bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="p-4 border ${isDarkMode ? 'border-gray-800' : 'border-black'} min-h-[300px] flex flex-col items-center">
      <span className={`font-bold text-sm rounded-md px-3 py-2 uppercase text-center mb-4 ${getQuadrantStyle()}`}>
        {title}
      </span>
      <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-300px)] md:max-h-[calc(50vh-100px)] w-full">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onUpdate={onUpdateTask} 
          />
        ))}
      </div>
    </div>
  );
};
