
import { Redirect } from "expo-router";
import { useUnstableNativeVariable } from 'nativewind'

export default function Index() {
  return <Redirect href="/features/Welcome"/>;
}
