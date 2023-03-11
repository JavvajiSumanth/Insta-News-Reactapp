
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import Context, { NewsContext } from './API/Context';
import InshortTabs from './components/InshortTabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } 
         from '@react-navigation/drawer';
import { NavigationContainer } 
         from '@react-navigation/native';
         import 'react-native-reanimated';
import {firebase} from './config';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import {Stack} from "@react-navigation/stack";



const Stack = createStackNavigator();

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options = {{headerTitle: () => <Header name="Insta News" />,
        headerStyle: {
          backgroundColor: '#fff',
          height: 100,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }} />
          <Stack.Screen name="SignUp" component={SignUp} options = {{headerTitle: () => <Header name="Dashboard" />,
        headerStyle: {
          backgroundColor: '#fff',
          height: 100,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  }   

  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} options = {{headerTitle: () => <Header name="Insta News" />,
        headerStyle: {
          backgroundColor: '#fff',
          height: 100,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }} />
    </Stack.Navigator>
    
}

export default () => {
  return (
    <NavigationContainer></NavigationContainer>
      <App />
    </NavigationContainer>
  );
}









// import DiscoverScreen from './screens/DiscoverScreen';

//          function HomeScreen() {
//           return (
//             <View style={{ flex: 1, alignItems: 'center', 
//                            justifyContent: 'center' }}>
//                 <Text>Home page</Text>
//             </View>
//           );
//         }
          
//         function NotificationsScreen() {
//           return (
//             <View style={{ flex: 1, alignItems: 'center', 
//                            justifyContent: 'center' }}>
//               <Text>Notifications Page</Text>
//             </View>
//           );
//         }
          
//         function AboutScreen() {
//           return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//               {/* add assets/icon.png and write a paragraph about instanews */}
//               <Image source={require('./assets/icon.png')} 
//                       style={{width: 100, height: 100}} />
//               <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//                 InstaNews - News in a flash 
//               </Text>
//               <Text style={{fontSize: 15, fontWeight: 'bold'}}>
//                 Version 1.0.0
//               </Text>
//               <Text style={{fontSize: 15, fontWeight: 'bold'}}>
//                 Developed by: Group 13 (CSE 5324)
//               </Text>
//             </View>
//           );
//         }
//         const Drawer = createDrawerNavigator();

//         function ProfileScreen() {
//           return (
//             <View style={{ flex: 1, alignItems: 'center', 
//                            justifyContent: 'center' }}>
//               <Text>Profile Page</Text>
//             </View>
//           );
//         }


//  function App() {

//   const {darkTheme} = useContext(NewsContext);
//   return (
    
//     // <SafeAreaView style={{...styles.container, backgroundColor:darkTheme ? "#282C35" : 'white'} }>
//     // <View style={{...styles.container, backgroundColor:darkTheme ? "#282C35" : 'white'}}>
//     //   <InshortTabs />
//     // </View>
//     // </SafeAreaView> 
//   <NavigationContainer>
//   <Drawer.Navigator initialRouteName="Insta News">
//     <Drawer.Screen name="Insta News" component={InshortTabs} />
//     <Drawer.Screen name="Discover" component={DiscoverScreen} />
//     <Drawer.Screen name="Profile" component={ProfileScreen} />
//     <Drawer.Screen name="Notifications" 
//                    component={NotificationsScreen} />
//     <Drawer.Screen name="About" component={AboutScreen} />
//   </Drawer.Navigator>
// </NavigationContainer>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
// });

// export default () =>{
//   return (<Context>
//     <App />
//   </Context>)
// }
