import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { fetchCryptocurrencyPrices } from './api';
import { Button } from 'react-native-paper';

const HomeScreen = () => {
  const [cryptocurrencyData, setCryptocurrencyData] = useState({});
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');

  const cryptoOptions = [
    'Bitcoin',
    'Ethereum',
    'Ripple',
  ];

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const data = await fetchCryptocurrencyPrices([selectedCrypto.toLowerCase()]);
        setCryptocurrencyData(data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchPrices();
  }, [selectedCrypto]);

  const handleDropdownSelect = (index, value) => {
    setSelectedCrypto(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Text style={{fontSize:20,fontWeight:'800'}}>Select a cryptocurrency:</Text>
        <ModalDropdown
          options={cryptoOptions}
          onSelect={handleDropdownSelect}
          defaultValue={selectedCrypto}
          textStyle={pickerSelectStyles.dropdownTextStyle} 
          style={pickerSelectStyles.inputIOS} 
          dropdownStyle={pickerSelectStyles.dropdownContainer} 
          defaultValueTextStyle={pickerSelectStyles.defaultDropdownTextStyle} 
          dropdownTextStyle={pickerSelectStyles.dropdownItemTextStyle} 
          />
      </View>
      {Object.keys(cryptocurrencyData).map((cryptoId) => (
        <View key={cryptoId} style={styles.cryptoDetails}>
          <Text style={{fontSize:18,fontWeight:'500'}}>Name: {cryptoId}</Text>
          <Text style={{fontSize:18,fontWeight:'500'}}>Price: ${cryptocurrencyData[cryptoId].usd}</Text>
          <Text style={{fontSize:18,fontWeight:'500'}}>Change (24h): {cryptocurrencyData[cryptoId].usd_24h_change}%</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'white'
  },
  dropdownContainer: {
    marginBottom: 16,
  },
  cryptoDetails: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#e3e4e6', 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3, 
    top:5
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#e3e4e6',
    borderRadius: 4,
    width: '100%', 
    top:5,
    backgroundColor:'#e3e4e6'
  },
  dropdownContainer: {
    width:'80%',
  },
  dropdownTextStyle: {
    color: 'black',
    fontSize:15, 
  },
  dropdownItemTextStyle: {
    color: 'black', 
    fontSize: 16,
    fontWeight: 'normal', 
    paddingVertical: 8,
    paddingHorizontal: 16, 
  },
  dropdownTextStyle: {
    color: 'black',
    fontSize: 16, 
    fontWeight: 'normal',
  },
});

export default HomeScreen;
