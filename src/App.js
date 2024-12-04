import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import ProfileModal from './components/ProfileModal';
import Addition from './pages/Addition';  // Import Addition component

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const savedPlayerData = localStorage.getItem('player');
    if (savedPlayerData) {
      setPlayerData(JSON.parse(savedPlayerData));
    }
  }, []);

  const handleLoginClick = () => {
    // Reset form values before opening modal
    setFirstName('');
    setLastName('');
    setGender('');
    setBirthDate('');
    setIsEditProfile(false); // Set to login mode
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Default values for new player stats (MP, HP, Level, Exp)
    const player = {
      firstName,
      lastName,
      gender,
      birthDate,
      mp: 100,   // Set default MP value
      hp: 100,   // Set default HP value
      level: 1,  // Set default Level
      exp: 0,    // Set default Exp
    };

    // Save to localStorage
    localStorage.setItem('player', JSON.stringify(player));

    setPlayerData(player);
    setIsModalOpen(false); // Close the modal after submit
    alert('Data player telah disimpan!');

    // Clear form data after submission
    setFirstName('');
    setLastName('');
    setGender('');
    setBirthDate('');
  };

  const handleEditProfileClick = () => {
    if (playerData) {
      setFirstName(playerData.firstName);
      setLastName(playerData.lastName);
      setGender(playerData.gender);
      setBirthDate(playerData.birthDate);
      setIsEditProfile(true); // Set to edit profile mode
      setIsModalOpen(true);
    }
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem('player');
    setPlayerData(null);
    alert('Akun telah dihapus!');
  };

  const handleViewProfileClick = () => setIsProfileModalOpen(true);
  const handleCloseProfileModal = () => setIsProfileModalOpen(false);

  return (
    <div className="App">
      <Navbar
        playerData={playerData}
        onLoginClick={handleLoginClick}
        onEditProfileClick={handleEditProfileClick}
        onViewProfileClick={handleViewProfileClick}
        onDeleteAccount={handleDeleteAccount}
      />

      <LoginModal
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        firstName={firstName}
        lastName={lastName}
        gender={gender}
        birthDate={birthDate}
        onSubmit={handleSubmit}
        onChangeFirstName={setFirstName}
        onChangeLastName={setLastName}
        onChangeGender={setGender}
        onChangeBirthDate={setBirthDate}
        isEditProfile={isEditProfile}  // Pass the edit profile state
      />

      <ProfileModal
        isProfileModalOpen={isProfileModalOpen}
        playerData={playerData}
        onClose={handleCloseProfileModal}
      />

      {playerData && <Addition playerData={playerData} setPlayerData={setPlayerData} />} {/* Show Addition component if player is logged in */}
    </div>
  );
};

export default App;
