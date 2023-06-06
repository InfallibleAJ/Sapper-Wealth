import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/",
 realm: "Sapper_ReactJS",
 clientId: "spreading-rc",
});

export default keycloak;