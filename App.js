import React, {Component} from 'react';
import RelogioImg from './images/relogio.png';
import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.timer=null;
    this.state ={
      n:0,
      botao:'Iniciar'
    };
    

    this.runTimer = this.runTimer.bind(this);
  }

  runTimer(){
    let state = this.state;

    this.timer = (this.timer != null) 
                ?
                  ()=>{
                    clearInterval(this.timer);
                    return this.timer = null
                  }
                :
                  ()=>{
                    this.timer = setInterval(()=>{
                      let state = this.state;
                      state.n +=0.1;
                      this.setState(s);
                    },100)
                  };


  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.imgArea}>
             <Image  source={RelogioImg} style={styles.imgRelogio}/>
             <Text style={styles.txtRelogio}>{this.state.n.toFixed(1)}</Text>

             <View style={styles.btnArea}>
                <TouchableOpacity  style={styles.btn} onPress={this.runTimer}>
                    <Text style={styles.btnLabel}>{this.state.botao}</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btn} onPress={()=>console.log('test')}>
                    <Text style={styles.btnLabel}>Limpar</Text>
                </TouchableOpacity>
             </View>  
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#370e54',
     
    },
    imgArea:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    imgRelogio:{
        alignItems:'center'      
    },
    btnArea:{
      
      flexDirection:'row',
      backgroundColor:'transparent',
      height:40,
      marginTop:120
    },
    btn:{
      backgroundColor:'#c08f29',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:10,
      marginRight:10,
    },
    btnLabel:{
      textAlign:'center',
      fontSize:18, 
      color:'white',
      fontWeight:'bold'     
    },
    txtRelogio:{
      color:'#d1b738',
      fontSize:70,
      fontWeight:'bold',
      marginTop:-145
    }
});
