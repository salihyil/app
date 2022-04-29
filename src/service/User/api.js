import axiosInstance from "../axios";

import API_ROUTES from "./apiRoutes";

const userData = async (userEmail) => {
  const usersDataResponse = await axiosInstance.get(
    `${API_ROUTES.users}?email=${userEmail}`
  );

  return usersDataResponse.data;
};

const postList = async () => {
  const postListResponse = await axiosInstance.get(API_ROUTES.posts);

  return postListResponse.data;
};

const postDetail = async ({ postId }) => {
  const postDetailResponse = await axiosInstance.get(
    `${API_ROUTES.posts}/${postId}`
  );

  return postDetailResponse.data;
};

const postComment = async ({ postId }) => {
  const postCommentResponse = await axiosInstance.get(
    `${API_ROUTES.posts}/${postId}/comments`
  );

  return postCommentResponse.data;
};

export { userData, postList, postDetail, postComment };
