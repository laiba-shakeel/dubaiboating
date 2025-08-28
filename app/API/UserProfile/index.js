import axios from 'axios';

const API_BASE = "https://api.dubaiboating.com/public/api";

// ================= User Get By ID =================
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};  

// ================= User Edit Profile =================
export const updateUserProfile = async ({ userId, username, email, phone }) => {
  try {
    const response = await axios.put(`${API_BASE}/users/${userId}`, {
      user_id: userId,
      username,
      email,
      phone,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

// ================= Add / Update Phone =================
export const updateUserPhone = async ({ userId, phone }) => {
  try {
    const response = await axios.put(`${API_BASE}/users/${userId}/phone`, {
      user_id: userId,
      phone,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating phone:", error);
    throw error;
  }
};

// ================= Update Password =================
export const updateUserPassword = async ({ userId, oldPassword, newPassword }) => {
  try {
    const response = await axios.put(`${API_BASE}/users/${userId}/password`, {
      user_id: userId,
      old_password: oldPassword,
      new_password: newPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
};
