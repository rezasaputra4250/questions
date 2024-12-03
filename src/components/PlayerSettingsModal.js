import React, { useState, useEffect } from 'react';

const PlayerSettingsModal = ({ closeModal, saveSettings }) => {
  const [name, setName] = useState('');
  const [savedProfile, setSavedProfile] = useState(null);

  // Ambil nama player dari localStorage jika ada
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('playerProfile'));
    if (profile) {
      setName(profile.name || ''); // Set nama dari localStorage
      setSavedProfile(profile); // Set profil lengkap untuk ditampilkan
    }
  }, []);

  // Fungsi untuk menangani perubahan nama
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi input sebelum disimpan
    if (name.trim() === '') {
      alert('Name cannot be empty');
      return;
    }

    const playerSettings = { name };
    saveSettings(playerSettings); // Simpan pengaturan nama ke App.js dan localStorage
    localStorage.setItem('playerProfile', JSON.stringify(playerSettings)); // Simpan hanya nama ke localStorage

    closeModal(); // Tutup modal setelah data disimpan
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Player Settings</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
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

export default PlayerSettingsModal;
