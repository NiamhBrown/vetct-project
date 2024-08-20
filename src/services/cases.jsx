const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getCases = async () => {
  const response = await fetch(`${BACKEND_URL}/cases`);

  if (response.status !== 200) {
    throw new Error("Unable to fetch cases");
  }

  const data = await response.json();
  console.log("THIS IS DATA:",data.data)
  return data;
};
