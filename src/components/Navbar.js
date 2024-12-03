import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // Mengimpor ikon User

const Navbar = ({ openProfileModal, openSettingsModal, openDeleteModal }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fungsi untuk toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-2xl font-bold">
          My Website
        </a>

        <div className="flex items-center space-x-6">
          {/* Dropdown untuk User */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white flex items-center space-x-2 hover:text-gray-300 p-2 rounded-lg"
            >
              <FaUser className="mr-2" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <ul className="text-black">
                  {/* Profile Option */}
                  <li>
                    <button
                      onClick={openProfileModal}
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      Profile
                    </button>
                  </li>
                  {/* Settings Option */}
                  <li>
                    <button
                      onClick={openSettingsModal}
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      Settings
                    </button>
                  </li>
                  {/* Delete Account Option */}
                  <li>
                    <button
                      onClick={openDeleteModal}
                      className="block px-4 py-2 text-red-600 hover:bg-gray-200 w-full text-left"
                    >
                      Delete Account
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
