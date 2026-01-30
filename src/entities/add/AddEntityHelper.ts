const AddEntityMethods = () => {
  const validateName: (name: string) => [boolean, string] = (name: string) => {
    if (name) {
      return [true, ''];
    }
    return [false, 'entity.form.validations.required'];
  };

  return {validateName};
};

export default AddEntityMethods;
