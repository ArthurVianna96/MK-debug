import { useURL as useURLHook } from 'expo-linking';
import React, { createContext, useContext } from 'react';

const UrlContext = createContext<string | null>(null);

export const useURL = () => {
	return useContext(UrlContext);
};
export const UrlProvider = ({ children }: React.PropsWithChildren) => {
	const url = useURLHook();

	return <UrlContext.Provider value={url}>{children}</UrlContext.Provider>;
};
