import { searchInputType } from "../views/Exchange/store/exchangeCrud";

export const handleSearchInput = (inputValue) => {
  if (!inputValue || inputValue.length < 3) return Promise.resolve([]);
  return new Promise((resolve) => {
    searchInputType(inputValue)
      .then((resp) => {
        const result = Array.isArray(resp.data) ? resp.data : [resp.data];
        console.log(result);
        resolve(
          result.map((proto) => ({
            label: proto,
            value: proto,
          }))
        );
      })
      .catch((err) => {
        resolve([]);
      });
  });
};
