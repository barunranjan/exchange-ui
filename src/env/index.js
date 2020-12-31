const dev = {
  apiUrl: "http://localhost:8000/admin",
  exchangeUrl: "http://localhost:7000",
};

const prod = {
  apiUrl: "/admin",
  exchangeUrl: "http://localhost:7000",
};

export const env = process.env.NODE_ENV === "production" ? prod : dev;
