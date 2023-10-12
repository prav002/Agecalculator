import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label>Enter your birthdate: </label>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;
