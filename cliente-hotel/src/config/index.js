import axios from "axios";

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

/*
const SERVER_URL = isLocalhost
  ? "http://localhost:8000/api"
  : "https://apiingles.editorialminuevomundo.com/api/v1";

  */
 const SERVER_URL = "https://apipruebadv.editorialminuevomundo.com/api";

export const clienteAxios = axios.create({
    baseURL: `${SERVER_URL}`,
    headers: {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});
