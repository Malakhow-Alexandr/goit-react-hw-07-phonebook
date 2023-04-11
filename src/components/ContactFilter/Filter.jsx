import React from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';

import {
  FilterStyledLabel,
  FilterStyledInput,
  FilterLabel,
} from './Filter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <FilterStyledLabel>
      <FilterStyledInput
        type="text"
        onChange={event => {
          handleFilterChange(event.target.value);
        }}
      />
      <FilterLabel>Filter by name</FilterLabel>
    </FilterStyledLabel>
  );
};
