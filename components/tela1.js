import {
  Linking,
   Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';



import { Card } from 'react-native-paper';

function Tela1({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/fundo.jpg')}
      style={styles.background}
      resizeMode="cover">
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.titulo}>Currículo</Text>
        </View>

        <View style={styles.container}>
          <Image
            style={[styles.logo, { borderRadius: 15 }]}
            source={require('../assets/perfil.jpg')}
          />
        </View>

        <View style={styles.container}>
          <Card style={styles.Bloco}>
            <Text style={styles.subTitulo}>Dados Pessoais:</Text>
       


            <Text style={{ marginLeft: 15, marginTop: 15 }}>
              <Text style={styles.Negrito}>Nome: </Text>
              <Text style={styles.paragraph}>Kaio Afonso Novais</Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 15 }}>
              <Text style={styles.Negrito}>Idade: </Text>
              <Text style={styles.paragraph}>16 anos</Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 15 }}>
              <Text style={styles.Negrito}>Cidade/Estado: </Text>
              <Text style={styles.paragraph}>Itanahém-SP</Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 15 }}>
              <Text style={styles.Negrito}>telefone: </Text>
              <Text style={styles.paragraph}>(13) 99706-9128</Text>
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 15, marginBottom: 15 }}>
              <Text style={styles.Negrito}>Email: </Text>
              <Text style={styles.paragraph}>kaionovais27@gmail.com</Text>
            </Text>
         
         
 </Card>
  </View>
        <View style={styles.container}>
          <Card style={styles.Bloco}>
            <Text style={styles.subTitulo}>Contato:</Text>

            <View style={styles.row}>
            <Pressable
            onPress={() => Linking.openURL('https://github.com/KaioAfonso')}>
              <Image
                style={[styles.icon, { borderRadius: 15, marginTop: 5 }]}
                source={require('../assets/github.png')}
              />
</Pressable>

<Pressable
            onPress={() => Linking.openURL('https://www.linkedin.com/in/kaio-afonso-187b7b398/')}>
               <Image
                style={[styles.icon, { borderRadius: 15, marginLeft: 15, marginTop: 5 }]}
                source={require('../assets/LinkedIn.png')}
              />
</Pressable>


<Pressable
            onPress={() => Linking.openURL('https://w.app/6y73a1')}>
               <Image
                style={[styles.icon, { borderRadius: 15, marginLeft: 15, marginTop: 5 }]}
                source={require('../assets/zap.png')}
              />
</Pressable>

<Pressable
            onPress={() => Linking.openURL('mailto:kaionovais27@gmail.com?cc=kaionovais27%40gmail.com&bcc=kaionovais27%40gmail.com&subject=Mandar%20email%20para%20Kaio%20Afonso')}>
               <Image
                style={[styles.icon, { borderRadius: 15, marginLeft: 15, marginBottom: 15, marginTop: 5 }]}
                source={require('../assets/gmal.png')}
              />
</Pressable>
             </View>
          </Card>
         
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default Tela1;


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
 
  logo: {
    height: 128,
    width: 128,
    margin: 20,
    borderWidth: 2,
    borderColor: '#ffffff',
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
   
    justifyContent: 'center',
  },
  icon: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
});
