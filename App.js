import {View} from 'react-native';
import React from 'react';
import CounterView from './Src/Screens/CounterView';
import CounterControler from './Src/Screens/CounterControler';
import {TextInput} from 'react-native-paper';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './Src/Redux/Store';

function App() {

  const data = useSelector((state)=>state);
  console.log(data, '00');

  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <CounterView />
      <CounterControler />

      <View style={{marginHorizontal: '20%'}}>
        <TextInput
          label="Enter Value"
          keyboardType='numeric'
          value={data.changeValue}
          onChangeText={text => dispatch({type: 'changeValue', payload: text})}
          style={{fontSize: 20, fontWeight: '700'}}
        />
      </View>
    </View>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
