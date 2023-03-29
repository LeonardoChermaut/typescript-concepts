enum ErrorType {
  ShowErrorMessage = 'show-error-message',
  PasswordNotMatchError = 'As senhas não conferem',
  EmptyFieldError = 'Preencha o campo',
}

const form = document.querySelector<HTMLFormElement>('.form');
const username = document.querySelector<HTMLInputElement>('.username');
const email = document.querySelector<HTMLInputElement>('.email');
const password = document.querySelector<HTMLInputElement>('.password');
const passwordConfirm =
  document.querySelector<HTMLInputElement>('.password-confirm');
const button = document.querySelector<HTMLButtonElement>('.send-form-button');

if (!form || !username || !email || !password || !passwordConfirm || !button) {
  throw new Error('Failed to load form elements');
}

form.addEventListener('submit', async (e: Event) => {
  e.preventDefault();
  hideErrorMessage(form);
  checkFormEmptyFields([username, email, password, passwordConfirm]);
  await checkPasswordEquals(password, passwordConfirm);
  if (isSendForm(form)) {
    setButtonAttributes('Enviando...', 'disabled');
    await awaitTimeout(1500)
      .then(() => {
        showAlertMessage('Formulário Enviado');
        resetButtonAttributes();
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

const setButtonAttributes = (text: string, attribute: string): void => {
  button.innerText = text;
  button.setAttribute(attribute, '');
};

const resetButtonAttributes = (): void => {
  button.innerText = 'Enviar';
  button.removeAttribute('disabled');
};

const checkPasswordEquals = async (
  passwordInput: HTMLInputElement,
  confirmPasswordInput: HTMLInputElement,
): Promise<void> => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    showErrorMessage(passwordInput, ErrorType.PasswordNotMatchError);
    showErrorMessage(confirmPasswordInput, ErrorType.PasswordNotMatchError);
    return;
  }
};

const checkFormEmptyFields = (inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, ErrorType.EmptyFieldError);
  });
};

const hideErrorMessage = (form: HTMLFormElement): void => {
  const errorElements = form.querySelectorAll(`.${ErrorType.ShowErrorMessage}`);
  errorElements.forEach((element) =>
    element.classList.remove(ErrorType.ShowErrorMessage),
  );
};

const showErrorMessage = (
  input: HTMLInputElement,
  message: ErrorType,
): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage =
    formFields.querySelector<HTMLSpanElement>('.error-message');
  if (errorMessage) {
    errorMessage.innerText = message;
    formFields.classList.add(ErrorType.ShowErrorMessage);
  }
};

const isSendForm = (form: HTMLFormElement): boolean => {
  let send = true;
  form
    .querySelectorAll(`.${ErrorType.ShowErrorMessage}`)
    .forEach(() => (send = false));
  return send;
};

const awaitTimeout = async (time: number) => {
  return await new Promise((resolve) => setTimeout(resolve, time));
};

const showAlertMessage = async (message: string) => {
  return await new Promise<void>((resolve) => {
    alert(message);
    resolve();
    window.location.reload();
  });
};
