// src/App.js
import React, { useState, useRef } from 'react';
import './App.css'; // Ensure you have this file for styling

const App = () => {
  const [listItems, setListItems] = useState([
    'Family',
    'Nation',
    'Carrier',
    'Relationships',
    'Friends',
    'Money',
    'Material Prosperity',
    'Recognition',
    'Sports',
    'Hobbies and interest'
  ]);

  const [dragStartIndex, setDragStartIndex] = useState(null);

  const listRef = useRef(null);

  const handleDragStart = (index) => {
    setDragStartIndex(index);
  };



  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow drop
  };

  const handleDrop = (index) => {
    if (dragStartIndex === null || dragStartIndex === index) return; // No valid drop

    const updatedList = [...listItems];
    
    // Swap the dragged item with the item at the drop index
    const temp = updatedList[index];
    updatedList[index] = updatedList[dragStartIndex];
    updatedList[dragStartIndex] = temp;

    setListItems(updatedList); // Update state with the new list
    setDragStartIndex(null); // Clear drag start index
  };

  const handleCheckOrder = () => {
    const correctOrder = [
      'Family',
      'Nation',
      'Carrier',
      'Relationships',
      'Friends',
      'Money',
      'Material Prosperity',
      'Recognition',
      'Sports',
      'Hobbies and interest'
    ];
    listRef.current.querySelectorAll('li').forEach((item, index) => {
      const itemName = item.querySelector('.person-name').innerText.trim();
      item.classList.toggle('right', itemName === correctOrder[index]);
      item.classList.toggle('wrong', itemName !== correctOrder[index]);
    });
  };

  return (
    <div>
      <ul
        ref={listRef}
        className="draggable-list"
        onDragOver={handleDragOver}
      >
        {listItems.map((item, index) => (
          <li
            key={index}
            data-index={index}
            onDragOver={handleDragOver}

            onDrop={() => handleDrop(index)}
            className="draggable-item"
          >
            <div
              className="draggable"
              draggable
              onDragStart={() => handleDragStart(index)}
            >
              <p className="person-name">{item}</p>
              <i className="fas fa-grip-lines"></i>
            </div>
          </li>
        ))}
      </ul>
      <img style={{width:'200px'}} src='https://d20vrrgs8k4bvw.cloudfront.net/images/open-graph/udacity.png'/>
      <button onClick={handleCheckOrder}>Check Order</button>
    </div>
  );
};

export default App;
