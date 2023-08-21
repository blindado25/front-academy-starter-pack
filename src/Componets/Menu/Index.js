import './Style.css';
import Logo from "../Logo/Index";
import Botao from '../Button/Index';

function Menu() {
    return (
        <div className='menu-contem'>
            <div className='menu'>

                <div className='esquerda'>
                    <a href="https://www.frontacademy.com.br/" alt='Link Front Academi'>
                        <Logo />
                    </a>
                </div>

                <div className='centro'>
                    <Botao className='botao-contem'> StarterPack </Botao>
                    <Botao className='botao-contem'> Evolution </Botao>
                    <Botao className='botao-contem'> Specialist</Botao>
                </div>

                <div className='direita'>
                    <a href="/">
                        <Botao backgroundColor="transparent"
                            padding="13px 65px"
                        >
                            Entrar
                        </Botao>
                    </a>
                    <a href="/">
                        <Botao backgroundColor="#0289ea"
                            borderRadius={8}
                            padding="13px 65px"
                        >
                            Começar
                        </Botao>
                    </a>
                </div>

            </div>
        </div >
    );
}

export default Menu;

