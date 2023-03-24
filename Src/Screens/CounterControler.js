import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';


const CounterControler = () => {

  const dispatch = useDispatch();

  const Increment = () => {
    dispatch({type: 'increment'})
  };

  const Decrement = () => {
    dispatch({type: 'decrement'})
  };

  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginHorizontal: '15%',
        justifyContent: 'space-between',
        marginVertical: '10%',
      }}>
      <TouchableOpacity
        onPress={()=>Decrement()}
        activeOpacity={0.8}
        style={{backgroundColor: 'red', borderRadius: 3}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#FFFFFF',
            paddingVertical: 8,
            paddingHorizontal: 10,
            letterSpacing: 1,
          }}>
          Decrement
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>Increment()}
        activeOpacity={0.8}
        style={{backgroundColor: 'green', borderRadius: 3}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#FFFFFF',
            paddingVertical: 8,
            paddingHorizontal: 10,
            letterSpacing: 1,
          }}>
          Increment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterControler;
