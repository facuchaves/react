import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'; // Importante para que Jest entienda los matchers
import SearchForm from './index';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => key, // Just returns the key back as the translation
    i18n: {changeLanguage: vi.fn()},
  }),
  initReactI18next: {type: '3rdParty', init: vi.fn()},
}));

describe('SearchForm', () => {
  test('debe ejecutar el submit correctamente', () => {
    // 1. Renderizamos el componente de verdad
    render(<SearchForm />);

    // 2. Buscamos el formulario por el test-id que ya tenías
    const form = screen.getByTestId('search_entity_from_test_id');

    // Verificamos que exista
    expect(form).to.exist;

    // 3. Simulamos el submit
    // En RTL, disparamos el evento sobre el elemento real
    fireEvent.submit(form);

    // Si quieres probar que se llamó a una función,
    // lo ideal sería pasarle un mock de Jest o Sinon como prop.
    // Ejemplo: expect(mySpy.calledOnce).to.be.true;
  });
});
