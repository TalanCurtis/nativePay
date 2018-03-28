
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';

// react native payments needs: global.PaymentRequest = require('react-native-payments').PaymentRequest;
global.PaymentRequest = require('react-native-payments').PaymentRequest;

type Props = {};
export default class App extends Component<Props> {

  test(){
    console.warn('Test pushed')
  }
  handlePay(){
    console.warn('handle press')

    const METHOD_DATA = [{
      supportedMethods: ['android-pay'],
      data: {
        supportedNetworks: ['visa', 'mastercard', 'amex'],
        currencyCode: 'USD',
        environment: 'TEST', // defaults to production
        paymentMethodTokenizationParameters: {
          tokenizationType: 'NETWORK_TOKEN',
          parameters: {
            publicKey: 'your-pubic-key'
          }
        }
      }
    }];

    const DETAILS = {
      id: 'basic-example',
      displayItems: [
        {
          label: 'Movie Ticket',
          amount: { currency: 'USD', value: '15.00' }
        }
      ],
      total: {
        label: 'Merchant Name',
        amount: { currency: 'USD', value: '15.00' }
      }
    };

    const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS);

    paymentRequest.show().then(paymentResponse => paymentResponse.complete('success'));

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button title='Pay Me' onPress={()=>this.handlePay()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
