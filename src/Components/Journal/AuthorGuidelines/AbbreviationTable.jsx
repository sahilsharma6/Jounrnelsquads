import React from 'react';

const AbbreviationTable = () => {
  // Define the list of abbreviations
  const abbreviations = [
    { abbreviation: 'Deciliter', definition: 'dl' },
    { abbreviation: 'Milligram', definition: 'mg' },
    { abbreviation: 'Micrometer', definition: 'mm' },
    { abbreviation: 'Molar', definition: 'mol/L' },
    { abbreviation: 'Percent', definition: '%' },
    { abbreviation: 'Kilogram', definition: 'kg' },
    { abbreviation: 'Hours', definition: 'h' },
    { abbreviation: 'Minutes', definition: 'min' },
    { abbreviation: 'Milliliter', definition: 'ml' },
  ];

  return (
    <div>
      
      <table style={{ border: '1px solid grey', borderCollapse: 'collapse', backgroundColor: '#f0f0f0' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid grey', padding: '8px' }}>Definition</th>
            <th style={{ border: '1px solid grey', padding: '8px' }}>Abbreviation</th>
          </tr>
        </thead>
        <tbody>
          {abbreviations.map((abbr, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid grey', padding: '8px' }}>{abbr.abbreviation}</td>
              <td style={{ border: '1px solid grey', padding: '8px' }}>{abbr.definition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AbbreviationTable;
