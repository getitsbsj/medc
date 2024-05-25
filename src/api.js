const users = [];

export const registerUser = (email, password) => {
  if (users.find(user => user.email === email)) {
    throw new Error('User already exists');
  }
  users.push({ email, password });
};

export const loginUser = (email, password) => {
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  return { token: 'fake-jwt-token' };
};
