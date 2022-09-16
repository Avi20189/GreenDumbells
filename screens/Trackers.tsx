import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen(props) {
  console.log('props in tabTwo: ', props);
  
  return (
    <View style={styles.container}>

      <Text>Weight Tracker</Text>
      <Text>calorie Tracker</Text>
      <Text>water Tracker</Text>
      <Text>Sleep Tracker</Text>
      <Text>Step Tracker</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
