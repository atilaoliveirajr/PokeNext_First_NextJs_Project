import React from 'react';
import Image from 'next/image';

export default function about() {
	return (
        <div>
            <h1>Sobre o projeto</h1>
            <p> Descrição de como foi feito o projeto</p>
            <Image src="/images/charizard.png" width={300} height={300} alt="Charizard image"></Image>
        </div>
    );
}
