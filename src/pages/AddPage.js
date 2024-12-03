import React from 'react';
import Navbar from '../components/Navbar'; // Impor Navbar
import PlayerProfileModal from '../components/PlayerProfileModal';
import PlayerSettingsModal from '../components/PlayerSettingsModal';
import DeleteAccountModal from '../components/DeleteAccountModal';
import PlayerModal from '../components/PlayerModal'; // Impor modal untuk nama player

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Navbar yang digunakan di seluruh halaman */}

      {/* Modals */}
      <PlayerProfileModal />
      <PlayerSettingsModal />
      <DeleteAccountModal />
      <PlayerModal />

      {/* Konten Halaman Utama */}
      <div className="p-6">
        {children} {/* Render children halaman di sini */}
      </div>
    </div>
  );
};

export default MainLayout;
