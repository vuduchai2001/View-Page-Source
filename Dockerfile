FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
COPY  . /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]