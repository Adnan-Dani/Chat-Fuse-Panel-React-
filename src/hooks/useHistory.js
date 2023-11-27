import sortByTime from "../utils/sortByTime";
import useQuestions from "./useQuestions";

const useHistory = () => {
  const userData = useQuestions();

  // Check if the data has been successfully fetched and is not loading
  if (!userData.isLoading && userData.data) {
    const history = sortByTime(
      userData.data.filter((u) => u.history?.length > 0)
    );
    return { history, ...userData };
  }
  return { history: [], ...userData };
};

export default useHistory;
