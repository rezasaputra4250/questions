import React, { useState } from 'react';

const PlayerModal = ({ closeModal, savePlayerName }) => {
  const [name, setName] = useState('');

  // Fungsi untuk menangani perubahan input nama
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      savePlayerName(name); // Simpan nama ke localStorage dan update state
      closeModal(); // Tutup modal setelah data disimpan
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Enter Your Player Name</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 w-full">
            Save Name
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerModal;
