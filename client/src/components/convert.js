import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import './convert.css';

// GraphQL query to fetch currencyList and listExchangeRate
const GET_currencyList = gql`
  query Query {
    currencyList {
      symbol
      name
    }
      listExchangeRate {
      symbol
      rate
      }
    }
`;

const CurrencyConverter = () => {
  const { loading, error, data } = useQuery(GET_currencyList);
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('');
  const [destinationCurrency, setDestinationCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Handle the convert button click
  const handleConvert = () => {
    if (!amount || !baseCurrency || !destinationCurrency) return;

    const baseRate = data?.listExchangeRate?.find((c) => c.symbol === baseCurrency);
    
    const destinationRate = data?.listExchangeRate?.find((c) => c.symbol === destinationCurrency);
    
    const result = (amount / baseRate.rate) * destinationRate.rate;
    setConvertedAmount(result.toFixed(2));
  };

  if (loading) return <p>Loading currency list...</p>;
  if (error) return <p>Error loading currency list: {error.message}</p>;

  return (
    <div className="main">
    <h2>Currency Converter</h2>
    <table className='table' >
      <tbody>
        {/* Row for Amount Input */}
        <tr>
          <td style={{ padding: '8px', textAlign: 'left' }}>Amount:</td>
          <td style={{ padding: '8px' }}>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
        </tr>
  
        {/* Row for Base Currency */}
        <tr>
          <td>Base Currency:</td>
          <td style={{ padding: '8px' }}>
            <select
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value)}
              style={{ width: '100%' }}
            >
              <option value="">Select Currency</option>
              {data.currencyList.map((currency) => (
                <option key={currency.symbol} value={currency.symbol}>
                  {currency.name} ({currency.symbol})
                </option>
              ))}
            </select>
          </td>
        </tr>
  
        {/* Row for Desired Currency */}
        <tr>
          <td >Desired Currency:</td>
          <td >
            <select
              id="destination-currency"
              value={destinationCurrency}
              onChange={(e) => setDestinationCurrency(e.target.value)}
              style={{ width: '100%' }}
            >
              <option value="">Select Currency</option>
              {data.currencyList.map((currency) => (
                <option key={currency.symbol} value={currency.symbol}>
                  {currency.name} ({currency.symbol})
                </option>
              ))}
            </select>
          </td>
        </tr>
  
        {/* Row for Convert Button */}
        <tr>
          <td>&nbsp;</td>
          <td>
            <button
              onClick={handleConvert}
              disabled={!amount || !baseCurrency || !destinationCurrency}
              style={{ padding: '8px 16px', cursor: 'pointer', width:'50%', backgroundColor:'lightgreen' }}
            >
              Convert
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  
    {/* Converted Amount */}
    {convertedAmount !== null && (
      <p style={{ marginTop: '16px', textAlign: 'center', fontWeight: 'bold' }}>
        Converted Amount: {convertedAmount} {destinationCurrency}
      </p>
    )}
  </div>
  
  );
};

export default CurrencyConverter;
