export const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];

export const encodePassword = (password) => {
  // encode the password by reversing it and add "encoded" at the end
  // 
  return password.split('').reverse().join('') + 'encoded';
};

export const decodePassword = (encrypted) => {
  // decode the password
  const str = encrypted.substring(0, encrypted.length - 7);

  return str.split('').reverse().join('');
};

export const getUserByEmail = async (email) => {
  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }

    const user = users.find(_user => _user.email === email); // if not, will return undefined

    if (user) {
       return user;
    } else {
      throw new Error('User not found');
    }

};

export const verifyPassword = async (password, encrypted) => {
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect
    const decodePwd = decodePassword(encrypted);

    if (password !== decodePwd) {
      throw new Error('Invalid password');
    }

    return true;

};

export const login = async (email, password) => {
  // login the user with email and password
  // should return the user and token if the login is successful
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
  // should return the error message if the login is unsuccessful
  // e.g. "User not found", "Invalid password"

  try {
    const userInfo = await getUserByEmail(email);

    const {password: encodePwd, ...rest} = userInfo;
    
    const matchUser = await verifyPassword(password, encodePwd);

    if (matchUser) {
      return {
        ...rest,
        token: "token",
      }
    }
  } catch(err) {
    return err.message;
  }
};
