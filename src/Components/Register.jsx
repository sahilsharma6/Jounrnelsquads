import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    country: '',
    affiliation: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  

  const topTenCountries = [
    { name: '--Select--', value: '' },
    { name: 'China', value: 'China' },
    { name: 'India', value: 'India' },
    { name: 'United States', value: 'United States' },
    { name: 'Indonesia', value: 'Indonesia' },
    { name: 'Pakistan', value: 'Pakistan' },
    { name: 'Brazil', value: 'Brazil' },
    { name: 'Nigeria', value: 'Nigeria' },
    { name: 'Bangladesh', value: 'Bangladesh' },
    { name: 'Russia', value: 'Russia' },
    { name: 'Mexico', value: 'Mexico' }
  ];

  const getBorderColor = (value) => {
    return value ? 'border-green-500 focus:ring-green-500' : 'border-red-500 focus:ring-red-500';
  };

  const getExclamationMark = (value) => {
    return !value && (
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="50%" y="50%" textAnchor="middle" stroke="none" strokeWidth="0" dy=".3em">!</text>
        </svg>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white py-10 px-6 rounded-lg shadow-lg w-full max-w-2xl my-10">
        <h2 className="text-4xl font-bold mb-6 text-center">Create an Account</h2>
        <form className="space-y-6">
          {/* First Row: First Name and Last Name */}
          <div className="flex space-x-4">
            <div className="w-1/2 relative">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={`pl-2 mt-1 block w-full pr-10 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-2 sm:text-sm h-10 ${getBorderColor(formData.firstName)}`}
                />
                {getExclamationMark(formData.firstName)}
              </div>
            </div>
            <div className="w-1/2 relative">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={`pl-2 mt-1 block w-full pr-10 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-2 sm:text-sm h-10 ${getBorderColor(formData.lastName)}`}
                />
                {getExclamationMark(formData.lastName)}
              </div>
            </div>
          </div>
          {/* Second Row: Title and Country */}
          <div className="flex space-x-4">
            <div className="w-1/2 relative">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <div className="relative">
                <select
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className={`pl-2 mt-1 block w-full pr-10 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-2 sm:text-sm h-10 ${getBorderColor(formData.title)}`}
                >
                  <option value="">--Select--</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                  <option value="Professor">Professor</option>
                </select>
                {getExclamationMark(formData.title)}
              </div>
            </div>
            <div className="w-1/2 relative">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className={`pl-2 mt-1 block w-full pr-10 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-2 sm:text-sm h-10 ${getBorderColor(formData.country)}`}
                >
                  {topTenCountries.map((country, index) => (
                    <option key={index} value={country.value}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {getExclamationMark(formData.country)}
              </div>
            </div>
          </div>
          {/* Third Row: Affiliation */}
          <div className="relative">
            <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700">Affiliation</label>
            <div className="relative">
              <input
                type="text"
                id="affiliation"
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
                required
                className={`pl-2 mt-1 block w-full pr-10 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-2 sm:text-sm h-10 ${getBorderColor(formData.affiliation)}`}
              />
              {getExclamationMark(formData.affiliation)}
            </div>
          </div>
          {/* Fourth Row: Email */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`pl-2 mt-1 block w-full pr-10 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-2 sm:text-sm h-10 ${getBorderColor(formData.email)}`}
              />
              {getExclamationMark(formData.email)}
            </div>
          </div>
          {/* Fifth Row: Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`pl-2 mt-1 block w-full pr-10 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-2 sm:text-sm h-10 ${getBorderColor(formData.password)}`}
              />
              {getExclamationMark(formData.password)}
            </div>
          </div>
          {/* Sixth Row: Confirm Password */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={`pl-2 mt-1 block w-full pr-10 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-2 sm:text-sm h-10 ${getBorderColor(formData.confirmPassword)}`}
              />
              {getExclamationMark(formData.confirmPassword)}
            </div>
          </div>
          <div>
            <button type="submit" className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;


