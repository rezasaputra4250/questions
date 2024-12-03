import React from 'react';

const DeleteAccountModal = ({ closeModal, confirmDelete }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Are you sure you want to delete your account?</h2>
        <p className="mb-4">This action cannot be undone.</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={closeModal}
            className="bg-gray-300 text-black px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={confirmDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
