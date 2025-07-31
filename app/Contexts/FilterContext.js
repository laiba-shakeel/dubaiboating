import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [sellerType, setSellerType] = useState('');
  const [warranty, setWarranty] = useState('');
  const [adsPosted, setAdsPosted] = useState('');

  const filterOptions = [
    { label: 'City', value: city, setter: setCity, options: ['Dubai', 'Abu Dhabi', 'Sharjah'] },
    { label: 'Category', value: category, setter: setCategory, options: ['All in Boats', 'Fishing Boats', 'Yachts'] },
    { label: 'Price (AED)', value: price, setter: setPrice, options: ['0-5000', '5000-10000', '10000+'] },
    { label: 'Seller Type', value: sellerType, setter: setSellerType, options: ['Dealer', 'Private'] },
    { label: 'Warranty', value: warranty, setter: setWarranty, options: ['Yes', 'No'] },
    { label: 'Ads Posted', value: adsPosted, setter: setAdsPosted, options: ['Last 24h', 'Last Week', 'Last Month'] },
  ];

  return (
    <FilterContext.Provider value={{ filterOptions, setCity, setCategory, setPrice, setSellerType, setWarranty, setAdsPosted }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);