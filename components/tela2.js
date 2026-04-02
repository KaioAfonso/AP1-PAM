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

function Tela2({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/fundo.jpg')}
      style={styles.background}
      resizeMode="cover">
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.titulo}>Currículo</Text>
        </View>

        <Text style={[styles.subTitulo, {margin:25, marginTop: 25}]}>Experiência profissional</Text>

        <View style={styles.container}>
          <Card style={[styles.Bloco,{marginBottom: 30}]}>
            <Text style={styles.subTitulo}>Experiêcia:</Text>

            <Text style={{ marginLeft: 15, marginTop: 15 }}>
              <Text style={styles.paragraph}>
                -Moderador das lives do Calixto (renomadado streamer da twitch)
              </Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 15 }}>
              <Text style={styles.paragraph}>
                -Estagiário do Parque Amazônia Paulista
              </Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 25 }}>
              <Text style={styles.paragraph}>
                -Desenvolvimento de apps em projetos acadêmicos
              </Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 25 }}>
              <Text style={styles.paragraph}>
                -Prototipação e design de sites e aplicativos
              </Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 25 }}>
              <Text style={styles.paragraph}>
                -Editor de videos para a internet
              </Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 25, marginBottom: 15 }}>
              <Text style={styles.paragraph}>
                -Freelancer em projetos de programação e design
              </Text>
            </Text>
          </Card>
        </View>
        <View style={styles.container}>
          <Card style={[styles.Bloco,{marginBottom: 50}]}>
            <Text style={styles.subTitulo}>Empresas em que trabalhei:</Text>

           <View style={styles.row}>
              <Image
                 style={[
                  styles.icon,
                  { marginLeft: 15, marginTop: 10, marginRight: 15 },
                ]}
                source={require('../assets/itaLogo.png')}
              />

            <Text style={[styles.paragraph, {marginTop:15, marginLeft: 0}]}>
                 {'"Esse menino entende de \n planta viu "'}
              </Text>
             </View>


<View style={styles.row}>
                <Image
                style={[
                  styles.icon,
                  { marginLeft: 15, marginTop: 10, marginRight: 25 },
                ]}
                source={require('../assets/calixto.jpg')}
              />

            <Text style={[styles.paragraph, {marginTop:25, marginLeft: 0}]}>
                 "Meu melhor moderador"
              </Text>
             </View>
            
            <View style={styles.row}>
                 <Image
                style={[
                  styles.icon,
                  {
                    
                    marginLeft: 15,
                    marginBottom: 15,
                    marginTop: 10,
                    marginRight: 25
                  },
                ]}
                source={require('../assets/kfnStudio.jpg')}
              />
            <Text style={[styles.paragraph, {marginTop:25, marginLeft: 0}]}>
                 "Um ótimo designer"
              </Text>
             </View>
             
             
            
          </Card>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default Tela2;

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
  
  row: {
    flexDirection: 'row',

   
  },
  icon: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: '#ffffff',
      borderRadius: 10
  },
});
