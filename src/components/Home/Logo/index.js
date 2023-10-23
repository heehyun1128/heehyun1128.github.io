import './index.scss'
import Background from '../../../assets/images/bgc.jpg'

const Logo = () =>{
    return (
        <div className="logo-container">
            <img className='bgc' src={Background} alt='logo' />

        </div>
    )
}

export default Logo