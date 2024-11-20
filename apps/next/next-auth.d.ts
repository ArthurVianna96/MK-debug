import { SMUser } from 'app/types';
import 'next-auth';

declare module 'next-auth' {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: SMUser & DefaultSession['user'];
	}
}
