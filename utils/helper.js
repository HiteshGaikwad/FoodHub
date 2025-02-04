export function findSearchText(searchText, allRestraurants) {
  return allRestraurants.filter((restrau) =>
    restrau?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}
