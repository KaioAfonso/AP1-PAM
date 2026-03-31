import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Card } from 'react-native-paper';

function Tela3({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/fundo.jpg')}
      style={styles.background}
      resizeMode="cover">
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.titulo}>Currículo</Text>
        </View>

        <Text style={[styles.subTitulo, { margin: 25, marginTop: 25 }]}>
          Experiêcia Acadêmica
        </Text>

        <View style={styles.container}>
          <Card style={[styles.Bloco, { marginBottom: 30 }]}>
            <Text style={styles.subTitulo}>Intituições:</Text>

            <View style={styles.row}>
              <Image
                style={[
                  styles.icon,
                  { marginLeft: 15, marginTop: 10, marginRight: 15 },
                ]}
                source={require('../assets/condota.jpg')}
              />

              <Text
                style={[styles.paragraph, { marginTop: 15, marginLeft: 0 }]}>
                {'     Ensino fundamental: \n Maria Patrocina Condota '}
              </Text>
            </View>

            <View style={styles.row}>
              <Image
                style={[
                  styles.icon,
                  { marginLeft: 15, marginTop: 15, marginRight: 25 },
                ]}
                source={require('../assets/etec.jpg')}
              />

              <Text
                style={[styles.paragraph, { marginTop: 15, marginLeft: 0 }]}>
                {'Ensino médio/técnico: \n      Etec de itanhaém '}
              </Text>
            </View>

            <View style={styles.row}>
              <Image
                style={[
                  styles.icon,
                  {
                    marginLeft: 15,
                    
                    margin: 15,
                    marginRight: 25,
                  },
                ]}
                source={require('../assets/Duo.png')}
              />
              <Text
                style={[
                  styles.paragraph,
                  { marginTop: 15, marginLeft: 0, borderRadius: 0 },
                ]}>
                {'     Curso de idiomas: \n              Duolingo '}
              </Text>
            </View>

            
          </Card>
        </View>

        <View style={styles.container}>
          <Card style={[styles.Bloco, { marginBottom: 30 }]}>
            <Text style={styles.subTitulo}>Currículo Acadêmico:</Text>

            <Text style={{ marginLeft: 15, marginTop: 25 }}>
              <Text style={styles.paragraph}>
                -Ensino fundamental completo ✅
              </Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 25 }}>
              <Text style={styles.paragraph}>
                -Ensino médio (cursando) 2/3 anos ⏳
              </Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 25 }}>
              <Text style={styles.paragraph}>
                {
                  '-Curso de técnico em desenvolvimento de sistemas (cursando) ⏳'
                }
              </Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 25, marginBottom: 20 }}>
              <Text style={styles.paragraph}>
                -Inglês pré-intermediário. 🇺🇸
              </Text>
            </Text>
          </Card>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default Tela3;

const styles = StyleSheet.create({
  background: {
    flex: 1,

    backgroundColor: '#1b1b1b',
  },
  paragraph: {
    margin: 2,
    fontSize: 14,
    fontWeight: 'bold',
justifyContent: 'center',
    color: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  header: {
    backgroundColor: '#161616',

    paddingVertical: 1,
    width: '100%',
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 5,
  },
  titulo: {
    margin: 15,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  Bloco: {
    backgroundColor: '#161616',
    margin: 15,
    width: '80%',
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 5,
    padding: 15,
  },
  subTitulo: {
    margin: 10,
    marginTop: 10,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
 
  row: {
    flexDirection: 'row',
  },
  icon: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 10,
  },
});
