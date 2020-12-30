import axios from "axios";

const fetchDummyData = (page, sizePerPage) => {
  // return Array.apply(0, new Array(sizePerPage)).map((ex, i) => ({
  //   id: (page - 1) * sizePerPage + i + 1,
  //   name: "dummyName " + ((page - 1) * sizePerPage + i + 1),
  //   description: "this is dummy description",
  //   inputType: ["duumy1", "dummy2"],
  //   outputType: ["duumy1", "dummy2"],
  // }));

  return [
    {
      id: 103,
      apiName: "My API Name",
      apiDesc: "Some Description",
      inputParams: [
        {
          paramName: "my_param",
          paramType: "event-type-1",
        },
      ],
      outputParams: [
        {
          paramName: "my_resp-1",
          paramType: "event-type-2",
        },
      ],
    },
    {
      id: 103,
      apiName: "My Another API Name",
      apiDesc: "Some Description",
      inputParams: [
        {
          paramName: "my_param",
          paramType: "event-type-1",
        },
      ],
      outputParams: [
        {
          paramName: "my_resp-1",
          paramType: "event-type-2",
        },
      ],
    },
  ];
};

export function fetchExchangeApiList(page, sizePerPage) {
  // return axios.get(`exchange`, {
  //   params: {
  //     page,
  //     sizePerPage,
  //   },
  // });

  return Promise.resolve({
    content: fetchDummyData(page, sizePerPage),
    pageable: {
      sort: {
        sorted: false,
        unsorted: true,
        empty: true,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 1,
      paged: true,
      unpaged: false,
    },
    totalPages: 100,
    totalElements: 100,
    last: false,
    number: 0,
    sort: {
      sorted: false,
      unsorted: true,
      empty: true,
    },
    size: 1,
    numberOfElements: 1,
    first: true,
    empty: false,
  });
}
export function searchInputType(text) {
  return axios.get(`/eventRegistry/eventName/${text}`);
}
export function createExchange(exchangeData) {
  return axios.post(`exchange`, exchangeData);
}
export function getExchangeById(exchangeId) {
  return axios.get(`exchange/${exchangeId}`);
}
