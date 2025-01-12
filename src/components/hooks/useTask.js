import { useState, useCallback } from 'react';

export const useTask = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback((content, quadrant = 'DO_FIRST') => {
    const newTask = {
      id: Date.now().toString(),
      content,
      quadrant,
      createdAt: new Date(),
    };
    setTasks(prev => [...prev, newTask]);
  }, []);

  const moveTask = useCallback((taskId, quadrant) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, quadrant } : task
    ));
  }, []);

  const deleteTask = useCallback((taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  }, []);

  return {
    tasks,
    addTask,
    moveTask,
    deleteTask,
  };
};