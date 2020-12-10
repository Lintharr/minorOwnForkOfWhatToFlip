import { typeConfig } from "./poe-ninja";

export const cost = items => {
  let value = 0;

  for (const item of items) {
    const compareKey = typeConfig()[item.type].compare_key;
    value += getItemValue(item, compareKey);
  }

  return Math.round(value);
};

function getItemValue(item, itemCompareKey) {
  var itemValue;
    if (!itemCompareKey.includes('.')) {
      itemValue = item[itemCompareKey];
    } else {
      var depthNodes = itemCompareKey.split('.');
      var currentDepthNode = item;
      for (let index = 0; index < depthNodes.length; index++) {
        currentDepthNode = currentDepthNode[depthNodes[index]];
      }
      itemValue = currentDepthNode;
    }
    return itemValue;
}

export const comparePrice = (baseItems, compareItems) => {
  let value = 0;

  for (const baseItem of baseItems) {
    const baseItemCompareKey = typeConfig()[baseItem.type].compare_key;
    value += getItemValue(baseItem, baseItemCompareKey);
  }

  for (const compareItem of compareItems) {
    const compareItemCompareKey = typeConfig()[compareItem.type].compare_key;
    value -= getItemValue(compareItem, compareItemCompareKey);
  }

  return Math.round(value);
};