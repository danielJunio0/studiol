import React from 'react';
import IllustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home(){

    return(
        <div>
            <aside>
                <img src={IllustrationImg} alt="Ilustração simbolizando" />
                <strong>teste</strong>
                <p>Fique por dentro de todas informações do Studio L</p>
            </aside>

            <main>
                <div >
                    <img src={logoImg} alt="Logo Imagem" />
                    <button>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Entre com sua conta Google
                    </button>
                    <div>Ou entre na sua conta do Studio L</div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Digite seu E-mail"
                        />
                        <input 
                        type="password"
                        placeholder="Digite sua Senha"
                        />
                        <button type="submit">
                            Entrar
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}