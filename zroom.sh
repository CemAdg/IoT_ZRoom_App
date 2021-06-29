#!/bin/bash
echo -e '\n\e[1m\e[31mKILL PROCESS ON PORT 5000\e[0m\n'
sudo kill -9 `sudo lsof -t -i:5000`
sudo kill -9 `sudo lsof -t -i:3000`

echo -e '\n\e[1m\e[34mSTART SERVER\e[0m\n'
source backend/env/bin/activate
python3 backend/app.py &

echo -e '\n\e[1m\e[34mSTART ZRoom APP\e[0m\n'
cd frontend && npm start
