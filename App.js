import { ScrollView, Text, View, FlatList, TouchableOpacity, Linking, Button, TextInput } from 'react-native';
import styles from "./style";
import Icones from "./icons";
import { useState, useCallback } from 'react';
import Color from './textred';

export default function App() {

  const [cha, setCha] = useState([
    { nome: 'Chá de Boldo', descricao: "O Chá de boldo, preparado com as folhas secas do boldo do Chile ou folhas frescas boldo brasileiro, é rico em boldina, ácido rosmarínico e forscolina, com propriedades desintoxicantes, que ajudam a limpar o fígado e aliviar a dor de cabeça, especialmente causada por má digestão ou ressaca. Além disso, o chá de boldo tem um efeito calmante e relaxante, sendo uma boa opção de remédio caseiro para dor de cabeça. ", preparo: "Ingredientes: \n \n1 xícara de água; \n1 colher de chá de folhas frescas de boldo picadas.", key: 1 },

    { nome: 'Chá de Gengibre', descricao: "O Chá de gengibre contém gingerol, chogaol e zingerona, que são substâncias com propriedades anti-inflamatórias e antioxidantes, que ajudam a diminuir a inflamação que pode causar dor, sendo ótimo para aliviar a dor de cabeça. \nAlém disso, esse chá tem propriedades antieméticas, que podem ajudar a aliviar as náuseas e os vômitos que podem surgir quando se tem dor de cabeça forte ou enxaqueca.", preparo: "Ingredientes: \n \n1 cm da raiz de gengibre cortada em rodela ou ralada; \n1 litro de água fervente.", key: 2 },

    { nome: 'Chá de Oregano', descricao: "O Chá de orégano tem propriedades calmantes e anti-inflamatórias devido à presença do carvacrol na sua composição, composto bioativo que ajuda a aliviar a dor de cabeça.", preparo: "Ingredientes: \n \n1 colher (de sopa) de folhas ou flores de orégano fresco ou seco;\n 1 xícara de água fervente.", key: 3 },

    { nome: 'Chá de Hortelã-pimenta', descricao: 'O Chá de hortelã-pimenta possui propriedades antissépticas, calmantes e analgésicas, ajudando a aliviar sintomas de problemas gastrointestinais, como dor de barriga, náuseas e vômitos.', preparo: 'Ingredientes: \n\n1 xícara de água; \n1 colher se sopa de hortelã-pimenta cortada.', key: 4 },

    { nome: 'Chá de Maracujá com Maçã e Canela', descricao: 'O Chá de Maracujá reduz os sintomas da depressão e ansiedade, auxilia no tratamento da insônia, diminui dores de cabeça e dores menstruais, regula a pressão arterial, previne a diabetes, melhora o funcionamento do sistema digestivo, previne o envelhecimento celular e auxilia no emagrecimento. Rico em Vitamina A e C, e possui ação antioxidante, calmante, sedativa, tônica, refrescante, diurética e analgésica', preparo: 'Ingredientes: \n\n1L de água; \n10 colheres de açúcar; \n5 cravos da Índia; \n2 paus de canela; \nSemente e polpa de um maracujá; \n1 maçã cortada em pedaços', key: 5 },

    { nome: 'Chá de Limão', descricao: 'O Chá de limão é uma bebida deliciosa que pode ser consumida quente ou gelada! Tome um chá de limão quente com mel para aliviar dores de garganta ou refresque-se com um copo da bebida gelada em um dia abafado de verão. Depois de aprender o básico, você pode fazer receitas personalizadas e combinações variadas com frutas frescas, caldas ou até o mesmo um licor.', preparo: 'Ingredientes: \n\n1 colher de sopa de suco de limão; \n2 colheres de sopa de mel; \n1 xícara de água quente; \n1 saquinho de chá preto.', key: 6 },

  ])

  const [benefi,setBenefi] = useState([
    
    { nome: 'Chá branco combate ao envelhecimento', key: 1},
    { nome: 'Chá verde acelera o metabolismo', key: 2},
    { nome: 'Chá mate ajuda na diabetes', key: 3},
    { nome: 'Chá de erva-cidreira é bom para o estresse', key: 4},
    { nome: 'Chã de hortelã reduz o inchaço', key: 5},
  ])

  function linkExternal() {
    Linking.openURL('https://revistagalileu.globo.com/Ciencia/Saude/noticia/2018/01/10-beneficios-do-cha-para-sua-vida.html');
  }

  const [nome, setNome] = useState();

  const linkExt = useCallback(() => {
    Linking.openURL("https://livasaude.com.br/sera-que-tomar-muito-remedio-faz-mal-descubra/#:~:text=Perda%20do%20efeito%20dos%20f%C3%A1rmacos&text=Al%C3%A9m%20de%20tomar%20o%20medicamento,que%20os%20seus%20efeitos%20diminuam.")
  }, [])

  return (

    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Text}>Seja Bem Vindo(a) {nome}</Text>

        <View style={styles.TextIn}>
          <Text style={styles.Cha2}>
            Qual o objetivo do app ?
            {'\n'}
            {'\n'}
            Os chás são poderosas fontes de nutrientes para a saúde, isso grande parte das pessoas sabe. Mas, dentre os inúmeros tipos, versões sabores e combinações dessa bebida, quais são os seus principais benefícios para o bom funcionamento do nosso corpo? Sempre associados à paz, equilíbrio e relaxamento mental, o consumo regular dessas iguarias também é ótima alternativa para manter o organismo ativo e a pleno vapor.
            {'\n'}
            Seja bebido quente ou frio, o consumo de chás traz vantagens incríveis para o corpo. Feitos à base de ingredientes naturais, como plantas, ervas e flores comestíveis, além de frutas e especiarias, essas bebidas são fontes de agentes antioxidantes poderosos, que protegem muito o organismo, prevenindo diversas doenças e enfermidades.
            {'\n'}
            Até porque temos que ter a noção que tudo demais é veneno nada é diferente do seu organismo, você pode tomar muito medicamento e aliviar sua dor mas em casos mais extremos você pode tomar e não ter mais o enfeito que ele deveria.
            {'\n'}
            Alguns beneficios do consumo de chá:
            {'\n'} 

            {
            benefi.map(
            (item) => {
                return (
                  <Text>{item.nome}{'\n'}</Text>
                  )
                }  
              )
            }

          </Text>

          <TouchableOpacity onPress={linkExt}>
            <Color textColor='#FF4F4B' text='Clique aqui para saber a noticia dos malefícios de tomar muito remedio' />
          </TouchableOpacity>
        </View>

        <Text style={styles.Text1}>Digite seu nome para sua indentificação no nosso App </Text>

        <TextInput
          style={styles.input}
          value={nome}
          placeholder='Digite seu nome aqui'
          onChangeText={text => setNome(text)}
        />

        <View>
          <Text style={styles.Text1}>Alguns tipos de chá para você {nome}</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.caixadetexto}>
          <Icones color='white' textColor="black" text='Dor de cabeça' />
          <Icones color='#F5EC53' textColor="black" text='Gripe' />
          <Icones color='#F587EE' textColor="black" text='Má digestão' />
          <Icones color='#68EBE7' textColor="black" text='Náuseas' />
          <Icones color='#FF5D57' textColor="black" text='Vômitos' />
          <Icones color='#FFA858' textColor="black" text='Dores de Garganta' />
          <Icones color='#93EB83' textColor="black" text='Pressão Arterial' />
        </ScrollView>



        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.key}
          data={cha}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.Cha}> {item.nome}</Text>
              <Text style={styles.Cha1}> {item.descricao}</Text>
              <Text style={styles.Cha1}> {item.preparo}</Text>
            </View>
          )
          }
        />
        <View style={styles.final}>
          <Button
            onPress={linkExternal}
            title='CLIQUE AQUI PARA SABER MAIS' />
        </View>
      </ScrollView>
    </View>
  );
}

