

  module.exports = {
    HOST: "ec2-44-208-88-195.compute-1.amazonaws.com",
    USER: "vztpcyutwqyauo",
    PASSWORD: "fd33f572b21b40ebd6f7de6b0a53b9c3facee8fe779727b279122ce3fcb6cf47",
    DB: "dc13jpvf1a3mgk",
    PORT: 5432,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };