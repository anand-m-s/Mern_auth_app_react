import axios from 'axios'

const API_URL = '/api/admin/';



// admin login
const login = async (adminData) => {
    const response = await axios.post(API_URL, adminData);
    if (response.data) {
       
       
        localStorage.setItem('admin', JSON.stringify(response.data));
    }
    return response.data;
};





const logout = () => {
    localStorage.removeItem('admin')
    console.log('inside logout admin service')
}




const adminService = {
    logout, login,
};

export default adminService;