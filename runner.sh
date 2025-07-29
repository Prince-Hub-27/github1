#!/bin/bash

echo "Choose an app to run:"
echo "1) React App"
echo "2) Python App"
echo "3) Spring Boot App"
read -p "Enter your choice (1/2/3): " choice

case $choice in
  1)
    git stash
    git checkout react-branch
    git pull origin react-branch
    cd e-market
    npm install
    npm start
    ;;
  2)
    git stash
    git checkout python-branch
    git pull origin python-branch
    cd python-app/app.py
    pip install -r requirements.txt
    python3 main.py
    ;;
  3)
    git stash
    git checkout springboot-branch
    git pull origin springboot-branch
    cd simple-springboot-app
    ./mvnw spring-boot:run
    ;;
  *)
    echo "Invalid option"
    ;;
esac
