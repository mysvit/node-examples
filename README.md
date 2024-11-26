# Hacker Rank & Code Games

# Hacker Rank by JavaScript
Debug with chrome://inspect/#devices
```shell
node --inspect-brk index.js
```

# Install NodeJS 20 on Debian 12
```shell
# Using Debian, as root
apt update
apt install -y ca-certificates curl gnupg
mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list

apt install nodejs -y
```

# Codin Game by TypeScript old node
run by nodejs with ts-node
```shell
npm install -g ts-node
```
Debug in Webstorm
From the main menu, choose Run | Edit Configurations, then in the Edit Configurations dialog, click the Add button on the toolbar and select Node.js from the list. The Run/Debug Configuration: Node.js dialog opens.

In the Node Parameters field, add <b>--require ts-node/register</b>
