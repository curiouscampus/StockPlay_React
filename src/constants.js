let server;

if (window.location.hostname.indexOf("localhost") !== -1) {
  server = "http://localhost:9001";
} else {
  server = window.location.origin;
}

export const serverUrl = server;
