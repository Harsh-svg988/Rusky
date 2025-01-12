import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Header } from './components/layout/Header';
import { Quadrant } from './components/layout/Quadrant';
import { TaskForm } from './components/tasks/TaskForm';
import { useTask } from './components/hooks/useTask';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const { tasks, addTask, deleteTask,updateTask } = useTask();
  const { isDarkMode } = useTheme();

  const quadrants = [
    { type: 'DO_FIRST', title: 'Do First' },
    { type: 'DO_LATER', title: 'Do Later' },
    { type: 'DELEGATE', title: 'Delegate' },
    { type: 'ELIMINATE', title: 'Eliminate' },
  ];

  const getTasksByQuadrant = (quadrant) => {
    return tasks.filter(task => task.quadrant === quadrant);
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <Header />
      <main className="min-h-screen flex flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-2  flex-grow relative w-full">
          {quadrants.map(({ type, title }) => (
            <Quadrant
              key={type}
              type={type}
              title={title}
              tasks={getTasksByQuadrant(type)}
              onDeleteTask={deleteTask}
              onUpdateTask={updateTask}
            />
          ))}

          {/* Floating Action Button - Hidden on mobile when scrolling */}
          <button
            onClick={() => setIsTaskFormOpen(true)}
            className="fixed bottom-6 right-6 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <TaskForm
          isOpen={isTaskFormOpen}
          onClose={() => setIsTaskFormOpen(false)}
          onSubmit={addTask}
        />
      </main>
    </div>
  );
};


const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;