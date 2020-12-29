FROM hayd/deno:latest

EXPOSE 8000

WORKDIR /app

ADD . /app

RUN deno cache src/server.ts

CMD ["run", "--allow-net", "src/server.ts"]