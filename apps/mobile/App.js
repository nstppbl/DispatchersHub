import * as React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [enabled, setEnabled] = React.useState(false);
  const [coords, setCoords] = React.useState(null);

  React.useEffect(() => {
    let sub;
    (async () => {
      if (enabled) {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;
        sub = await Location.watchPositionAsync({ accuracy: 3, timeInterval: 5000, distanceInterval: 10 }, (loc) => {
          setCoords(loc.coords);
          // TODO: send to API
        });
      }
    })();
    return () => { sub && sub.remove(); }
  }, [enabled]);

  return (
    <SafeAreaView>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Driver App (Demo)</Text>
        <Text style={{ marginTop: 8 }}>GPS: {enabled ? 'ON' : 'OFF'}</Text>
        <Button title={enabled ? 'Stop GPS' : 'Start GPS'} onPress={() => setEnabled(!enabled)} />
        <Text style={{ marginTop: 12 }}>
          {coords ? `Lat: ${coords.latitude.toFixed(5)}, Lon: ${coords.longitude.toFixed(5)}` : 'No coords yet'}
        </Text>
      </View>
    </SafeAreaView>
  );
}
