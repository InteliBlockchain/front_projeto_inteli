import axios from 'axios';
const baseUrl = 'http://localhost:3001';

// Student function
export const createWallet = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/create...`);

  const res = await axios
    .post(
      `${baseUrl}/student/create`,
      // typeof body !== 'object' ? JSON.parse(body) : body,
      { ra: `2022.2A.${Math.floor(Math.random() * (9999 - 1000) + 1000)}` },
      {
        headers: {
          Authorization: authToken,
        },
      }
    )
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

export const getWallet = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/wallet...`);

  const res = await axios
    .post(
      `${baseUrl}/student/wallet`,
      { ra: '2022.2A.01' },
      {
        headers: {
          Authorization: authToken,
        },
      }
    )
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

export const getRA = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/ra...`);

  const res = await axios
    .post(
      `${baseUrl}/student/ra`,
      {
        wallet: '00000000000000000000x',
      },
      {
        headers: {
          Authorization: authToken,
        },
      }
    )
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

export const removeStudent = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/2022.2A.0001...`);

  const res = await axios
    .delete(`${baseUrl}/student/2022.2A.0001`, {
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

export const getStudentBalance = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/balance...`);

  const res = await axios
    .post(
      `${baseUrl}/student/balance`,
      {
        ra: '2022.2A.0001',
      },
      {
        headers: {
          Authorization: authToken,
        },
      }
    )
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

export const transferMoney = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/transfer...`);

  const res = await axios
    .post(
      `${baseUrl}/student/transferMoney`,
      {
        ra: '2022.2A.0001',
      },
      {
        headers: {
          Authorization: authToken,
        },
      }
    )
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

// Campus function
export const registerEntry = async (body, authToken, result) => {};

export const registerExit = async (body, authToken, result) => {};

export const getStudentEntries = async (body, authToken, result) => {};

export const getStudentExits = async (body, authToken, result) => {};

export const getEntries = async (body, authToken, result) => {};

export const getExits = async (body, authToken, result) => {};

// Lecture functions
export const createLecture = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/lecture/create...`);

  //send a form data with the lecture name and the teacher's ra
  const res = await axios
    .post(
      `${baseUrl}/lecture/create`,
      {
        name: `Hello World ${Math.floor(Math.random() * (9999 - 1000) + 1000)}`,
        description: `${Math.floor(Math.random() * (9999 - 1000) + 1000)}`,
        ras: ['2022.2A.0001', '2022.2A.0002', '2022.2A.0003'],
      },
      {
        headers: {
          Authorization: authToken,
        },
      }
    )
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

export const getStudentLectures = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/lecture/student/2022.2A.0001...`);

  const res = await axios
    .get(`${baseUrl}/lecture/student/2022.2A.0001`, {
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

export const getLectures = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/lecture...`);

  const res = await axios
    .post(`${baseUrl}/lecture`, {
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
