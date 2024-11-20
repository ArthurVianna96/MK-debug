import { Provider } from 'app/provider';
import { useFonts } from 'expo-font';
import 'react';
// import * as Location from 'expo-location';
import { UrlProvider } from 'app/contexts/UrlContext';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-get-random-values';
import { SolitoImageProvider } from 'solito/image';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [fontsLoaded, fontError] = useFonts({
		'proxima-nova-light': require('../../../packages/app/assets/fonts/proxima-nova-light.otf'),
		'proxima-nova-regular': require('../../../packages/app/assets/fonts/proxima-nova-regular.otf'),
		'proxima-nova-semibold': require('../../../packages/app/assets/fonts/proxima-nova-semibold.otf'),
		'proxima-nova-bold': require('../../../packages/app/assets/fonts/proxima-nova-bold.otf'),
	});

	useEffect(() => {
		if (fontsLoaded || fontError) SplashScreen.hideAsync();
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) return null;

	return (
		<Provider>
			<UrlProvider>
				<SolitoImageProvider>
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name="index" />
						<Stack.Screen name="mk-oauth" />
					</Stack>
				</SolitoImageProvider>
			</UrlProvider>
		</Provider>
	);
}
