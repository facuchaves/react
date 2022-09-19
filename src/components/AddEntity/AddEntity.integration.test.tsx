import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from '../../hooks/reactReduxHooks';
import {AddEntity} from '.';
import {createEntity} from '../../services/entityService';

jest.mock('../../services/entityService');

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

jest.mock('../../hooks/reactReduxHooks', () => ({
  useAppDispatch: () => ({
    dispatch: (value) => {},
  }),
}));

const tick = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 0);
  });

test('Should close', () => {
  const handleClose = jest.fn();

  act(() => {
    render(<AddEntity handleSuccess={() => {}} handleClose={handleClose} />);
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
  const handleSuccess = jest.fn();
  const OK_RESPONSE = {statusCode: 200};
  (createEntity as jest.Mock).mockReturnValue(Promise.resolve(OK_RESPONSE));

  act(() => {
    render(<AddEntity handleSuccess={handleSuccess} handleClose={() => {}} />);
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

test('Should show error 400', async () => {
  const ERROR_400 = {
    statusCode: 400,
    message: ['an error message'],
    error: 'Bad Request',
  };
  (createEntity as jest.Mock).mockReturnValue(Promise.resolve(ERROR_400));

  act(() => {
    render(<AddEntity handleClose={() => {}} handleSuccess={() => {}} />);
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

test('Should show generic error 500', async () => {
  const {t} = useTranslation();

  const ERROR_500 = {
    statusCode: 500,
  };
  (createEntity as jest.Mock).mockReturnValue(Promise.resolve(ERROR_500));

  act(() => {
    render(<AddEntity handleClose={() => {}} handleSuccess={() => {}} />);
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
