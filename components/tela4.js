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

function Tela4({ navigation }) {
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
          Competências Técnicas
        </Text>

        <View style={styles.container}>
          <Card style={[styles.Bloco, { marginBottom: 30 }]}>
            <Text style={styles.subTitulo}>Front-end:</Text>

            <View style={styles.row}>
              <Image
                style={[
                  styles.icon,
                  { marginLeft: 15, marginTop: 10, marginRight: 15 },
                ]}
                source={require('../assets/HTML5.png')}
              />

              <Text
                style={[styles.paragraph, { marginTop: 15, marginLeft: 17, borderWidth: 0, }]}>
                {'Liguagem de marcação: \n                 html 5'}
              </Text>
            </View>

            <View style={styles.row}>
              <Image
                style={[
                  styles.icon,
                  { marginLeft: 15, marginTop: 15, marginRight: 25, borderWidth: 0,  },
                ]}
                source={require('../assets/CSS.png')}
              />

              <Text
                style={[styles.paragraph, { marginTop: 15, marginLeft: 0 }]}>
                {'Linguagem de esstilização: \n                   CSS 3 '}
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
                    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 10,
                  },
                ]}
                source={require('../assets/figma.png')}
              />
              <Text
                style={[
                  styles.paragraph,
                  { marginTop: 15, marginLeft: 0, borderRadius: 0,  },
                ]}>
                {'   Design/Prototipação: \n                Figma '}
              </Text>
            </View>

            <View style={styles.row}>
              <Image
                style={[
                  styles.icon,
                  {
                    marginLeft: 15,
                    marginBottom: 15,
                    margin: 5,
                    marginRight: 25,
                     borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 10,
                  },
                ]}
                source={require('../assets/Bootstrap.png')}
              />
              <Text
                style={[
                  styles.paragraph,
                  { marginTop: 15, marginLeft: 0, borderRadius: 0 },
                ]}>
                {'   Framework de estilização \n            web:Bootstrap '}
              </Text>
            </View>

            <View style={styles.row}>
              <Image
                style={[
                  styles.icon,
                  {
                    marginLeft: 15,
                    
                    margin: 5,
                    marginRight: 25,
                     borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 10,
                  },
                ]}
                source={require('../assets/react.png')}
              />
              <Text
                style={[
                  styles.paragraph,
                  { marginTop: 15, marginLeft: 0, borderRadius: 0 },
                ]}>
                {'   Desenvolvimento mobile: \n             React Native '}
              </Text>
            </View>


          </Card>
        </View>

        <View style={styles.container}>
          <Card style={[styles.Bloco, { marginBottom: 30 }]}>
            <Text style={styles.subTitulo}>Back-end:</Text>

            <View style={styles.row}>
              <Image
                style={[
                  styles.icon,
                  { marginLeft: 15, marginTop: 10, marginRight: 15,  height: 55,
    width: 50, },
                ]}
                source={require('../assets/Cshp.png')}
              />

              <Text
                style={[styles.paragraph, { marginTop: 15, marginLeft: 0, borderWidth: 0, }]}>
                {'Desenvolvimento de sistemas: \n                       C#'}
              </Text>
            </View>

            <View style={styles.row}>
              <Image
                style={[
                  styles.icon,
                  { marginLeft: 2, marginTop: 15, marginRight: 25, borderWidth: 0,  height: 40,
    width: 80,  },
                ]}
                source={require('../assets/php.png')}
              />

              <Text
                style={[styles.paragraph, { marginTop: 15, marginLeft: 0 }]}>
                {'   Programação Web: \n                 PHP '}
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
                    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 10,
                  },
                ]}
                source={require('../assets/javas.png')}
              />
              <Text
                style={[
                  styles.paragraph,
                  { marginTop: 15, marginLeft: 0, borderRadius: 0,  },
                ]}>
                {'      Programação Web: \n            JavasScript'}
              </Text>
            </View>

            <View style={styles.row}>
              <Image
                style={[
                  styles.icon,
                  {
                    marginLeft: 15,
                    marginBottom: 15,
                    margin: 5,
                    marginRight: 25,

                  },
                ]}
                source={require('../assets/dados.png')}
              />
              <Text
                style={[
                  styles.paragraph,
                  { marginTop: 15, marginLeft: 0, borderRadius: 0 },
                ]}>
                {'       Banco de dados \n                MySql '}
              </Text>
            </View>

         

          </Card>
        </View>

      </ScrollView>
    </ImageBackground>
  );
}

export default Tela4;

const styles = StyleSheet.create({
  background: {
    flex: 1,

    backgroundColor: '#1b1b1b',
  },
  paragraph: {
    margin: 2,
    fontSize: 14,
    fontWeight: 'bold',

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
  Negrito: {
    margin: 2,
    marginTop: 0,
    fontSize: 16,
    fontWeight: 'bold',

    color: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    height: 50,
    width: 50,
    
  },
});
