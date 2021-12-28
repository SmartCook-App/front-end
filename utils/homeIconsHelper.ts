
import { HomeIconTypes } from "../redux/types/homeIconsTypes";

export const updateFilters = (iconsArray: HomeIconTypes[], updatedFilter: HomeIconTypes): HomeIconTypes[] => {
  const newIconsArray = iconsArray.map((icon: HomeIconTypes) => {
    if (icon.id === updatedFilter.id) {
      return updatedFilter;
    } else {
      return icon;
    }
  });
  return newIconsArray;
};