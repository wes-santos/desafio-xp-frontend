const initialState = {
  user: {
    balance: 999.99,
    clickedAsset: 'PETR4',
    isFetching: false,
    allAssets: [{
      codAtivo: 'PETR4',
      valor: 27.96,
      imagem: 'https://i.imgur.com/3rXRnXm.jpg',
      subtitulo: 'Petrobras Pn N2',
      qtdeAtivo: 0,
    }],
    userAssets: [{
      codAtivo: 'PETR4',
      valor: 27.96,
      imagem: 'https://i.imgur.com/3rXRnXm.jpg',
      subtitulo: 'Petrobras Pn N2',
      qtdeAtivo: 0,
    }],
    fetchApiError: false,
  },
};

export default initialState;
