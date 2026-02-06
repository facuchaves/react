import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import {useTranslation} from 'react-i18next';
import AddEntityForm from './AddEntityForm';
import {createEntity} from '../../services/entityService';

vi.mock('../../services/entityService');

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

vi.mock('../../hooks/reactReduxHooks', () => ({
  useEntityDispatch: () => (_value: any) => {},
}));

const mockedCreateEntity = vi.mocked(createEntity);

const tick = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 0);
  });

test('Should close', () => {
  const handleClose = vi.fn();

  act(() => {
    render(<AddEntityForm onSuccess={() => {}} onClose={handleClose} />);
  });

  const closeButton = screen.getByTestId(
    'close_modal_add_entity_button_id',
  ) as Element;

  act(() => {
    fireEvent.click(closeButton);
  });
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test('Should call success', async () => {
  const handleSuccess = vi.fn();
  const OK_RESPONSE = {statusCode: 200};
  mockedCreateEntity.mockResolvedValue(OK_RESPONSE as any);

  act(() => {
    render(<AddEntityForm onSuccess={handleSuccess} onClose={() => {}} />);
  });

  const nameField = document.querySelector(
    '[data-testid="name_test_id"] input',
  ) as Element;

  act(() => {
    fireEvent.change(nameField, {target: {value: 'some name'}});
    const saveButton = screen.getByTestId('save_entity_button_id') as Element;
    saveButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  await tick();
  expect(handleSuccess).toHaveBeenCalledTimes(1);
});

test.skip('Should show error 400', async () => {
  const ERROR_400 = {
    statusCode: 400,
    message: ['an error message'],
    error: 'Bad Request',
  };
  mockedCreateEntity.mockResolvedValue(ERROR_400 as any);

  act(() => {
    render(<AddEntityForm onClose={() => {}} onSuccess={() => {}} />);
  });

  const nameField = document.querySelector(
    '[data-testid="name_test_id"] input',
  ) as Element;

  act(() => {
    fireEvent.change(nameField, {target: {value: 'some name'}});
    const saveButton = screen.getByTestId('save_entity_button_id') as Element;
    saveButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  await tick();

  const errorMessage = screen.getByTestId('error_message_id_0') as Element;
  expect(errorMessage.textContent).toBe(ERROR_400.message[0]);
});

test.skip('Should show generic error 500', async () => {
  const {t} = useTranslation();

  const ERROR_500 = {
    statusCode: 500,
  };
  mockedCreateEntity.mockResolvedValue(ERROR_500 as any);

  act(() => {
    render(<AddEntityForm onClose={() => {}} onSuccess={() => {}} />);
  });

  const nameField = document.querySelector(
    '[data-testid="name_test_id"] input',
  ) as Element;

  act(() => {
    fireEvent.change(nameField, {target: {value: 'some name'}});
    const saveButton = screen.getByTestId('save_entity_button_id') as Element;
    saveButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  await tick();

  const errorMessage = screen.getByTestId('error_message_id_0') as Element;
  expect(errorMessage.textContent).toBe(t('entity.form.error.generic'));
});
