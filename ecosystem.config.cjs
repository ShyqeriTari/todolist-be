module.exports = {
  apps : [{
    name: 'todolist-be',
    script: './src/index.js',
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: "production",
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      key: '~/Downloads/key.pem',
      host : 'silvio.tech-challenges.toduba.it ',
      ref  : 'origin/main',
      repo : 'https://github.com/ShyqeriTari/todolist-be',
      path : '/home/ubuntu/todolist-be-c',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run start && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
