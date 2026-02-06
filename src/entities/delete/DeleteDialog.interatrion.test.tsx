import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import DeleteDialog from './DeleteDialog';

const tick = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 0);
  });

test('Should close', async () => {
  const handleClose = vi.fn();

  act(() => {
    render(
      <DeleteDialog handleAgree={() => {}} handleClose={handleClose} open />,
    );
  });

  const closeButton = screen.getByTestId(
    'close_delete_entity_dialog_button',
  ) as Element;

  act(() => {
    closeButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await tick();
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test('Should call success', async () => {
  const handleAgree = vi.fn();

  act(() => {
    render(
      <DeleteDialog handleClose={() => {}} handleAgree={handleAgree} open />,
    );
  });

  const closeButton = screen.getByTestId(
    'agree_delete_entity_dialog_button',
  ) as Element;

  act(() => {
    closeButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await tick();
  expect(handleAgree).toHaveBeenCalledTimes(1);
});
