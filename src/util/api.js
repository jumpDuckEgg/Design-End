import api from './http.js'

export default {
    //用户登录
    userLogin(params){
        return api.post('/login', params).then(res => res.data); 
    },
    // 用户注册
    userRegister(params){
        return api.post('/register',params).then(res => res.data);
    },
    //获取用户信息
    getAllUsers(){
        return api.get('/user');
    },
    //获取上传token
    getUploadToken(params){
        return api.post('/uploadtoken',params).then(res => res.data);
    },
    // 创建课程
    createCourse(params){
        return api.post('/course/createcourse',params).then(res => res.data);
    },
    //获取全部课程
    findAllCourse(){
        return api.get('/course/findallcourse').then(res => res.data);
    }

}