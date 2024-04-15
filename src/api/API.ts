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
    },
    getUsers(pageNumber: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users/?page=${pageNumber}&count=${pageSize}`)
    },
    getUser(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    followUser(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
    },
    unfollowUser(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    authMe() {
        return instance.get<AuthDataResponseType>(`auth/me`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    changeUserStatus(value: string) {
        return instance.put<any>(`profile/status`, { status: value })
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    },
}

