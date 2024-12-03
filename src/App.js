import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlayerProfileModal from './components/PlayerProfileModal';
import PlayerSettingsModal from './components/PlayerSettingsModal';
import DeleteAccountModal from './components/DeleteAccountModal';
import PlayerModal from './components/PlayerModal'; // Modal untuk mengisi nama player
import AddPage from './pages/AddPage'; // Halaman untuk Penjumlahan
import SubtractPage from './pages/SubtractPage'; // Halaman untuk Pengurangan
import MultiplyPage from './pages/MultiplyPage'; // Halaman untuk Perkalian
import DividePage from './pages/DividePage'; // Halaman untuk Pembagian
import { FaPlusCircle, FaMinusCircle, FaTimesCircle, FaDivide } from 'react-icons/fa'; // Mengimpor ikon yang dibutuhkan

const App = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false); // Untuk membuka modal player name
  const [playerName, setPlayerName] = useState('');
  const [playerSettings, setPlayerSettings] = useState({
    name: '',
    level: 1,
    hp: 1000,
    mp: 500,
    exp: 0,
    skills: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
  });

  // Fungsi untuk membuka modal Profile
  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);

  // Fungsi untuk membuka modal Settings
  const openSettingsModal = () => setIsSettingsModalOpen(true);
  const closeSettingsModal = () => setIsSettingsModalOpen(false);

  // Fungsi untuk membuka modal Hapus Akun
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  // Fungsi untuk membuka modal untuk memasukkan nama player
  const openPlayerModal = () => setIsPlayerModalOpen(true);
  const closePlayerModal = () => setIsPlayerModalOpen(false);

  // Fungsi untuk menyimpan nama player ke localStorage
  const savePlayerName = (name) => {
    localStorage.setItem('playerName', name);
    setPlayerName(name); // Update state playerName
  };

  // Fungsi untuk menyimpan pengaturan player
  const savePlayerSettings = (settings) => {
    setPlayerSettings(settings);
    localStorage.setItem('playerSettings', JSON.stringify(settings));
  };

  // Fungsi untuk menyimpan profil player setelah edit
  const savePlayerProfile = (profileData) => {
    setPlayerSettings(profileData);
    localStorage.setItem('playerSettings', JSON.stringify(profileData));
  };

  // Fungsi untuk menghapus akun
  const confirmDeleteAccount = () => {
    localStorage.removeItem('playerName');
    localStorage.removeItem('playerSettings');
    setPlayerName('');
    setPlayerSettings({
      name: '',
      level: '',
      hp: '',
      mp: '',
      exp: '',
      skills: [''],
    });
    closeDeleteModal(); // Tutup modal setelah akun dihapus
  };

  useEffect(() => {
    const savedPlayerName = localStorage.getItem('playerName');
    const savedPlayerSettings = JSON.parse(localStorage.getItem('playerSettings'));
    if (savedPlayerName) {
      setPlayerName(savedPlayerName);
      if (savedPlayerSettings) {
        // Pastikan skills adalah array, jika tidak set ke array kosong
        setPlayerSettings({
          ...savedPlayerSettings,
          skills: Array.isArray(savedPlayerSettings.skills) ? savedPlayerSettings.skills : [],
        });
      }
    } else {
      openPlayerModal(); // Jika nama player belum ada, buka modal untuk memasukkan nama
    }
  }, []);

  return (
    <Router>
      <div>
        <Navbar
          openProfileModal={openProfileModal}
          openSettingsModal={openSettingsModal}
          openDeleteModal={openDeleteModal}
        />

        {/* Modal untuk mengisi nama player jika belum ada */}
        {isPlayerModalOpen && (
          <PlayerModal
            closeModal={closePlayerModal}
            savePlayerName={savePlayerName}
          />
        )}

        {/* Menampilkan Modal Profile */}
        {isProfileModalOpen && (
          <PlayerProfileModal
            closeModal={closeProfileModal}
            profileData={playerSettings}
            saveProfile={savePlayerProfile}
          />
        )}

        {/* Menampilkan Modal Settings */}
        {isSettingsModalOpen && (
          <PlayerSettingsModal
            closeModal={closeSettingsModal}
            saveSettings={savePlayerSettings}
          />
        )}

        {/* Menampilkan Modal Hapus Akun */}
        {isDeleteModalOpen && (
          <DeleteAccountModal
            closeModal={closeDeleteModal}
            confirmDelete={confirmDeleteAccount}
          />
        )}
        
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to the App</h1>

      {/* Link menuju halaman operasi matematika dengan button dan icon */}
      <div className="mt-6">
        <h3 className="text-xl">Choose an Operation:</h3>
        <div className="flex space-x-4">
          <Link to="/add" className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
            <FaPlusCircle className="mr-2" /> Addition
          </Link>
          <Link to="/subtract" className="flex items-center px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none">
            <FaMinusCircle className="mr-2" /> Subtraction
          </Link>
          <Link to="/multiply" className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none">
            <FaTimesCircle className="mr-2" /> Multiplication
          </Link>
          <Link to="/divide" className="flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none">
            <FaDivide className="mr-2" /> Division
          </Link>
        </div>
      </div>
    </div>


        {/* Routes untuk halaman operasi matematika */}
        <Routes>
          <Route path="/add" element={<AddPage />} />
          <Route path="/subtract" element={<SubtractPage />} />
          <Route path="/multiply" element={<MultiplyPage />} />
          <Route path="/divide" element={<DividePage />} />
        </Routes>
      </div>  
    </Router>
  );
};

export default App;
