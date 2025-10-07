import { serveDir, serveFile } from "@std/http/file-server";

Deno.serve({ port: 8080 }, (req: Request) => {
  const pathname = new URL(req.url).pathname;
  if (pathname == "/index.html") {
    return serveFile(req, "./index.html");
  }

  if (pathname.startsWith("/")) {
    return serveDir(req, {
      fsRoot: ".",
      urlRoot: "",
    });
  }

  return new Response("404: Not Found", {
    status: 404,
  });
});
