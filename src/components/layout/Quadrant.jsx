import { TaskCard } from '../tasks/TaskCard';

export const Quadrant = ({ title, type, tasks, onDeleteTask }) => {
  const getQuadrantStyle = () => {
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
    <div className="p-4 border border-black min-h-[300px]">
      <h2 className={`font-bold text-sm rounded-md px-3 py-2 uppercase text-center mb-4 ${getQuadrantStyle()}`}>
        {title}
      </h2>
      <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-300px)] md:max-h-[calc(50vh-100px)]">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};