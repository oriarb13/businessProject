import axios from "axios";

export const getAllPoke = async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100"); // מגבלת פוקימונים
    return data.results; // מחזיר את הפוקימונים
  } catch (error) {
    console.error(error);
  }
};

export const getPokemon = async (url) => {
  try {
    const { data } = await axios.get(url); // מבצע קריאה לפוקימון ספציפי
    return data;
  } catch (error) {
    console.error(error);
  }
};
