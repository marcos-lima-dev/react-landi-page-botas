// src/components/HeroSection/HeroSection.js

import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Certifique-se de que esta linha esteja presente

const HeroSection = () => {
    const content = [
        {
            title: "Compre pelo Whatsapp",
            description: "Solicite um orçamento diretamente pelo nosso WhatsApp de atendimento.",
            icon: "fa-whatsapp" // Ícone do WhatsApp
        },
        {
            title: "COMPRA 100% SEGURA",
            description: "Pague apenas na entrega dos produtos em sua casa ou empresa.",
            icon: "fa-lock" // Ícone de segurança
        },
        {
            title: "Parcele em até 4x sem juros no cartão",
            description: "Parcele suas compras em até 6x sem juros no cartão de crédito.",
            icon: "fa-credit-card" // Ícone de cartão de crédito
        },
        {
            title: "Entregamos em todo o estado do RJ",
            description: "Compre, que levamos todos os produtos até você.",
            icon: "fa-truck" // Ícone de caminhão
        }
    ];

    return (
        <section className="w-full p-8 bg-gray-200">
            <div className="flex justify-center flex-wrap w-full"> {/* Remover container e usar flex com w-full */}
                {content.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-full md:w-1/5 mx-4 mb-6 text-center"> {/* Mantendo w-full para dispositivos móveis */}
                        <div className="flex items-center justify-center bg-black text-white rounded-full p-4 mb-2"> {/* Ajustando padding */}
                            <i className={`fa ${item.icon} fa-3x`} aria-hidden="true"></i> {/* Tamanho aumentado */}
                        </div>
                        <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
                        <p className="text-2xl text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;