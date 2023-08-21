import ImgLogo from './front-academy-logo.png';
import './Style.css';

function Logo() {
    return (
        <img className='logo' src={ImgLogo} alt="Logo Front Academy" />
    );
}

export default Logo;