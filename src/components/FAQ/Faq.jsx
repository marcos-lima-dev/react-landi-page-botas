// src/components/Faq/Faq.jsx

import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Certifique-se de que esta linha esteja presente

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Quais os materiais utilizados?",
            answer: "As Botas de EPI são fabricadas com materiais duráveis e resistentes, garantindo proteção contra impactos, perfurações e agentes químicos, além de conforto e aderência em diversas condições de trabalho."
        },
        {
            question: "Quais as formas de pagamento?",
            answer: "Você pode pagar em dinheiro, PIX, boleto (apenas para CNPJ) ou dividir no cartão de crédito em até 4 vezes sem juros."
        },
        {
            question: "Vocês entregam fora do Rio de Janeiro?",
            answer: "Entregamos, porém deve ser consultado antecipadamente os valores de frete para envio das mercadorias."
        },
        {
            question: "Vocês faturam para Empresas?",
            answer: "Sim, faturamos mediante análise antecipada."
        }
    ];

    return (
        <div className="w-full flex justify-center p-8 bg-gray-100"> {/* Container centralizado */}
            <div className="flex flex-col md:flex-row w-full md:w-3/4">
                {/* 1ª Div - Perguntas Frequentes */}
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-center mb-2 uppercase">Perguntas<br/> Frequentes</h1>
                    <p className="text-xl text-center mb-4">Ainda com dúvidas? Fale com nosso suporte clicando no botão abaixo:</p>
                    <a 
                        href="https://api.whatsapp.com/send?phone=5511999999999" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center bg-green-500 text-white rounded-md px-4 py-6 hover:bg-green-600 transition duration-300 text-lg" // Aumentando o texto aqui
                    >
                        <i className="fa fa-whatsapp mr-2" aria-hidden="true"></i>
                        Falar com Suporte
                    </a>
                </div>

                {/* 2ª Div - Acordions */}
                <div className="w-full md:w-1/2 p-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button 
                                onClick={() => toggleAccordion(index)} 
                                className="flex justify-between items-center w-full bg-white shadow-md rounded-lg p-4 focus:outline-none"
                            >
                                <span className="font-semibold uppercase">{faq.question}</span>
                                <i className={`fa ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`} aria-hidden="true"></i>
                            </button>
                            {activeIndex === index && (
                                <div className="mt-2 p-4 bg-gray-200 rounded-lg">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;