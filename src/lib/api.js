import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// Item requests

export function getAllItems() {
  return axios.get(`${baseUrl}/items/`)
}

export function getSingleItem(id) {
  return axios.get(`${baseUrl}/items/${id}`)
}

export function createDino(formdata) {
  return axios.post(`${baseUrl}/items/`, formdata, {
    headers: { Authorization: `Bearer ${getToken()}` },
  })
}

// Authorization Requests //

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/auth/login/`, formdata)
}

// Misc Comments //

export function createComment(id, formdata) {
  return axios.post(`${baseUrl}/items/${id}`, formdata, headers())
}

export function getComments(id, formdata) {
  return axios.get(`${baseUrl}/items/${id}`, formdata, headers())
}

export function submitComment(id, formdata) {
  return axios.post(`${baseUrl}/items/${id}/comments/`, formdata, headers())
}