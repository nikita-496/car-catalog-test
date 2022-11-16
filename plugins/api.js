import config from "~/config/config";


export default function ({ $axios }) {
  $axios.setHeader("Authorization", config.token);

  $axios.setHeader("Content-Type", "application/json;charset=UTF-8");

  $axios.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  $axios.setHeader("Access-Control-Allow-Credentials", true);
}

// https://carapi.app/api
// Бесплатный набор данных ограничен автомобилями 2020 года.
const createRequestURL = (url) => `${url}?year=2020`;

const api = {
  makes: "makes",
  models: createRequestURL("models"),
  trims: createRequestURL("trims"),
  bodies: createRequestURL("bodies"),
  egnines: createRequestURL("egnines"),
  colors: {
    exterior: createRequestURL("exterior-colors"),
    interior: createRequestURL("interior-colors"),
  },
  mileages: createRequestURL("mileages"),
  vehicleAttributes: "vehicle-attributes",
};

export { api as API };
