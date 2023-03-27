type verifyUserFn = (user: User, value: User) => boolean;
type User = { username: string; password: string; permition: string };

const verifyUser: verifyUserFn = (user, value) => {
  const { username, password, permition } = user;
  return ( username === value.username && password === value.password && permition === value.permition);
};

const dbUser = {
  username: 'Leonardo',
  password: '123456789',
  permition: 'admin',
};

const sentValue = {
  username: 'Leonardo',
  password: '123456789',
  permition: 'admin',
};

const loggedIn = verifyUser(dbUser, sentValue);
console.log(loggedIn);

export {};
