module.exports = {
    apps: [
      {
        name: "lottery-app",
        script: "./index.js",
        instances: "max",
        exec_mode: "cluster",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  