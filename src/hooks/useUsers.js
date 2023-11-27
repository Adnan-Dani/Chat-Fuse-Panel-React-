import { useQuery } from "@tanstack/react-query";
import QueryVariables from "../constants";
import http from "./../services/HttpService";

const useUsers = () =>
  useQuery({
    queryKey: [QueryVariables.USERS],
    queryFn: () => http.get(QueryVariables.USERS).then((res) => res.data),
    staleTime: 3 * 24 * 60 * 60 * 1000, // 3 days
  });

export default useUsers;
