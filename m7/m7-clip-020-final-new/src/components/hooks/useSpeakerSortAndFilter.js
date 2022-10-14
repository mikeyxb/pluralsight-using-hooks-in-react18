export default function useSpeakerSortAndFilter(
  speakerList,
  speakingSaturday,
  speakingSunday,
  searchText
) {
 
  if (!speakerList) {
    return [];
  }

  function getResults(saturday, sunday, search) {
    console.log(saturday, sunday, search);
    let results = speakerList
      .filter(({ sat, sun }) => (saturday && sat) || (sunday && sun))
      .filter(({ firstName, lastName }) => {
        return (
          search.length === 0 ||
          (firstName?.toLowerCase() + lastName?.toLowerCase()).includes(
            search.toLowerCase()
          )
        );
      })
      .sort(function (a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      });
    return results;
  }

  return getResults(speakingSaturday, speakingSunday, searchText);
}
