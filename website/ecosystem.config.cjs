/** @type {import('pm2').ProcessEnv} */
module.exports = {
  apps: [
    {
      name: "scrapnet",
      cwd: "/var/www/scrapnet/website",
      script: "npm",
      args: "run preview -- --host 127.0.0.1 --port 4000",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
