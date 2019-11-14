import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

import Colors from '../../constants/Colors';

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: props.image }} style={styles.image} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={Colors.primary}
                title='View Details'
                onPress={props.onViewDetail}
              />
              <Button
                color={Colors.primary}
                title='Add to Cart'
                onPress={props.onAddtoCart}
              />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    elevation: 6,
    shadowColor: '#111',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 300,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    padding: 10
  },
  title: {
    fontFamily: 'nunito-extrabold',
    fontSize: 18,
    marginVertical: 2
  },
  price: {
    fontFamily: 'nunito-bold',
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  }
});

export default ProductItem;
