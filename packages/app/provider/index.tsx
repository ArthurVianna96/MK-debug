import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from 'app/config/gluestack-ui.config';

export function Provider({ children }: { children: React.ReactNode }) {
	return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
}
