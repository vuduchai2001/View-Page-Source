# hacking

> This project try to block user from viewing its source by using \"View Page Source\" on browser

# How to setup

- Clone the source code to server

  ```bash
  $ docker build -t <IMAGE_NAME> .
  ```

  ```bash
  $ docker run --name <CONTAINER_NAME> -d -p <PORT>:80 --restart always <IMAGE_NAME>
  ```

- Copy the setup from my `nginx.default.conf` to your Nginx config file

- Start your Nginx and go to your domain/IP and test
