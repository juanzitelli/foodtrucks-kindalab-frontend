import { useState } from "react";

const useForm = <T>(
  initialState: T
): [
  T,
  (event: any) => void,
  () => void,
  (targetName: string, value: any) => void
] => {
  const [formState, setFormState] = useState(initialState);

  const resetForm = () => {
    setFormState(initialState);
  };

  const handleInputChange = ({currentTarget,}: React.FormEvent<HTMLInputElement>): void => {
    setFormState({
      ...formState,
      [currentTarget.name]: currentTarget.value,
    });
  };
  const changeInputValue = (targetName: string, value: any) => {
    setFormState({
      ...formState,
      [targetName]: value,
    });
  };

  return [formState, handleInputChange, resetForm, changeInputValue];
};

export default useForm;
