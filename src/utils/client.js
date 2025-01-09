import axios from 'axios';
import { baseUrl } from '../config/api';

export const client = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    withCredentials: true
});

const get = client.get;
const post = client.post;
const put = client.put;
const patch = client.patch;
const del = client.delete;

export { get, post, put, patch, del };