import { format, parseISO, compareAsc } from "date-fns";
function sortByTime(users = []) {
  const sortedUsers = users.map((user) => {
    const sortedHistory = user.history?.sort((a, b) => {
      const timeA = parseISO(
        format(new Date(a.time._seconds * 1000), "yyyy-MM-dd'T'HH:mm:ss")
      );
      const timeB = parseISO(
        format(new Date(b.time._seconds * 1000), "yyyy-MM-dd'T'HH:mm:ss")
      );
      return compareAsc(timeA, timeB);
    });

    return { ...user, history: sortedHistory };
  });

  return sortedUsers;
}
export default sortByTime;
