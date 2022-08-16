import axios from 'axios';

// Student function
export const createWallet = async (body, authToken, result) => {}

export const getWallet = async (body, authToken, result) => {}

export const getRA = async (body, authToken, result) => {}

export const removeStudent = async (body, authToken, result) => {}

export const getStudentBalance = async (body, authToken, result) => {}

export const transferMoney = async (body, authToken, result) => {}



// Campus function
export const registerEntry = async (body, authToken, result) => {}

export const registerExit = async (body, authToken, result) => {}

export const getStudentEntries = async (body, authToken, result) => {}

export const getStudentExits = async (body, authToken, result) => {}

export const getEntries = async (body, authToken, result) => {}

export const getExits = async (body, authToken, result) => {}



// Lecture functions
export const getLectures = async (body, authToken, result) => {
  console.log('Getting http://localhost:3000/' + 'lecture' + '...');

  const res = await axios
    .get('http://localhost:3001/lecture', {
      headers: {
        Authorization: authToken,
      },
    })
    .then((res) => {
      console.log('Got it:\n');
      result = res.data;
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.error('Error: ' + err);
      return err;
    })
    .then((res) => {
      console.log(res);
      return res;
    });

  const { data } = res;

  return data;
};

export const checkWallet = (body, authToken) => {
  console.log(body, authToken);
};
