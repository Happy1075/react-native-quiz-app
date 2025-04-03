import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home.jsx";
import Question from "./components/Question.jsx";
import Score from "./components/Score.jsx";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Score" component={Score} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
