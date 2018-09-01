import React from 'react';
import PropTypes from 'prop-types';
import Occurence from './Occurence';

const Result = (props) => {
  const {
    occurences,
  } = props;

  if (Object.keys(occurences).length === 0) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Occurences</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(occurences).map((word, index) => (
          <Occurence
            key={`occurence-${index}`}
            word={word}
            occurence={occurences[word].occurence}
            frequency={occurences[word].frequency} />
        ))}
      </tbody>
    </table>
  );
}

Result.propTypes = {
  occurences: PropTypes.shape({
    occurence: PropTypes.number,
    frequency: PropTypes.number,
  }).isRequired,
};

export default Result;
