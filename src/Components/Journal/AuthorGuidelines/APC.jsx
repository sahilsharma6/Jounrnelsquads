import React from 'react';

const APC = () => {
  return (
    <div>
      
      <table style={{ border: '1px solid grey', borderCollapse: 'collapse', backgroundColor: '#f0f0f0' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid grey', padding: '8px' }}>Manuscript Type</th>
            <th style={{ border: '1px solid grey', padding: '8px' }}>Regular Issue</th>
            <th style={{ border: '1px solid grey', padding: '8px' }}>Special Issue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid grey', padding: '8px' }}>Research Articles</td>
            <td style={{ border: '1px solid grey', padding: '8px' }}>$799</td>
            <td style={{ border: '1px solid grey', padding: '8px' }}>$849</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid grey', padding: '8px' }}>Other Articles</td>
            <td style={{ border: '1px solid grey', padding: '8px' }}>$699</td>
            <td style={{ border: '1px solid grey', padding: '8px' }}>$749</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default APC;
