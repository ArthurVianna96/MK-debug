import AlternativeHeader from 'app/components/alternativeHeader/AlternativeHeader';
import LinkAccountsMobileScreen from 'app/components/linkAccounts/MobileScreenWrapper';
import MobileScreenContainer from 'app/components/mobileScreenContainer/MobileScreenContainer';

export default function LinkedAccountsScreen() {
	return (
		<MobileScreenContainer pb={0}>
			<AlternativeHeader title="LINKED ACCOUNTS" />

			<LinkAccountsMobileScreen />
		</MobileScreenContainer>
	);
}
