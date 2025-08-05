import { View, Text,} from 'react-native';

export default function HomeScreen(props: any) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Home</Text>
      <Text style={{ fontSize: 16, marginBottom: 32 }}>Welcome, {props.userName}!</Text>
    </View>
  );
}
