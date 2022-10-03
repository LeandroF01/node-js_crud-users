const uuid = require("uuid");

const usersDB = [
  {
    id: "21bad10e-230a-4381-9b40-56874a233446",
    first_name: "leandro",
    last_name: "farias",
    email: "lean@gmail.com",
    password: "asjkhgd12",
    birthday: "2000/08/01",
  },
];

const getAllUsers = () => {
  return usersDB;
};

const getUsersById = (id) => {
  const data = usersDB.find((task) => task.id === id);
  return data;
};

const createUsers = (first_name, last_name, email, password, birthday) => {
  const newUser = {
    id: uuid.v4(),
    first_name,
    last_name,
    email,
    password,
    birthday,
  };
  usersDB.push(newUser);
  return newUser;
};

module.exports = {
  getAllUsers,
  getUsersById,
  createUsers,
};
