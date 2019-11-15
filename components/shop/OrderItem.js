import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import CartItem from './CartItem';
import Colors from '../../constants/Colors';

const OrderItem = props => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => {
          setShowDetails(prevState => !prevState);
        }}
      ></Button>
      {showDetails && (
        <View style={styles.detailItems}>
          {props.items.map(cartItem => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    elevation: 6,
    shadowColor: '#111',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 20,
    padding: 10,
    alignItems: 'center'
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15
  },
  totalAmount: {
    fontFamily: 'nunito-extrabold',
    fontSize: 16
  },
  date: {
    fontSize: 16,
    fontFamily: 'nunito-bold',
    color: '#888'
  },
  detailItems: {
    width: '100%'
  }
});

export default OrderItem;
