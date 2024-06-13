import axios from "./axiosInstance";

const ApiService = {
  Products: {},
  Users: {
    async login(email, password) {
      return axios.post("/users/login", { email, password });
    },
    async register(
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      creditNumber,
      cvc,
      experationDate,
      country,
      city,
      street,
      houseNumber,
      floor,
      apartment
    ) {
      const user = {
        firstName,
        lastName,
        phoneNumber,
        creditCard: {
          cvc,
          creditNumber,
          experationDate,
        },
        address: {
          city,
          country,
          street,
          houseNumber,
          floor,
          apartment,
        },
        email,
        password,
      };
      return await axios.post("/users/register", user);
    },
  },
  Orders: {},
};
export { ApiService };
