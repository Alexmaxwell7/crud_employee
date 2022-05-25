import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:5000/api';

export const getemployee = async () => {
    return await axios.get(`${usersUrl}/getemployee`);
}
export const getemployeeByid = async (id) => {
    return await axios.get(`${usersUrl}/getemployeebyId/${id}`);
}
export const removeemployee = async (id,user) => {
    return await axios.put(`${usersUrl}/removeemployee/${id}`,user);
}
export const updateemployee = async (id,user) => {
    return await axios.put(`${usersUrl}/updateemployee/${id}`,user);
}
export const insertemployee = async (user) => {
    return await axios.post(`${usersUrl}/insertemployee`,user);
}

