import CONSTANTS from "../constants";

export const fillArray = () => {
  for (let index = 1; index <= CONSTANTS.MAX_VALUE_CARDS; index++) {
    CONSTANTS.ARRAY_CARDS.CARDS.push(index);
  }
  for (let index = 1; index <= CONSTANTS.MAX_VALUE_CARDS_PRO; index++) {
    CONSTANTS.ARRAY_CARDS.CARDS_PRO.push(index);
  }
}