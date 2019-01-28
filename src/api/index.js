import axios from 'axios';
import config from '../config';

const { candidatesEndpoint } = config;

const axiosInstance = axios.create();

export const getCandidates = async () => {
  const response = await axiosInstance.get(candidatesEndpoint);
  return response.data.results;
};