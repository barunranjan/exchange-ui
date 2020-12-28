import axios from "axios";

export function searchInputType(text) {
  return axios.get(`/eventRegistry/eventName/${text}`);
}
export function createExchange(exchangeData) {
  return axios.post(`exchange`, exchangeData);
}
export function getExchangeById(exchangeId) {
  return axios.get(`exchange/${exchangeId}`);
}
