
import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, Button } from 'react-native';

type Props = {};
export default class App extends Component <Props> {
  constructor (props){
    super(props)
    this.state = {
      text:"",
      itens:[
        {key:"0", desc:"Item 1", done:false},
        {key:"1", desc:"Item 2", done:false},
        {key:"2", desc:"Item 3", done:false},
     ]
    }
    this.inserirItem = this.inserirItem.bind(this)
  }
  renderItem(obj){
    return(
      <Text style={styles.cell}>{obj.item.desc}</Text>
    )
  }

  inserirItem(){
    let newItem = {
      key: this.state.itens.length.toString(),
      des: this.state.text,
      done:false,
    }
    let itens=this.state.itens;
    itens.push(newItem)
    this.setState({itens})

    let text=""
    this.setState({text})

  }
  render (){
    
  return (
      <View style={styles.container}>
        <FlatList style={styles.Lista} data={this.state.itens} renderItem={this.renderItem} extraData={this.state}/>
        <View style={styles.Lista.inputView}>
          <TextInput style={styles.input} onChangeText={(text)=>this.setState({text})} value={this.state.text}/>
          <Button onPress={this.inserirItem} title="Inserir"/>
        </View>
     </View>
   );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007181',
    justifyContent: 'center',
  },
  Lista:{
    marginTop: 30,
  },
  cell:{
    paddingBottom: 20,
    paddingTop : 20,
    fontSize : 18,
    marginBottom:2,
    backgroundColor:"#E4EBEE",
  },

  inputView:{
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent: 'space-between',

  },
  input:{
    backgroundColor:"white",
    borderColor:"#ccc",
    borderWidth:3,
    padding:20,
    margin:10,
    flex:2,
  },

}
);
