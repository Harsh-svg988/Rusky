import { Dialog } from '@headlessui/react';
import { useState } from 'react';

export const EditTaskModal = ({ isOpen, onClose, task, onUpdate }) => {
  const [editedContent, setEditedContent] = useState(task?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedContent.trim()) {
      onUpdate(task.id, editedContent);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-6">
          <Dialog.Title className="text-2xl font-bold mb-6">Edit tasks</Dialog.Title>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block font-medium mb-2">Task</label>
              <input
                type="text"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                autoFocus
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded font-medium"
              >
                CLOSE
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 font-medium disabled:opacity-50"
                disabled={!editedContent.trim() || editedContent === task?.content}
              >
                UPDATE
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
