import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JLPTDetail from './JLPTDetail';
import JLPTSelector from './JLPTSelector';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SelectJLPT" component={JLPTSelector} />
        <Stack.Screen name="JLPTDetail" component={JLPTDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
