import { serve } from "https://deno.land/std@0.79.0/http/server.ts";

const server = serve({ port: 8282 });

console.log("Now serving on port 8282 🔥");

for await (const req of server) {
    req.respond({ body: "Hello World"});
}