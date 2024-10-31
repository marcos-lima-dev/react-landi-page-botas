// src/components/Footer/Footer.jsx

import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../../assets/images/megaborrj-logo.png'; // Ajuste o caminho conforme necessário

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center text-center md:text-left mb-4 md:mb-0">
                    <img 
                        src={logo} // Substitua pela URL da sua logo
                        alt="Logo da Megabor"
                        className="h-16 mr-2" // Ajuste a altura conforme necessário
                    />
                    <p className="text-lg">&copy; {new Date().getFullYear()} Megabor - Todos os direitos reservados.</p>
                </div>
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://www.facebook.com" className="hover:text-gray-400">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com" className="hover:text-gray-400">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com" className="hover:text-gray-400">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5511999999999" className="hover:text-gray-400">
                        <i className="fa fa-whatsapp"></i>
                    </a>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-sm">Contato: contato@empresa.com | Telefone: (11) 99999-9999</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;