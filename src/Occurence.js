import React from 'react';
import PropTypes from 'prop-types';

const Occurence = (props) => {
  const {
    word,
    occurence,
    frequency,
  } = props;

  return (
    <tr>
      <td>{word}</td>
      <td>{occurence}</td>
      <td>{frequency.toFixed(2)}%</td>
    </tr>
  );
}

Occurence.propTypes = {
  word: PropTypes.string.isRequired,
  occurence: PropTypes.number.isRequired,
  frequency: PropTypes.number.isRequired,
};

export default Occurence;
