import { Modal } from '../common/Modal';

export const TaskActionsModal = ({ isOpen, onClose }) => {
  const actions = [
    { key: 'DO_FIRST', label: 'Do first', shortcut: 'Shift ⌘ + Arrow ↑' },
    { key: 'DO_LATER', label: 'Do later', shortcut: 'Shift ⌘ + Arrow →' },
    { key: 'DELEGATE', label: 'Delegate', shortcut: 'Shift ⌘ + Arrow ←' },
    { key: 'ELIMINATE', label: 'Eliminate', shortcut: 'Shift ⌘ + Arrow ↓' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Move task to">
      <div className="space-y-2">
        {actions.map((action) => (
          <button
            key={action.key}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span>{action.label}</span>
            <span className="text-sm text-gray-500">{action.shortcut}</span>
          </button>
        ))}
      </div>
    </Modal>
  );
};