// src/components/Products/Products.js

import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Certifique-se de que esta linha esteja presente

const Products = () => {
    const products = [
        {
            name: "ΒΟΤΙΝΑ ΜΟΝΟ ELASTICO C/ BICO - CRIVAL",
            info: "Trabalhar em ambientes que demandam atenção especial à segurança dos pés então é uma prioridade. Para isso, é essencial contar com um calçado resistente, inegavelmente confortável e em conformidade com as normas de proteção individual. A Botina Mono Elástico C/ Bico é a escolha certa, oferecendo proteção, durabilidade e conforto para o dia a dia de trabalho.",
            imageUrl: "https://megaborrj.com.br/wp-content/uploads/2024/10/botas-crival-30076_0.png",
            whatsappLink: "https://api.whatsapp.com/send?phone=5511999999999"
        },
        {
            name: "BOTINA NOBUCK CADARCO CP092 PPVC C/B PVC - CRIVAL",
            info: "Botina para uso ocupacional com fechamento por atacador, confeccionada certamente  em vaqueta Nobuck, língua-fole e colarinho em camurça acolchoado, forro interno na gáspea não tecido e forro do cano dublado com manta de não tecido com tratamento antimicrobiano, biqueira plástica, palmilha de montagem não tecido, solado injeção direta bidensidade bicolor e sobrepalmilha antimicrobiana.",
            imageUrl: "https://megaborrj.com.br/wp-content/uploads/2023/11/29714_0.png",
            whatsappLink: "https://api.whatsapp.com/send?phone=5511999999999"
        },
        {
            name: "BOTA BORRACHA C/ LONGO BRANCA - INNPRO",
            info: "A Bota Borracha c/Cano Longo Branca é a escolha ideal para quem busca então proteção e conforto em seu ambiente de trabalho. Projetada com materiais de alta qualidade e tecnologia avançada, essa bota oferece decerto uma combinação perfeita de segurança e ergonomia.",
            imageUrl: "https://megaborrj.com.br/wp-content/uploads/2024/06/27996_0-1.png",
            whatsappLink: "https://api.whatsapp.com/send?phone=5511999999999"
        },
        {
            name: "BOTA BORRACHA C/ LONGO PRETA - INNPRO",
            info: "A Bota Borracha c/Cano Longo Preta é a escolha então ideal para quem busca proteção e conforto em seu ambiente de trabalho. Projetada com materiais de alta qualidade e tecnologia avançada, essa bota oferece assim uma combinação perfeita de segurança e ergonomia.",
            imageUrl: "https://megaborrj.com.br/wp-content/uploads/2024/06/29663_0-1.png",
            whatsappLink: "https://api.whatsapp.com/send?phone=5511999999999"
        },
        
        {
            name: "GALOCHA DE BORRACHA BRANCA - INNPRO",
            info: "A Bota Galocha PVC Cano Curto Branca é um Equipamento de Proteção Individual (EPI) essencial contudo para profissionais que trabalham em ambientes úmidos, com riscos de respingos e contaminação. Projetada com materiais de alta qualidade e especificações técnicas avançadas, esta bota garante decerto a segurança e o conforto necessários durante a execução de suas tarefas.",
            imageUrl: "https://megaborrj.com.br/wp-content/uploads/2021/06/25499_0.png",
            whatsappLink: "https://api.whatsapp.com/send?phone=5511999999999"
        },
        {
            name: "GALOCHA DE BORRACHA PRETA - INNPRO",
            info: "A Galocha de Borracha Preta é a escolha certamente ideal para quem busca proteção e conforto em seu ambiente de trabalho. Projetada então com materiais de alta qualidade e tecnologia avançada, essa galocha oferece uma combinação perfeita de segurança e ergonomia.",
            imageUrl: "https://megaborrj.com.br/wp-content/uploads/2024/06/29664_0-1.png",
            whatsappLink: "https://api.whatsapp.com/send?phone=5511999999999"
        },
        {
            name: "BOTINA BI FLEX ELAST C/ BICO PVC REF 105 - CRIVAL",
            info: "A Botina Bi Flex Elast c/Bico PVC Ref 105 é a decerto escolha ideal para quem busca proteção e conforto em seu ambiente de trabalho. Projetada com materiais de alta qualidade e tecnologia avançada, essa botina oferece então  uma combinação perfeita de segurança e ergonomia.",
            imageUrl: "https://megaborrj.com.br/wp-content/uploads/2024/06/24680_0.png",
            whatsappLink: "https://api.whatsapp.com/send?phone=5511999999999"
        },
        {
            name: "ΒΟΤΙΝΑ ΜΟΝΟ ELASTICO S/BICO - CRIVAL",
            info: "A Botina Bi Flex Elast c/Bico PVC Ref 105 é a decerto escolha ideal para quem busca proteção e conforto em seu ambiente de trabalho. Projetada com materiais de alta qualidade e tecnologia avançada, essa botina oferece então  uma combinação perfeita de segurança e ergonomia.",
            imageUrl: "https://megaborrj.com.br/wp-content/uploads/2024/06/24680_0.png",
            whatsappLink: "https://api.whatsapp.com/send?phone=5511999999999"
        },
        {
            name: "BOTINA VULCAFLEX B/PVC - C.A. 43377",
            info: "Descubra afinal o conforto e a segurança que a Botina Vulcaflex oferece, certificada com o selo de qualidade C.A. 43377. Desenvolvida para assim atender às demandas do ambiente de trabalho, nossa botina é mais do que um simples calçado – é a escolha certa para quem valoriza proteção e durabilidade.",
            imageUrl: "https://megaborrj.com.br/wp-content/uploads/2024/01/26265_0.png",
            whatsappLink: "https://api.whatsapp.com/send?phone=5511999999999"
        }, 
    ];
    

    return (
        <div className="w-full bg-[#212529] p-8">
            <div className="container bg-[#212529] mx-auto flex flex-wrap justify-center">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full md:w-3/4">
                        {/* 1ª Coluna: Imagem do Produto */}
                        <div className="w-full md:w-1/2">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
                        </div>

                        {/* 2ª Coluna: Informações do Produto */}
                        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
                            <h2 className="text-3xl font-bold text-center text-gray-800">{product.name}</h2>
                            <p className="text-gray-600 text-lg text-justify p-5">{product.info}</p>
                            <div className="flex justify-center mt-4"> {/* Contêiner flexível para centralizar o botão */}
                            <a 
                                href={product.whatsappLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center justify-center bg-green-500 text-white rounded-md w-4/5 md:w-1/2 px-4 py-2 hover:bg-green-600 transition duration-300" // Ajuste a largura aqui
                            >
                                <i className="fa fa-whatsapp mr-2 py-4" aria-hidden="true"></i>
                                Solicitar Orçamento
                            </a>
</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;