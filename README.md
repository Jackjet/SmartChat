# SmartChat
基于Node.js和Socket.io构建的简单实时聊天系统。

#step
1.Download and install <a href="https://nodejs.org/en/download/" target="_blank">node.js</a>

    wget https://nodejs.org/dist/v4.2.4/node-v4.2.4-linux-x64.tar.xz
    tar -zxvf ./node-v4.2.4-linux-x64.tar.xz
    cd node-v4.2.4-linux-x64
    ls
    
2.Mkdir work directory

    mkdir /app/chat

3.create package.json file to /app/chat/:

    {
      "name": "realtime-server",
      "version": "0.0.1",
      "description": "my first realtime server",
      "dependencies": {
        "express": "^4.13.3",
        "socket.io": "^1.4.3"
      }
    }

4.exec command: 

    npm install --save express
    npm install --save socket.io

5.create chat.js
    
    vim /app/chat/chat.js

6.exec command

    node chat.js

7.use client js

    chat.init();
	chat.login();
	chat.send('login ....');
	chat.fm('system .....');
	chat.loginout();
