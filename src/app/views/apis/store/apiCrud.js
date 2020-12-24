import axios from "axios";

export function fetchConfigs() {
  return axios.get(`config`);
}

export function createConfig(configData) {
  return axios.post(`config`, configData);
}
