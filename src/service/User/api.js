import axiosInstance from "../axios";

import API_ROUTES from "./apiRoutes";

const adminData = async () => {
  const queryMemberResponse = await axiosInstance.get(API_ROUTES.admin);

  return queryMemberResponse.data;
};
const postList = async () => {
  const queryMemberResponse = await axiosInstance.get(API_ROUTES.posts);

  return queryMemberResponse.data;
};

export { adminData, postList };
