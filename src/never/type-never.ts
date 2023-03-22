const createError = (): never => {
  throw new Error('This error broken application');
}

createError();
