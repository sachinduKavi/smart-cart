import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack initialRouteName="features/cart" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Cart/cart"/>
    <Stack.Screen name="scanner/QRCodeScanner"/>
  </Stack>;
}
