// src/components/Motivos/Motivos.jsx

import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Certifique-se de que esta linha esteja presente

const Motivos = () => {
    return (
        <div className="w-full flex justify-center p-8 bg-[#414833] text-white"> {/* Container centralizado */}
            <div className="flex flex-col items-center w-full md:w-3/4">
                <h2 className="text-5xl font-bold text-center mb-4">
                    Porque escolher a Megabor?
                </h2>
                <p className="text-lg text-center mb-8">Confira <span className='bg-white text-[#414833] font-bold'>04 motivos</span> para escolher a Megabor.</p>

                {/* Div centralizada para os boxes */}
                <div className="flex flex-wrap justify-center space-x-4">
                    {/* Box Frota própria */}
                    <div className="flex flex-col items-center bg-transparent border-4 border-white shadow-md rounded-lg p-4 m-2 w-40">
                        <i className="fa fa-truck fa-3x mb-2" aria-hidden="true"></i>
                        <h3 className="text-center font-bold">Frota própria</h3>
                        <p className="text-center text-sm mt-1">Para garantir uma entrega rápida e segura, temos uma frota própria para levar suas compras até você.</p>
                    </div>

                    {/* Box Cartão em até 4x */}
                    <div className="flex flex-col items-center bg-transparent border-4 border-whitee shadow-md rounded-lg p-4 m-2 w-40">
                        <i className="fa fa-credit-card fa-3x mb-2" aria-hidden="true"></i>
                        <h3 className="text-center font-bold">Cartão em até 4x</h3>
                        <p className="text-center text-sm mt-1">Pague no dinheiro, PIX ou parcele em até 4x sem juros no cartão de crédito.</p>
                    </div>

                    {/* Box Compra pelo WhatsApp */}
                    <div className="flex flex-col items-center bg-transparent border-4 border-white shadow-md rounded-lg p-4 m-2 w-40">
                        <i className="fa fa-whatsapp fa-3x mb-2" aria-hidden="true"></i>
                        <h3 className="text-center font-bold">Compra pelo WhatsApp</h3>
                        <p className="text-center text-sm mt-1">Você é atendido por nossos consultores. Tiramos todas suas dúvidas e montamos o seu orçamento.</p>
                    </div>

                    {/* Box Atendimento Personalizado */}
                    <div className="flex flex-col items-center bg-transparent border-4 border-white shadow-md rounded-lg p-4 m-2 w-40">
                        <i className="fa fa-users fa-3x mb-2" aria-hidden="true"></i>
                        <h3 className="text-center font-bold">Atendimento Personalizado</h3>
                        
                        <p className="text-center text-sm mt-1">Identificamos suas necessidades e te ajudamos na escolha dos produtos certos para você.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Motivos;