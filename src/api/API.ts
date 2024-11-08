import axios from "axios";
import {AuthResponseType, GetResponseType, ProfileResponseType} from "../types";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '44a071cc-f831-40fc-8141-8f5b7b76d4c8',
    },
})

export const API = {
    getUsers(currentPage: number, usersPerPage: number) {
        return instance.get<GetResponseType>(`users?page=${currentPage}&count=${usersPerPage}`)
            .then(response => response.data)
    },
    authMe() {
        return instance.get<AuthResponseType>(`auth/me`).then(response => response.data)
    },
    getUserProfile(userId: number) {
        return instance.get<ProfileResponseType>(`profile/${userId}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
}