import { useSelector } from 'react-redux';

const useRole = () => {
	const { user } = useSelector((state) => state.auth);
	return user?.role || 'Guest';
};

export default useRole;
