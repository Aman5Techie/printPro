const userroute = "http://localhost:3000/api/v1/user";
const contentroute = "http://localhost:3000/api/v1/content";

const signup = `${userroute}/signup`;
const userinfo = `${userroute}/userinfo`;
const login = `${userroute}/signin`;
const upload = `${contentroute}/upload`;
const getPdf = `${contentroute}/all`;


export { signup, userinfo, login, upload ,getPdf};
