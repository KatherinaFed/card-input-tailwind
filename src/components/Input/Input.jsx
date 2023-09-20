import React from 'react';

const Input = ({ name, placeholder }) => {
  return (
    <div>
      <input
        type={name}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      ></input>
    </div>
  );
};

export default Input;
