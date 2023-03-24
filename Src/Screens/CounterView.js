import { Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const CounterView = () => {

 const data = useSelector((state)=>state);
 console.log(data);

  return (
    <View style={{backgroundColor: '#FFFFFF', alignItems: 'center', marginTop: '5%'}}>
      <Text style={{fontSize: 50, letterSpacing: 1, fontWeight: '700', color: '#000000'}}>{data.count}</Text>
    </View>
  )
}

export default CounterView;
