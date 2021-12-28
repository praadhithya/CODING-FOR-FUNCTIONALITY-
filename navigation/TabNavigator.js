import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import addvendor from "../screens/addingScreen";
import cart from "../screens/cartScreen";
import vendor from "../screens/detailsScreen";
import history from "../screens/historyScreen";
import home from "../screens/homeScreen";
import order from "../screens/orderScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color,size }) => {
                    let iconName;
                    if (route.name === 'addvendor') {
                        iconName = focused
                            ? 'add-circle' 
                            : 'add-circle-outline';
                    } else if (route.name === 'cart') {
                        iconName = focused 
                            ? 'cart' 
                            : 'cart-outline';
                    }else if (route.name === 'vendor') {
                        iconName = focused 
                            ? 'create' 
                            : 'create-outline';
                    }else if (route.name === 'history') {
                        iconName = focused 
                            ? 'book'
                            : 'book-outline';
                    }else if (route.name === 'home') {
                        iconName = focused 
                            ? 'home' 
                            : 'home-outline';
                    }else if (route.name === 'order') {
                        iconName = focused 
                            ? 'lock-closed-sharp' 
                            : 'lock-closed-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="addvendor" component={addvendor} />
            <Tab.Screen name="cart" component={cart} />
            <Tab.Screen name="vendor" component={vendor} />
            <Tab.Screen name="history" component={history} />
            <Tab.Screen name="home" component={home} />
            <Tab.Screen name="order" component={order} />
            
        </Tab.Navigator>
    );
}

export default BottomTabNavigator