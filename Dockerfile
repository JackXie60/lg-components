# Dockerfile
FROM node:14
WORKDIR /app
COPY . /app

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
RUN npm install

CMD echo $SERVER_NAME && $AUTHOR_NAME && npm run serve

# 环境变量
ENV SERVER_NAME='editor-server'
ENV AUTHOR_NAME='xiexu'
