import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import BillingScreen from "./screens/BillingScreen";
import ProfileScreen from "./screens/ProfileScreen";

import InvitationsScreen from "./screens/InvitationsScreen";
import NewInvitationScreen from "./screens/NewInvitationScreen";
import PremiumUpgradeScreen from "./screens/PremiumUpgradeScreen copy";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Billing" component={BillingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="PremiumUpgrade" component={PremiumUpgradeScreen} />
        <Stack.Screen name="Invitations" component={InvitationsScreen} />
        <Stack.Screen name="NewInvitation" component={NewInvitationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
