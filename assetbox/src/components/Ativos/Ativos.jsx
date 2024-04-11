import React, { useEffect, useState } from 'react';
import Filtro from '../../assets/img/filtro.svg';
import "./ativos.css";

//essa é a função que irá buscar os ativos na API ela está comentada pois não temos uma API para buscar os ativos
// function Ativos() {
//     const [assets, setAssets] = useState([]);

// useEffect(() => {
//     //   getAssets().then(setAssets);
// }, []);


//criei um array de objetos para simular a resposta da API
const Ativos = ({ setTela }) => {
    const assets = [
        { id: 1, description: 'Ativo 1', status: 'Ativo' },
        { id: 2, description: 'Ativo 2', status: 'Inativo' },
        { id: 3, description: 'Ativo 3', status: 'Ativo' },
        { id: 4, description: 'Ativo 4', status: 'Ativo' },
        { id: 5, description: 'Ativo 5', status: 'Ativo' },
        { id: 6, description: 'Ativo 6', status: 'Ativo' },
        { id: 7, description: 'Ativo 7', status: 'Ativo' },
        { id: 8, description: 'Ativo 8', status: 'Ativo' },
        { id: 9, description: 'Ativo 9', status: 'Ativo' },
        { id: 10, description: 'Ativo 10', status: 'Ativo' },
        { id: 11, description: 'Ativo 11', status: 'Ativo' },
        { id: 12, description: 'Ativo 12', status: 'Ativo' },
    ];

    return (
        <body>
            <div class='page-full' style={{ backgroundColor: 'transparent', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                <button class="button is-primary m-5 ml-6" style={{ backgroundColor: '#367E90', color: '#fff' }} onClick={() => setTela('CadastroAtivos')}>Cadastrar Ativo</button>
                <div class='page-full' style={{ backgroundColor: '#fff', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                    <div class='field'>
                        <div class="columns filtro mx-0" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                            <div class="column is-one-fifth" style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={Filtro} class="mx-1" alt='filter'></img><label className='filtros mx-1 has-text-weight-medium mr-3'>ID</label>
                                <input class="input is-small is-flex-grow-1 is-rounded" type="text" placeholder='Digite um ID:'/>
                            </div>
                            <div class="column is-two-fifths is-flex is-align-items-center">
                                <label className='filtros mx-1 has-text-weight-medium mr-3' >Titulo</label>
                                <input class="input is-small is-flex-grow-3 is-rounded" type="text" placeholder='Digite um Nome:'/>
                            </div>
                            <div class="column is-one-fifth is-flex is-align-items-center">
                                <label className='filtros mx-1 has-text-weight-medium mr-3'>Status</label>
                                <input class="input is-small is-flex-grow-2 is-rounded" type="text" placeholder='Digite um Status:'/>
                            </div>
                            <div class="column is-one-fifth">
                                <button class="button is-primary m-2 is-rounded" style={{ backgroundColor: '#459EB5', color: '#fff' }}>Aplicar Filtros</button>
                            </div>
                        </div>
                    </div>
                    <div class="columns indice m-0 is-flex is-justify-content-center" >
                        <div class="column is-one-third ml-2 is-flex is-justify-content-center is-align-items-center">
                            <label className='indices has-text-weight-medium'>Número</label>
                        </div>
                        <div class="column is-one-third ml-2 mr-2 is-flex is-justify-content-center is-align-items-center">
                            <label className='indices has-text-weight-medium'>Título</label>
                        </div>
                        <div class="column is-one-third mr-2 is-flex is-justify-content-center is-align-items-center">
                            <label className='indices has-text-weight-medium'>Status</label>
                        </div>
                    </div>

                    <div class='p-0'>
                        {/*aqui eu percorro o array de objetos e crio um card para cada objeto*/}
                        {assets.map((asset) => (
                            <div key={asset.id} className='asset' class=' asset is-flex is-justify-content-center'>
                                <a class='SemHover column is-one-third mr-2 dado-ativo is-flex is-justify-content-center is-align-items-center has-text-weight-medium' href='##'>
                                    <p>{asset.id}</p>
                                </a>
                                <a class='SemHover column is-one-third mr-2 dado-ativo is-flex is-justify-content-center is-align-items-center has-text-weight-medium' href='##'>
                                    <p> {asset.description}</p>
                                </a>
                                <a class='SemHover column is-one-third mr-2 dado-ativo is-flex is-justify-content-center is-align-items-center has-text-weight-medium' href='##'>
                                    <p> {asset.status}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </body >
    );
}
export default Ativos;

