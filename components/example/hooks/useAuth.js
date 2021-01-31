import {
    useContext,
    createContext,
} from 'react';
import useAuthProvider from './useAuthProvider';

const authContext = createContext({ user: {} });
const { Provider } = authContext;
function AuthProvider(props){
    const auth = useAuthProvider();
    return <Provider value={auth}>{props.children}</Provider>;
}
const useAuth= () => {
    return useContext(authContext);
};

export {
    AuthProvider,
    useAuth,
};
