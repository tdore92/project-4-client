import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// Dino and Misc requests

export function getAllDinos() {
  return axios.get(`${baseUrl}/dinosaurs`)
}

export function getSingleDino(id) {
  return axios.get(`${baseUrl}/dinosaurs/${id}`)
}

export function getAllMiscs() {
  return axios.get(`${baseUrl}/miscs`)
}

export function getSingleMisc(id) {
  return axios.get(`${baseUrl}/miscs/${id}`)
}

export function createDino(formdata) {
  return axios.post(`${baseUrl}/dinosaurs/`, formdata, {
    headers: { Authorization: `Bearer ${getToken()}` },
  })
}

// Authorization Requests //

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}

// Misc Comments //

export function createComment(id, formdata) {
  return axios.post(`${baseUrl}/miscs/${id}`, formdata, headers())
}

export function getComments(id, formdata) {
  return axios.get(`${baseUrl}/miscs/${id}`, formdata, headers())
}

export function submitComment(id, formdata) {
  return axios.post(`${baseUrl}/miscs/${id}/comments`, formdata, headers())
}