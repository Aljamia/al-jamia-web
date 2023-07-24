"use client";
import axios from "axios";

const BASE_URL = "https://website-builder-api.azurewebsites.net/api/v1/";

export const getAboutUs = async () => {
  const response = await axios.get(`${BASE_URL}/about-us`);
  return response.data;
};

export const getAboutUsGallery = async () => {
  const response = await axios.get(`${BASE_URL}/gallery`);
  return response.data;
};

export const getFaculties = async () => {
  const response = await axios.get(`${BASE_URL}/faculties`);
  return response.data;
};

export const getBoardOfDirector = async () => {
  const response = await axios.get(`${BASE_URL}/boardof-director`);
  return response.data;
};

export const getManagementCommitee = async () => {
  const response = await axios.get(`${BASE_URL}/administrative-council`);
  return response.data;
};

export const getCourse = async () => {
  const response = await axios.get(`${BASE_URL}/course`);
  return response.data;
};

export const certificate = async () => {
  const response = await axios.get(`${BASE_URL}/administrative-council`);
  return response.data;
};
