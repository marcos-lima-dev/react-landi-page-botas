// src/components/Pagamentos/Pagamentos.jsx

import React from 'react';
import { useSpring, animated } from 'react-spring'; // Importando useSpring e animated do react-spring
import 'font-awesome/css/font-awesome.min.css'; // Certifique-se de que esta linha esteja presente

const Pagamentos = () => {
    // Configurando a animação
    const props = useSpring({
        to: { opacity: 1, transform: 'translateY(0)' }, // Estado final da animação
        from: { opacity: 0, transform: 'translateY(-20px)' }, // Estado inicial da animação
        config: { tension: 200, friction: 15 }, // Configurações da animação
    });

    return (
        <div className="w-full flex justify-center p-8 bg-gray-100"> {/* Container centralizado */}
            <div className="flex flex-col items-center w-full md:w-3/4">
                <animated.h2 style={props} className="text-5xl font-bold text-center mb-4"> {/* Aplicando a animação ao h2 */}
                    Calçados Perfeitos p/ EPI
                </animated.h2>
                <p className="text-l font-bold text-center mb-8">Formas de Pagamento</p>

                {/* Div centralizada para os boxes */}
                <div className="flex flex-wrap justify-center space-x-4">
                    {/* Box Dinheiro */}
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-2 w-40">
                        <i className="fa fa-money fa-3x mb-2" aria-hidden="true"></i>
                        <span className="text-center">Dinheiro</span>
                    </div>

                    {/* Box Pix */}
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-2 w-40">
                        <i className="fa fa-qrcode fa-3x mb-2" aria-hidden="true"></i>
                        <span className="text-center">Pix</span>
                    </div>

                    {/* Box Cartão de Crédito */}
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-2 w-40">
                        <i className="fa fa-credit-card fa-3x mb-2" aria-hidden="true"></i>
                        <span className="text-center">Cartão de Crédito (4x sem juros)</span>
                    </div>

                    {/* Box Apenas CNPJ */}
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-2 w-40">
                        <i className="fa fa-building fa-3x mb-2" aria-hidden="true"></i>
                        <span className="text-center">Apenas CNPJ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagamentos;