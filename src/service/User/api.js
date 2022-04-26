import axiosInstance from "../axios";

import API_ROUTES from "./apiRoutes";

const adminData = async () => {
  const adminDataResponse = await axiosInstance.get(API_ROUTES.admin);

  return adminDataResponse.data;
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

export { adminData, postList, postDetail, postComment };
