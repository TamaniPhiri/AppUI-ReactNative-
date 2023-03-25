import Authstack from './Authstack'
import UserStack from './UserStack';
import {useAuthentication} from '../Hooks/useAuthentication'

const RootNavigator = () => {
    

    const{user}=useAuthentication();

  return user ? <UserStack/>:<Authstack/>
}

export default RootNavigator