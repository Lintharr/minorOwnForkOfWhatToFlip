import React from "react";
import PropTypes from "prop-types";
import { comparePrice, cost } from "../functions/compareItems";
import { useFindItems } from "../contexts/items";
import { isDefined } from "../functions/utils";

export const Comparison = ({ selectedLeague, comparison }) => {
  const useCompareText = (baseNames, compareNames) => {
    const baseItems = useFindItems(selectedLeague, baseNames);
    const compareItems = useFindItems(selectedLeague, compareNames);

    let text;

    if (baseItems.concat(compareItems).some(item => !isDefined(item))) {
      text = "N/A";
    } else {
      text = comparePrice(baseItems, compareItems);
    }

    return text;
  };

  const useCostText = names => {
    const pieces = names.length;
    const items = useFindItems(selectedLeague, names);

    let chaosProfit = useCompareText(comparison.base, comparison.compare);
    let text;
    if (pieces === 0) {
      text = "";
    } else if (items.some(item => !isDefined(item))) {
      text = "N/A";
    } else {
      let frStart = `<font color = "teal">`;
      let fcStart = `<font color = "red">`;
      let fEnd = "</font>";
      let chaosCost = cost(items);
      let chaosRatio = chaosProfit / chaosCost;
      chaosRatio = Math.round((chaosRatio + 0.00001) * 100) / 100; //don't look at me, this is how js has to handle rounding
      //https://www.reddit.com/r/pathofexiledev/comments/7aiil7/how_to_make_your_own_queries_against_the_official/
      let mainLinkUrl = `https://www.pathofexile.com/trade/search/${selectedLeague}?q={%22query%22:{%22${
        comparison.poeApiItemType
      }%22:%22${comparison.base}%22}}`;
      let mainLinkHtml = ` [<a target="_blank" rel="noopener noreferrer" href="${mainLinkUrl}">goalLINK</a>]`;
      text = `\n${fcStart}Cost: ${cost(
        items
      )} chaos${fEnd}, ${frStart}ratio: ${chaosRatio}${fEnd}${mainLinkHtml}, pieces: ${pieces}`;
      if (pieces === 1 || pieces > 2) {
        let partItemUrl = `https://www.pathofexile.com/trade/search/Heist?q={%22query%22:{%22${
          comparison.poeApiItemType
        }%22:%22${comparison.compare[0]}%22}}`;
        let partItemHtml = ` [<a target="_blank" rel="noopener noreferrer" href="${partItemUrl}">pieceLink</a>]`;
        text = text + partItemHtml;
      }
      if (pieces === 2) {
        // text = text + ` [<em>${names.join(", ")}</em>]`;
        names.forEach(function(name, index) {
          let itemUrl = `https://www.pathofexile.com/trade/search/Heist?q={%22query%22:{%22${
            comparison.poeApiItemType
          }%22:%22${name}%22}}`;
          let itemHtml = ` {<a target="_blank" rel="noopener noreferrer" href="${itemUrl}">link</a>}`;
          // text = text + name + itemHtml;
          names[index] = name + itemHtml;
        });
        text = text + ` [<em>${names.join(", ")}</em>]`;
      }
    }

    return text;
  };

  const ComparisonText = () => {
    let text = `<b>${comparison.name}</b>: `;

    text += `<font color="green">${useCompareText(
      comparison.base,
      comparison.compare
    )} chaos profit</font>`;

    text += useCostText(comparison.compare);

    if (comparison.comment) {
      text += `\n "<font color="grey"><i>${
        comparison.comment
      }</i></font>"\n‌‌ `;
    }

    return text;
  };

  return <label dangerouslySetInnerHTML={{ __html: ComparisonText() }} />;
};

Comparison.propTypes = {
  comparison: PropTypes.object,
  selectedLeague: PropTypes.string
};