import React, {useContext, useState} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import { NewsContext } from '../API/Context';
import DiscoverScreen from '../screens/DiscoverScreen';
import NewsScreen from '../screens/NewsScreen';
import TopNavigation from './TopNavigation';
function InshortTabs() {
    const layout = useWindowDimensions();

  const {index,setIndex} = useContext(NewsContext);


    const [routes] = useState([
        {key: '1', title: 'Discover'},
        {key: '2', title: 'News'},


    ]);

    const renderScene = SceneMap({ 

        1: DiscoverScreen,
        2: NewsScreen,
    });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width}}
      renderTabBar = {() => <TopNavigation index = {index} setIndex={setIndex} />}
      />
      );
}

export default InshortTabs;
