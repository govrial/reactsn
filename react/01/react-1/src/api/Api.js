import * as Axios from 'axios';




const instance = Axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '2e78686f-357a-427d-a04a-90fdb9d548f1'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

})

export const userAPI = {

    getUsers(currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow(userID) {
        return instance.post(`follow/${userID}`)
    },

    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
    },

    getProfile(userId) {
        return profileAPI.getProfile(userId)

    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)

    } ,

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status   })
    }
}

export const authAPI = {
    me () {
       return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout () {
        return instance.delete('auth/login')
    }

} 


