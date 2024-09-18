'use client';

import { useState, useEffect } from 'react';
import { data } from './contents/listMenu';
import AlertCardMenu from './components/AlertCardMenu';
import AlertCard from './components/AlertCard';

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showCategoryAlert, setShowCategoryAlert] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const generateRandomMenu = () => {
    if (selectedCategory) {
      const randomMenu = {
        category: selectedCategory,
        item: getRandomItem(data[selectedCategory]),
      };
      setMenu([randomMenu]);
      setShowAlert(true);
      setShowCategoryAlert(false);
    } else {
      setMenu([]);
      setShowAlert(false);
      setShowCategoryAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleCloseCategoryAlert = () => {
    setShowCategoryAlert(false);
  };

  useEffect(() => {
    const handleModalVisibility = () => {
      if (showAlert) {
        const alertModal = document.getElementById('alert_card_menu_modal');
        alertModal?.showModal();
      } else {
        const alertModal = document.getElementById('alert_card_menu_modal');
        alertModal?.close();
      }
      
      if (showCategoryAlert) {
        const categoryAlertModal = document.getElementById('alert_card_modal');
        categoryAlertModal?.showModal();
      } else {
        const categoryAlertModal = document.getElementById('alert_card_modal');
        categoryAlertModal?.close();
      }
    };

    handleModalVisibility();
  }, [showAlert, showCategoryAlert]);

  return (
    <div className='lg:h-[95%] h-[90%] flex items-center justify-center'>
      <div className="text-center flex flex-col gap-y-5">
        <div className="mb-4">
          <select
            id="categories"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="select rounded-lg border-0"
          >
            <option value="" disabled>Select your favorite meat</option>
            {Object.keys(data).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button onClick={generateRandomMenu} className="btn btn-primary mb-4 rounded-md">
          Generate Random Menu
        </button>
        {showAlert && menu.length > 0 && (
          <AlertCardMenu
            category={menu[0].category}
            item={menu[0].item}
            onClose={handleCloseAlert}
          />
        )}
        {showCategoryAlert && (
          <AlertCard
            message="Please select a category!"
            onClose={handleCloseCategoryAlert}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
