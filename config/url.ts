const config = {
  development: "http://localhost:3000",
  production: "https://short-lyyy.vercel.app",
};

const env = process.env.NEXT_PUBLIC_ENV || "development";

export const url = config[env];
