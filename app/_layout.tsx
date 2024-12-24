import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack initialRouteName="features/cart" screenOptions={{headerShown: false}}>
    <Stack.Screen name="features/Cart/cart"/>
    <Stack.Screen name="features/Welcome"/>
    <Stack.Screen name="features/scanner"/>
  </Stack>;
}
