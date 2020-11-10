import React from 'react';

import { render, fireEvent, act, wait } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';
import api from '../../services/api';

import Dashboard from '../../pages/Dashboard';

const apiMock = new AxiosMock(api);

describe('Dashboard', () => {
  it('should be able to list all the products from api', async () => {
    apiMock.onGet('products').reply(200, [
      {
        id: 70709271,
        image: 'https://savegnago.vteximg.com.br/arquivos/ids/296943_2',
        name: 'Cereal Barra Linea 60g Cookies Cream',
        categories: 'Mercearia',
        price: '4.99',
        brand: 'Linea',
      },
    ]);
  });
});
