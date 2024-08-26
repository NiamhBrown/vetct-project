const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Makes a call to the /cases endpoint to return a single case.
 * @param caseId The Id of the case being requested.
 * @returns a Promise that returns a case object.
 */
export const getCase = async (caseId) => {
  let url = `${BACKEND_URL}/cases/${caseId}`;

  const response = await fetch(url);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Unable to fetch case with ${caseId}`);
  }
  console.log(response);
  const singleCase = data.data;

  return singleCase;
};

/**
 * Makes a call to the /cases endpoint to return a paginated list of cases.
 * @param currentPage The current page number the user is on.
 * @returns a Promise that returns an array of cases.
 */
export const getPaginatedCases = async (currentPage) => {
  let url = `${BACKEND_URL}/cases?page=${currentPage}`;

  const response = await fetch(url);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Unable to fetch cases on page ${currentPage}`);
  }

  const cases = data.data;
  const totalPages = data.totalPages;

  return { cases, totalPages };
};
