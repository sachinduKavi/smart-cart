import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack initialRouteName="features/cart" screenOptions={{headerShown: true}}/>;
}
