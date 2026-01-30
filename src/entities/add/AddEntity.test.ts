import AddEntityMethods from './AddEntityHelper';

test('Validate correct name', () => {
  const [isValid, messageErrorKeys] =
    AddEntityMethods().validateName('Some Correct Name');
  expect(isValid).toBeTruthy();
  expect(messageErrorKeys).toBe('');
});

test('Validate empty name', () => {
  const [isValid, messageErrorKeys] = AddEntityMethods().validateName('');
  expect(isValid).toBeFalsy();
  expect(messageErrorKeys).toBe('entity.form.validations.required');
});

test('Validate undefined name', () => {
  const [isValid, messageErrorKeys] =
    AddEntityMethods().validateName(undefined);
  expect(isValid).toBeFalsy();
  expect(messageErrorKeys).toBe('entity.form.validations.required');
});

test('Validate null name', () => {
  const [isValid, messageErrorKeys] = AddEntityMethods().validateName(null);
  expect(isValid).toBeFalsy();
  expect(messageErrorKeys).toBe('entity.form.validations.required');
});
