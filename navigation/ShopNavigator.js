import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createTabNavigator } from 'react-navigation-tabs';
import { HeaderButton } from 'react-navigation-header-buttons';

import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTitleStyle: {
        fontFamily: 'nunito-extrabold'
      },
      headerBackTitleStyle: {
        fontFamily: 'nunito-bold'
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary
    }
  }
);

export default createAppContainer(ProductsNavigator);
