import axios from "axios";

export const GetCompanyStaff = async (companyId) => {
  try {
    const response = await axios.get(`https://api.alsalons.com/public/api/company/staff/${companyId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching company staff:', error);
    throw error;
  }
};

export const GetCompanyServices = async (companyId) => {
  try {
    const response = await axios.get(`https://api.alsalons.com/public/api/company/services/${companyId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching company services:', error);
    throw error;
  }
};

export const GetAvailableStaff = async (staffId) => {
  try {
    const response = await axios.get(`https://api.alsalons.com/public/api/staff/appointments/${staffId}`);
    console.log("Available staff response for staffId:", staffId, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching available staff:', error);
    throw error;
  }
};