import findOccurrences from './helpers';

describe('Helpers', () => {
  it('', () => {
    const text = "(Le Lorem) lorem Ipsum, est simplement Lorem l'ipsum.";
    const result = findOccurrences(text);

    expect(Object.keys(result).length).toBe(4);

    expect(result['lorem']).toEqual({
      occurence: 3,
      frequency: (3 / 7) * 100,
    });
    expect(result['ipsum']).toEqual({
      occurence: 2,
      frequency: (2 / 7) * 100,
    });
    expect(result['est']).toEqual({
      occurence: 1,
      frequency: (1 / 7) * 100,
    });
    expect(result['simplement']).toEqual({
      occurence: 1,
      frequency: (1 / 7) * 100,
    });
  });
});