import axios from "axios";
import { AuthDataResponseType, GetUsersResponseType, ResponseType } from "../types";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '4e5fa66a-7057-4e21-83cd-4056273fcd0e',
    }
})

export const API = {
    getAllUsers() {
        return instance.get<GetUsersResponseType>(`users`)
            .then(response => response)
    },
    getUsers(pageNumber: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users/?page=${pageNumber}&count=${pageSize}`)
            .then(response => response)
    },
    followUser(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(response => response)
    },
    unfollowUser(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(response => response)
    },
    authMe() {
        return instance.get<AuthDataResponseType>(`auth/me`)
            .then(response => response)
    },
}

