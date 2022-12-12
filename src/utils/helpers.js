export const exercises_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const exercises_URL = "https://exercisedb.p.rapidapi.com/exercises";

export const fetchData = async (url, option) => {
  try {
    const req = await fetch(url, option);
    const data = await req.json();
    if (!req.ok) throw new Error("something went wrong");

    return data;
  } catch (error) {
    return { error: error.message };
  }
};
