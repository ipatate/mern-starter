const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://192.168.99.100:27017/mern-starter',
  port: process.env.PORT || 8000,
};

export default config;
