import React, {
  useContext,
  createContext,
  useCallback,
  useState,
  ComponentType,
} from 'react';

interface FormContextData {
  showForm(): void;
  hideForm(): void;
  showFormState: boolean;
}

const FormContext = createContext<FormContextData>({} as FormContextData);

const FormProvider: React.FC = ({ children }) => {
  const [showFormState, setShowFormState] = useState(false);

  const showForm = useCallback(() => {
    setShowFormState(true);
  }, []);

  const hideForm = useCallback(() => {
    setShowFormState(false);
  }, []);

  return (
    <FormContext.Provider value={{ showForm, hideForm, showFormState }}>
      {children}
    </FormContext.Provider>
  );
};

function useForm(): FormContextData {
  const context = useContext(FormContext);

  if (!context) {
    throw Error('useForm must be used within a FormProvider');
  }

  return context;
}

export { FormProvider, useForm };
