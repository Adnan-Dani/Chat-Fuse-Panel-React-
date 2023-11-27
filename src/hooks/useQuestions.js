import { useQuery } from "@tanstack/react-query";
import QueryVariables from "../constants";
import http from "./../services/HttpService";

const useQuestions = () =>
  useQuery({
    queryKey: [QueryVariables.QUESTIONS],
    queryFn: () =>
      http.get(QueryVariables.QUESTIONS).then((res) =>
        res.data.map((d) => ({
          id: d.id,
          name: d.userInfo ? d.userInfo.name : "N/A",
          email: d.userInfo ? d.userInfo.email : "N/A",
          profile: d.userInfo ? d.userInfo.profile : "N/A",
          ...d,
        }))
      ),
    staleTime: 3 * 24 * 60 * 60 * 1000, // 3 days
  });

export default useQuestions;
