import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChangeEvent(event) {
    setValue(event.target.getAttribute('name'),
      event.target.value);
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChangeEvent,
    clearForm,
  };
}

export default useForm;
