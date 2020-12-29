# Simple tests Deno Runtime

Run java scripts or type scripts directly in the Deno Runtime. This allows you to better understand how the Deno Runtime works with the V8 engine.


<h3> Testes Deno Runtime </h3>

Up (start) microservice:

>% docker-compose up

Stop microservice:

>% docker-compose stop



```sh
DenoRuntime % docker-compose up
Building web
Step 1/6 : FROM hayd/deno:latest
 ---> 4a0547c48eed
Step 2/6 : EXPOSE 8000
 ---> Using cache
 ---> 446cfd76cb3a
Step 3/6 : WORKDIR /app
 ---> Using cache
 ---> f737344db8a9
Step 4/6 : ADD . /app
 ---> a6ea8f5db790
Step 5/6 : RUN deno cache src/server.ts
 ---> Running in 0e41e83ffded
Download https://deno.land/std@0.79.0/http/server.ts
Download https://deno.land/std@0.79.0/http/_io.ts
Download https://deno.land/std@0.79.0/io/bufio.ts
Download https://deno.land/std@0.79.0/encoding/utf8.ts
Download https://deno.land/std@0.79.0/_util/assert.ts
Download https://deno.land/std@0.79.0/async/mod.ts
Download https://deno.land/std@0.79.0/async/mux_async_iterator.ts
Download https://deno.land/std@0.79.0/async/deferred.ts
Download https://deno.land/std@0.79.0/async/pool.ts
Download https://deno.land/std@0.79.0/async/delay.ts
Download https://deno.land/std@0.79.0/http/http_status.ts
Download https://deno.land/std@0.79.0/textproto/mod.ts
Download https://deno.land/std@0.79.0/bytes/mod.ts
Check file:///app/src/server.ts
Removing intermediate container 0e41e83ffded
 ---> 894f63ef02e9
Step 6/6 : CMD ["run", "--allow-net", "src/server.ts"]
 ---> Running in 7b9bacc4121f
Removing intermediate container 7b9bacc4121f
 ---> 753c3923bceb

Successfully built 753c3923bceb
Successfully tagged denoruntime_web:latest
WARNING: Image for service web was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Creating deno_runtime ... done
Attaching to deno_runtime
deno_runtime | Now serving on port 8282 🔥
```

<h4> Testes Webservice: </4>


> curl -s http://localhost:8282

```
DenoRuntime % curl -s http:/localhost:8282
Hello World%   
```


