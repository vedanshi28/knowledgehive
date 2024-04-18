import toast from 'react-hot-toast';
//import 'react-hot-toast/style.css';
import { useCallback } from "react";

const useShowToast = () => {

	// useCallback is used to prevent infinite loop, by  caching the function
	const showToast = useCallback(
		(title, desc) => {
			toast({
				title: title,
				desc: desc
			});
		},
		[toast]
	);

	return showToast;
};

export default useShowToast;