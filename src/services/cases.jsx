const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getCases = async () => {
    let allCases = [];
    let currentPage = 1;
    let totalPages;
  
    try {
      do {
        const response = await fetch(`${BACKEND_URL}/cases?page=${currentPage}`);
        if (!response.ok) {
          throw new Error("Unable to fetch cases");
        }
  
        const data = await response.json();
        allCases = [...allCases, ...data.data];
  
        totalPages = data.totalPages
  
        currentPage += 1;
      } while (currentPage <= totalPages); 

      return allCases;
    } catch (error) {
      console.error("Error fetching cases:", error);
      throw error; 
    }
  };