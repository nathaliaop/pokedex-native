import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Feed from "./Feed";
import Header from "../components/Header";
import Favorites from "./Favorites";

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator tabBar={props => <Header {...props}/>}>
      <Tab.Screen name="feed" component={Feed} />
      <Tab.Screen name="favorites" component={Favorites} />
    </Tab.Navigator>
  );
}