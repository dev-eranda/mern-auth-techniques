module.exports = {
  apps: [
    {
      name: "app",
      script: "./backend/index.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
    },
  ],
};
