import React from 'react';
import css from 'components/Filter/Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ value, onChange }) => (
  <label className={css.label}>
    Find contacts by name
    <input
      type=" text"
      className={css.input}
      value={value}
      onChange={onChange}
    />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.any.isRequired,
};
export default Filter;
