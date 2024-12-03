import React, { useState, useEffect } from 'react';

const PlayerProfileModal = ({ closeModal, profileData, saveProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(profileData.name); // Default to profileData name

  useEffect(() => {
    setName(profileData.name); // Update name when profileData changes
  }, [profileData]);

  const handleSave = () => {
    saveProfile({ ...profileData, name }); // Simpan profil baru ke localStorage
    setIsEditing(false); // Set editing mode to false after saving
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>

        <div className="mb-4">
          <p className="text-gray-600">
            <strong>Name:</strong>
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border px-3 py-2 rounded-md mt-2 w-full"
              />
            ) : (
              <span className="ml-2">{profileData.name}</span>
            )}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-gray-600"><strong>Level:</strong> {profileData.level}</p>
          <p className="text-gray-600"><strong>HP:</strong> {profileData.hp}</p>
          <p className="text-gray-600"><strong>MP:</strong> {profileData.mp}</p>
          <p className="text-gray-600"><strong>Exp:</strong> {profileData.exp}</p>
          <p className="text-gray-600">
            <strong>Skills:</strong>
            <ul>
              {profileData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </p>
        </div>

        <div className="flex justify-end space-x-4">
          {/* Tampilkan tombol edit atau simpan sesuai status isEditing */}
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)} // Ubah status ke edit mode
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Edit
            </button>
          )}
          <button
            onClick={closeModal}
            className="bg-gray-300 text-black px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfileModal;
