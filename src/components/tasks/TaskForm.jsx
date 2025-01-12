import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export const TaskForm = ({ isOpen, onClose, onSubmit }) => {
  const [content, setContent] = useState('');
  const [selectedQuadrant, setSelectedQuadrant] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() && selectedQuadrant) {
      onSubmit(content, selectedQuadrant);
      setContent('');
      setSelectedQuadrant(null);
      onClose();
    }
  };

  const quadrantOptions = [
    { key: 'DO_FIRST', label: 'Do first', shortcut: 'Shift ⌘ + ↑', color: 'bg-green-400' },
    { key: 'DO_LATER', label: 'Do later', shortcut: 'Shift ⌘ + →', color: 'bg-blue-400' },
    { key: 'DELEGATE', label: 'Delegate', shortcut: 'Shift ⌘ + ←', color: 'bg-yellow-400' },
    { key: 'ELIMINATE', label: 'Eliminate', shortcut: 'Shift ⌘ + ↓', color: 'bg-red-400' },
  ];

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-4 md:p-6">
          <Dialog.Title className="text-xl font-bold mb-4">Add tasks</Dialog.Title>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Add your super task"
              className="w-full p-2 border rounded-lg"
            />
            
            <div className="space-y-2">
              {quadrantOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setSelectedQuadrant(option.key)}
                  className={`w-full flex items-center justify-between p-2 rounded ${
                    selectedQuadrant === option.key ? 'bg-gray-100' : ''
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${option.color}`}></span>
                    {option.label}
                  </span>
                  <span className="text-sm text-gray-500 hidden md:inline">{option.shortcut}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={!content.trim() || !selectedQuadrant}
              >
                Submit
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
