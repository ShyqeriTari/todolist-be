module.exports = {
    apps: [{
      name: "todolist-be",
      script: "./src/index.js",
      watch: true,
      env: {
        "PORT":"42069",
        "HOST":"15.160.205.92",
        "PASSWORD":"89^eqCR*_p_Ua%g5",
        "JWT_SECRET":"todolist_challenge_silvio"
      },
      env_production: {
        "PORT":"42069",
        "HOST":"15.160.205.92",
        "PASSWORD":"89^eqCR*_p_Ua%g5",
        "JWT_SECRET":"todolist_challenge_silvio"
      }
    }],
    deploy: {

      production: {

        user: "ubuntu",

        key: "~/Downloads/key.pem",

        host: ["silvio.tech-challenges.toduba.it"],

        ssh_options: "StrictHostKeyChecking=no",

        ref: "origin/main",

        repo: "https://github.com/ShyqeriTari/todolist-be",

        path: `/home/ubuntu/todolist-be-test`,

        'pre-setup': "sudo apt-get install git; ls -la",

        'post-setup': "npm install",

        'pre-deploy-local': "echo 'This is a local executed command'",

        'post-deploy': "npm install && pm2 reload ecosystem.config.js --env production",
      },
    }
  }