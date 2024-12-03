// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import PlayerProfileModal from './PlayerProfileModal';
import PlayerSettingsModal from './PlayerSettingsModal';
import DeleteAccountModal from './DeleteAccountModal';
import PlayerModal from './PlayerModal'; // Modal untuk mengisi nama player

const Layout = ({
  children, // Konten utama (seperti halaman operasi matematika)
  isPlayerModalOpen,
  closePlayerModal,
  savePlayerName,
  isProfileModalOpen,
  closeProfileModal,
  profileData,
  saveProfile,
  isSettingsModalOpen,
  closeSettingsModal,
  saveSettings,
  isDeleteModalOpen,
  closeDeleteModal,
  confirmDelete
}) => {
  return (
    <div>
      <Navbar />
      
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
          profileData={profileData}
          saveProfile={saveProfile}
        />
      )}

      {/* Menampilkan Modal Settings */}
      {isSettingsModalOpen && (
        <PlayerSettingsModal
          closeModal={closeSettingsModal}
          saveSettings={saveSettings}
        />
      )}

      {/* Menampilkan Modal Hapus Akun */}
      {isDeleteModalOpen && (
        <DeleteAccountModal
          closeModal={closeDeleteModal}
          confirmDelete={confirmDelete}
        />
      )}

      {/* Konten utama */}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Layout;
