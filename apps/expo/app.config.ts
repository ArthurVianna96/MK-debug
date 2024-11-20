export default {
	expo: {
		name: 'SuperMoney',
		slug: 'supermoney-app',
		scheme: 'supermoney-app',
		version: '1.1.000',
		platforms: ['ios', 'android'],
		ios: {
			bundleIdentifier: 'com.supermoney.app',
		},
		plugins: [
			'expo-router',
			'expo-font',
			'expo-localization',
			[
				'expo-build-properties',
				{
					ios: {
						deploymentTarget: '14.0',
					},
					android: {
						minSdkVersion: 26,
					},
				},
			],
		],
		icon: './assets/images/icon.png',
		splash: {
			image: './assets/images/splash.png',
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './assets/images/adaptive-icon.png',
			},
			package: 'com.sm.supermoney.app',
		},
		owner: 'supermoney',
		runtimeVersion: '1.0.0',
	},
};
