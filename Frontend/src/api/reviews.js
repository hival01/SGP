import axios from "axios";
import config from "../config.json";

export const getReviewOfProduct = async (productId) => {
  const response = await axios.get(
    `http://${config.server.HOST}:${config.server.PORT}/api/products/${productId}`
  );
  return response.data.reviews;
};

export const getIdOfUser = async (productId) => {
  const response = await axios.get(
    `http://${config.server.HOST}:${config.server.PORT}/api/products/${productId}`
  );
  return response.data.email;
};

export const addReviewOfProduct = async (productId, comment, email) => {
  await axios.post(
    `http://${config.server.HOST}:${config.server.PORT}/api/products/${productId}`,
    {
      // TODO:- Change the email
      email,
      comment,
    }
  );
};
