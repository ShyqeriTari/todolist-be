module.exports = {
  apps: [{
    name: 'todolist-be',
    script: './src/index.js',
    watch: true,
    node_args: '-r dotenv/config',
    env: {
      PORT: "42069",
      HOST: "15.160.205.92",
      PASSWORD: "89^eqCR*_p_Ua%g5",
      JWT_SECRET: "todolist_challenge_silvio",
    },
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      key: '~/Downloads/key.pem',
      host: 'silvio.tech-challenges.toduba.it ',
      ref: 'origin/main',
      repo: 'https://github.com/ShyqeriTari/todolist-be',
      path: '/home/ubuntu/todolist-be-s',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 start ecosystem.config.js --env production',
      'pre-setup': '',
      env: {
        PORT: "42069",
        HOST: "15.160.205.92",
        PASSWORD: "89^eqCR*_p_Ua%g5",
        JWT_SECRET: "todolist_challenge_silvio",
      },
    }
  }
};
