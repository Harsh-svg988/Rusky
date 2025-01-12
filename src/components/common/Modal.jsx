import { Dialog } from '@headlessui/react';

export const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white">
          <div className="flex justify-between items-center p-4 border-b">
            <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
          <div className="p-4">
            {children}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
