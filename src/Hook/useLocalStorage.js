import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		try {
			return JSON.parse(
				localStorage.getItem(key) || String(defaultValue)
			);
		} catch (error) {
			return defaultValue;
		}
	}, [defaultValue]);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};

export default useLocalStorage;