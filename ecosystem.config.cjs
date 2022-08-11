module.exports = {
  apps: [{
    name: "todolist-be",
    script: "./src/index.js",
  }],
  deploy: {
    // "production" is the environment name
    production: {
      // SSH user
      user: "silvio",
      // SSH key path, default to $HOME/.ssh
      key: "~/Documents/ssh-keys-silvio.pem",
      // SSH host
      host: ["15.160.205.92"],
      // SSH options with no command-line flag, see 'man ssh'
      // can be either a single string or an array of strings
      ssh_options: "StrictHostKeyChecking=no",
      // GIT remote/branch
      ref: "origin/main",
      // GIT remote
      repo: "git@github.com/ShyqeriTari/todolist-be",
      // path in the server
      path: "/var/www/my-repository",
      // Pre-setup command or path to a script on your local machine
      'pre-setup': "apt-get install git ; ls -la",
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      'post-setup': "ls -la",
      // pre-deploy action
      'pre-deploy-local': "echo 'This is a local executed command'",
      // post-deploy action
      'post-deploy': "npm install",
    },
  }
}