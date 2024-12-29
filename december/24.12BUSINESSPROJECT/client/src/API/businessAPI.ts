import axios from "axios";
import { IBusiness } from "@/types/Type";
const BASE_URL = `http://localhost:3000/api/businesses`;

interface QueryParams {
  [key: string]: string;
}

// Get all businesses
export const getAllBusinesses = async (): Promise<IBusiness[]> => {
  const response = await axios.get(`${BASE_URL}`);

  return response.data.data;
};

// Get business by ID
export const getBusinessById = async (id: string): Promise<IBusiness> => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Get businesses of specific owner
export const getBusinessesOfOwner = async (
  ownerId: string,
  token: string
): Promise<IBusiness[]> => {
  const response = await axios.get(`${BASE_URL}/owner/${ownerId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Create a new business
export const createBusiness = async (
  businessData: IBusiness
): Promise<IBusiness> => {
  const response = await axios.post(`${BASE_URL}`, businessData, {
    withCredentials: true,
  });
  return response.data;
};

// Edit a business
export const editBusiness = async (
  id: string,
  businessData: Partial<IBusiness>
): Promise<IBusiness> => {
  const response = await axios.put(`${BASE_URL}/${id}`, businessData, {
    withCredentials: true,
  });
  return response.data;
};

// Delete a business
export const deleteBusiness = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`, {
    withCredentials: true,
  });
};
// Search businesses
export const searchBusinesses = async (
  queryParams: QueryParams = {}
): Promise<IBusiness[]> => {
  const query = new URLSearchParams(queryParams).toString();
  const response = await axios.get(`${BASE_URL}/search?${query}`);
  return response.data;
};

// Add business to favorites
export const addBusinessToFavorites = async (
  businessId: string
): Promise<void> => {
  try {
    await axios.post(
      `${BASE_URL}/favorites/add/${businessId}`,
      {},
      { withCredentials: true }
    );
  } catch (error) {
    console.error("Error adding business to favorites:", error);
    throw error;
  }
};

// Remove business from favorites (make sure it returns void, not any)
export const removeBusinessFromFavorites = async (
  businessId: string
): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/favorites/remove/${businessId}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.error("Error removing business from favorites:", error);
    throw error;
  }
};
