
  export function findSearchText(searchText,allRestraurants){
    return allRestraurants.filter((restrau)=> restrau?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
  }

   