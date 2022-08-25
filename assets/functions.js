import axios from 'axios';
const baseUrl = 'http://localhost:3001';

// Student function
export const createWallet = async (body, authToken, result) => {
  let number1 = Math.floor(Math.random() * (9 - 1) + 1);
  let number2 = Math.floor(Math.random() * (9 - 1) + 1);

  console.log(
    `Getting ${baseUrl}/student/create... | Creating user with ra: 2022.2A.00${number1}${number2}`
  );

  const res = await axios
    .post(
      `${baseUrl}/student/create`,
      { ra: `2022.2A.00${number1}${number2}` },
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
      { ra: '2022.2A.0002' },
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
      { wallet: '0x320b0bf54315d879D27ADE3A244254ac76249A72' },
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
  console.log(`Getting ${baseUrl}/student/2022.2A.0074...`);

  const res = await axios
    .delete(`${baseUrl}/student/2022.2A.0074`, {
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
        ra: '2022.2A.0002',
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
        ra: '2022.2A.0033',
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
export const registerEntry = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/checkIn...`);

  const res = await axios
    .post(
      `${baseUrl}/student/checkIn`,
      {
        ra: '2022.2A.0002',
        dateTime: '1995-10-1805:40:00',
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

export const registerExit = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/checkOut...`);

  const res = await axios
    .post(
      `${baseUrl}/student/checkOut`,
      {
        ra: '2022.2A.0002',
        dateTime: '1995-12-14T03:40:00',
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

export const getStudentEntries = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/accesses...`);

  const res = await axios
    .post(
      `${baseUrl}/student/accesses`,
      {
        ra: '2022.2A.0002',
        date: '1995-12-18',
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

export const getStudentExits = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/exits...`);

  const res = await axios
    .post(
      `${baseUrl}/student/exits`,
      { ra: '2022.2A.0002', date: '1995-12-17' },
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

export const getEntries = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/allAccesses...`);

  const res = await axios
    .get(`${baseUrl}/student/allAccesses/1995-12-17`, {
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

export const getExits = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/student/allExits...`);

  const res = await axios
    .get(`${baseUrl}/student/allExits/1995-12-17`, {
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

// Lecture functions
export const createLecture = async (body, authToken, result) => {
  const bodyFormData = new FormData();

  // bodyFormData.append("file", "depositphotos_255078142-free-stock-photo-image-with-breakfast.jpg");
  bodyFormData.append('name', 'Hello World 3');
  bodyFormData.append('description', '2020-05-12T11:50:21.817Z');
  bodyFormData.append('ras[]', '2022.1A.01');
  bodyFormData.append('ras[]', '2022.2A.03');

  const res = await axios
    .post(`${baseUrl}/lecture/create`, bodyFormData, {
      headers: {
        Authorization: authToken,
        'Content-Type': 'multipart/form-data',
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

export const getStudentLectures = async (body, authToken, result) => {
  console.log(`Getting ${baseUrl}/lecture/student/2022.2A.0002...`);

  const res = await axios
    .get(`${baseUrl}/lecture/student/2022.2A.0002`, {
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
    .get(`${baseUrl}/lecture`, {
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
