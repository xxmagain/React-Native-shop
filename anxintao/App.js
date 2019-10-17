import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from "./src/pages/home/Home";
import Products from "./src/pages/products/Products";
import Icon from './src/icon/IconFonts'
import ShopCar from "./src/pages/shopcar/ShopCar";
import UserCenter from "./src/pages/mine/UserCenter";

class TabBarItem extends React.Component {
    render() {
        return (
            <View style={{height:49,alignItems:'center',justifyContent:'center',marginTop:2}}>
                <Icon name={this.props.sourceImg} size={24} color={this.props.tintColor}/>
                <Text style={{textAlign:'center',color: this.props.tintColor,marginTop:4,marginBottom:2,fontSize:10}}>{this.props.name}</Text>
            </View>

        )
    }

}
const TabNavigator = createBottomTabNavigator(
    {
        home: {screen:Home,
            navigationOptions: {
            tabBarLabel: ({tintColor, focused}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    sourceImg={'shouye'}
                    name='首页'
                />
            ),
        },},
        products: {
            screen: Products,
            navigationOptions: {
                tabBarLabel: ({tintColor, focused}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        sourceImg={'icon'}
                        name='产品分类'
                    />
                ),
            },
        },
        shopCar: {
            screen: ShopCar,
            navigationOptions: {
                tabBarLabel: ({tintColor, focused}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        sourceImg={'shouye1'}
                        name='购物车'
                    />
                ),
            },
        },
        userCenter: {
            screen: UserCenter,
            navigationOptions: {
                tabBarLabel: ({tintColor, focused}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        sourceImg={'shouye2'}
                        name='我的'
                    />
                ),
            },
        }
    }
);

export default createAppContainer(TabNavigator);