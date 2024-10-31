// src/components/Header/Header.js

import React from 'react';

const Header = () => {
    const logoUrl = "https://pages.megaborrj.com.br/wp-content/uploads/2024/09/logo-Megabor-1024x458-1.webp"; // URL da logo
    const imageUrl = "https://megaborrj.com.br/wp-content/uploads/2024/10/botas-crival-30076_0.png"; // URL da imagem

    return (
        <header 
            className="w-full bg-gradient-to-r from-red-500 via-amber-600 to-yellow-500"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-start">
               {/* Início da primeira coluna */}
            <div className="flex flex-col w-full md:w-1/2 p-8 md:p-12 my-14 bg-gray-800 bg-opacity-30 rounded-lg"> {/* Padding menor em dispositivos móveis */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                    <img src={logoUrl} alt="Logo" className="h-16 mb-4 md:mb-0 mr-4" />
                    <h4 className="text-white text-2xl font-bold uppercase leading-5 text-shadow-md text-center md:text-left">
                        Compre Botas <br /> para sua <br /> Empresa
                    </h4>
                </div>
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-2">
                    Botas de Alta <br /> Qualidade para sua <br /> Segurança e integridade
                </h1>
                <p className="text-white text-2xl font-semibold mb-4">
                    Preencha o formulário abaixo para receber o atendimento da nossa equipe diretamente em seu WhatsApp.
                </p>
                <form className="flex flex-col">
                    <input 
                        type="text" 
                        placeholder="Seu WhatsApp" 
                        className="p-2 mb-2 border border-gray-300 rounded"
                    />
                    <button 
                        type="submit" 
                        className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
                    >
                        Solicitar Orçamento
                    </button>
                </form>
                <p className="text-white text-3xl mt-4">
                    Entregamos em todo o <span className='font-bold'>Estado do Rio de Janeiro.</span>
                </p>
            </div>
                {/* Fim da primeira coluna */}

                {/* Início da segunda coluna */}
                <div className="flex flex-col w-full md:w-1/2 p-4 mt-2 mb-2 items-center justify-center"> {/* Centralizando a imagem */}
                    <img src={imageUrl} alt="Botina Mono Elástico C/ Bico" className="w-3/4 md:w-full h-auto rounded-lg" /> {/* Ajustando a largura da imagem */}
                    <p className='text-2xl text-white font-semibold mb-2'>
                        Parcele suas compras em até <span className='bg-black bg-opacity-75 rounded-md'>4x sem juros</span> no cartão de crédito.
                    </p>
                </div>
                {/* Fim da segunda coluna */}
            </div>
        </header>
    );
};

export default Header;