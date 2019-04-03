import {Button, Container, Content, Header, Text, Title} from 'native-base';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

class Counter extends Component {
  render() {
    
    var { increment, incrementIfOdd, incrementAsync, decrement, decrementAsync, counter } = this.props;
    return (
      <Container>
                <Header>
                    <Title>Counter</Title>
                </Header>

                <Content>

                    <View style={styles.container}>
                      <View style={styles.displayPanel}>
                        <Text style={styles.numberBlock}>{counter}</Text>
                        <Text style={styles.unitBlock}>/ times</Text>
                      </View>
                      
                      <Button block onPress={increment} style={styles.buttonMargin}> <Text>+</Text></Button>
                      <Button block success onPress={decrement} style={styles.buttonMargin}> <Text>-</Text></Button>
                       <Button block info onPress={incrementIfOdd} style={styles.buttonMargin}><Text>incrOdd</Text></Button>
                       <Button block warning onPress={() => incrementAsync()} style={styles.buttonMargin}><Text>incAsync</Text></Button>
                       <Button block danger onPress={() => decrementAsync()} style={styles.buttonMargin}><Text>decAsync</Text></Button>


                    </View>
                </Content>
            </Container>
    );
  }
}



const colors = {
  background: {
    bg: '#F5FCFF'
  },
  add: {
    font: '#F69',
    border: '#F69',
    bg: '#FFC1D6'
  },
  minus: {
    font: '#6495ED',
    border: '#6495ED',
    bg: '#D0DFF9'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.bg,
  },
  displayPanel: {
    marginVertical: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  controlPanel: {
    marginVertical: 15
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  numberBlock: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200,
  },
  unitBlock: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  textColorAdd: {
    color: colors.add.font,
  },
  textColorMinus: {
    color: colors.minus.font,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonAddSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.add.border,
    width: 80,
  },
  buttonMinusSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.minus.border,
    width: 80,
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.add.border,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonMinus: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.minus.border,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonMargin:{
    marginTop:10,
    marginLeft:50,
    marginRight:50
  }
});

export default Counter;
