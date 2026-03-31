import { StyleSheet, View, Image, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Tela1 from './components/tela1';
import Tela2 from './components/tela2';
import Tela3 from './components/tela3';
import Tela4 from './components/tela4';

const Stack = createNativeStackNavigator();

function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      <View style={styles.row}>

        <Pressable onPress={() => navigation.navigate('Tela1')}>
          <Image style={styles.icon} source={require('./assets/PersonIcon.png')} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Tela2')}>
          <Image style={styles.icon} source={require('./assets/maleta.png')} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Tela3')}>
          <Image style={styles.icon} source={require('./assets/livro.png')} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Tela4')}>
          <Image style={styles.icon} source={require('./assets/monitor.png')} />
        </Pressable>

      </View>
    </View>
  );
}

function Layout({ navigation, children }) {
  return (
    <View style={{ flex: 1 }}>

      
      <View style={{ flex: 1 }}>
        {children}
      </View>

  
      <Footer navigation={navigation} />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Tela1">
          {(props) => (
            <Layout navigation={props.navigation}>
              <Tela1 {...props} />
            </Layout>
          )}
        </Stack.Screen>

        <Stack.Screen name="Tela2">
          {(props) => (
            <Layout navigation={props.navigation}>
              <Tela2 {...props} />
            </Layout>
          )}
        </Stack.Screen>

        <Stack.Screen name="Tela3">
          {(props) => (
            <Layout navigation={props.navigation}>
              <Tela3 {...props} />
            </Layout>
          )}
        </Stack.Screen>

        <Stack.Screen name="Tela4">
          {(props) => (
            <Layout navigation={props.navigation}>
              <Tela4 {...props} />
            </Layout>
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#161616',
    paddingVertical: 10,
    borderTopWidth: 2,
    borderColor: '#ffffff',
    marginBottom: 40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    height: 30,
    width: 30,
  },
});