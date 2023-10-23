//use google login
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signInWithGoogle } from '../../firebase';
import {
    faGoogle
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Login = () => {
    
    return (
        <div className="dashboard">
            <div>
                <FontAwesomeIcon icon={faGoogle} color="blue" size="6x"/>
                <br/>
                <br/>
            </div>
            <button onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </div>
    )
}

export default Login;