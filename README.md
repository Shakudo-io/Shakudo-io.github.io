# Shakudo-io.github.io
Shakudo Documentation

## To test locally

1. install nvm if not already installed
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
source ~/.bashrc
command -v nvm  # should return nvm 
```
2. install latest node 
```
nvm install node
node -v # show the version of node installed
```

3. Copy your build files from the [docusaurus repo](https://github.com/devsentient/documentation_v2).

At the top of the repo, run
```
npm install http-server -g
```

Then run
```
http-server
```
