const userroute = "http://localhost:3000/api/v1/user";
const contentroute = "http://localhost:3000/api/v1/content";
const doneroute = "http://localhost:3000/api/v1/done";

const signup = `${userroute}/signup`;
const userinfo = `${userroute}/userinfo`;
const login = `${userroute}/signin`;
const upload = `${contentroute}/upload`;
const getOrders = `${contentroute}/getOrders`;
const getAhead = `${contentroute}/getTime`;
const allDone = `${doneroute}/allorders`;
const allOrders = `${contentroute}/allorders`;
const getPdf = `${contentroute}/getPdf`;
const delOrder = `${contentroute}/delOrder`;
const updateStatus = `${contentroute}/updateStatus`;

export {
  updateStatus,
  delOrder,
  allOrders,
  allDone,
  getAhead,
  getOrders,
  signup,
  userinfo,
  login,
  upload,
  getPdf,
};
