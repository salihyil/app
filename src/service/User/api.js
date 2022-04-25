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
const comments = async ({ postId }) => {
  const queryMemberResponse = await axiosInstance.get(
    `${API_ROUTES.comments}?postId=${postId}`
  );
  console.log(queryMemberResponse);
  return queryMemberResponse.data;
};

export { adminData, postList, comments };
