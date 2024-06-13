import axios from "./axiosInstance";

const ApiService = {
  Products: {
    async fetchProducts() {
      return axios.get("/products/");
    },
  },
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
    async addToCart(productID, userID) {
      const quantity = 1;
      return axios.post("/users/cart", { productID, quantity, userID });
    },
    async removeFromCart(productID, userID) {
      return axios.delete(`/users/${userID}/cart/${productID}`);
    },
  },
  Orders: {},
};
export { ApiService };
