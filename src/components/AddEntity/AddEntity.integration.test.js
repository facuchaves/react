import { AddEntity } from "."
import {render, screen, fireEvent} from '@testing-library/react'
import { act } from "react-dom/test-utils";
import { useTranslation } from "react-i18next";
import { createEntity } from '../../services/entityService';
jest.mock("../../services/entityService")

jest.mock('react-i18next', () => ({
    useTranslation: () => {
      return {
        t: (str) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
  }));

const tick = () => (
    new Promise(resolve => {
      setTimeout(resolve, 0);
    })
)

test('Should close', () => {
    const handleClose = jest.fn();
    
    act(() => {
        render(<AddEntity handleClose={handleClose}/> );
    });

    const closeButton = document.querySelector('[test_id="close_modal_add_entity_button_id"]');

    act(() => {
        fireEvent.click(closeButton)
    });
    expect(handleClose).toHaveBeenCalledTimes(1);

})

test('Should call success', async () => {
    const handleSuccess = jest.fn();
    const OK_RESPONSE = { statusCode : 200 }
    createEntity.mockReturnValue(Promise.resolve(OK_RESPONSE));
    
    act(() => {
        render(<AddEntity handleSuccess={handleSuccess} handleClose={()=>{}} /> );
    });
    
    const nameField = document.querySelector('[test_id="name_test_id"] input');
    
    act(() => {
        fireEvent.change(nameField, {target: {value: 'some name'}})
        const saveButton = document.querySelector('[test_id="save_entity_button_id"]');
        saveButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    await tick();
    expect(handleSuccess).toHaveBeenCalledTimes(1);

})

test('Should show error 400', async () => {
    const ERROR_400 = {
        "statusCode": 400,
        "message": [ "an error message" ],
        "error": "Bad Request"
    }
    createEntity.mockReturnValue(Promise.resolve(ERROR_400));

    act(() => {
        render(<AddEntity/> );
    });
    
    const nameField = document.querySelector('[test_id="name_test_id"] input');
    
    act(() => {
        fireEvent.change(nameField, {target: {value: 'some name'}})
        const saveButton = document.querySelector('[test_id="save_entity_button_id"]');
        saveButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    await tick();
    
    const errorMessage = document.querySelector('[test_id="error_message_id_0"]');
    expect(errorMessage.textContent).toBe(ERROR_400.message[0]);

})

test('Should show generic error 500', async () => {
    const { t } = useTranslation();

    const ERROR_500 = {
        "statusCode": 500,
    }
    createEntity.mockReturnValue(Promise.resolve(ERROR_500));

    act(() => {
        render(<AddEntity/> );
    });
    
    const nameField = document.querySelector('[test_id="name_test_id"] input');
    
    act(() => {
        fireEvent.change(nameField, {target: {value: 'some name'}})
        const saveButton = document.querySelector('[test_id="save_entity_button_id"]');
        saveButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    await tick();
    
    const errorMessage = document.querySelector('[test_id="error_message_id_0"]');
    expect(errorMessage.textContent).toBe(t('entity.form.error.generic'));

})
