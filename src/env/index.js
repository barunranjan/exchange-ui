const dev = {
  apiUrl: "http://localhost:8000/admin",
  simulatorUrl: "http://localhost:9000/simulator",
};

const prod = {
  apiUrl: "/admin",
  simulatorUrl: "/simulator",
};

export const env = process.env.NODE_ENV === "production" ? prod : dev;
