// src/components/Location/Location.jsx

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Location = () => {
    const position = { lat: -22.9083, lng: -43.2296 }; // Coordenadas para R. Figueira de Melo
    const whatsappLink = "https://api.whatsapp.com/send?phone=5511999999999"; // Link do WhatsApp

    return (
        <div className="w-full flex justify-center p-14 bg-gradient-to-br from-teal-500 via-green-600 to-lime-700">
            <div className="flex flex-col md:flex-row w-full md:w-3/4">
                {/* Div do Mapa */}
                <div className="w-full md:w-1/2 h-96">
                    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                        <GoogleMap
                            mapContainerStyle={{ height: "100%", width: "100%" }}
                            center={position}
                            zoom={15}
                        >
                            <Marker position={position} />
                        </GoogleMap>
                    </LoadScript>
                </div>

                {/* Div da Descrição */}
                <div className="w-full md:w-1/2 p-8 text-white flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4">R. Figueira de Melo, 262 - São Cristóvão - RJ</h3>
                    <p className='text-xl text-justify'>
                        Você pode vir até a gente ou se preferir é só clicar no botão abaixo e falar com a gente pelo WhatsApp ou telefone. Nossa equipe está pronta para te atender.
                    </p>

                    {/* Botões abaixo do parágrafo */}
                    <div className="flex justify-center mt-4 space-x-4"> {/* Contêiner flexível para centralizar os botões */}
                        <a 
                            href={whatsappLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center bg-green-500 text-white rounded-md w-4/5 md:w-1/2 px-4 py-4 hover:bg-green-600 transition duration-300"
                        >
                            <i className="fa fa-whatsapp mr-2" aria-hidden="true"></i>
                            Solicitar Orçamento
                        </a>

                        <button 
                            className="flex items-center justify-center bg-blue-500 text-white rounded-md w-4/5 md:w-1/2 px-4 py-4 hover:bg-blue-600 transition duration-300"
                            onClick={() => { /* Adicione sua lógica para o telefone aqui */ }}
                        >
                            <i className="fa fa-phone mr-2" aria-hidden="true"></i>
                            Ligar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;