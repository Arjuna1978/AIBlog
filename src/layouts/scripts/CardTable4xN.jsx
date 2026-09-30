/**
@file CardTable4XN.jsx
@component

A flexible card table component. In our demo I use it for our feature list

@returns {HTML} The complete page HTML skeleton ready for the body to be filled
*/

import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";
import config from "@/config/config.json"

const basePath = config.site.base_path
//Code that stepst through the list of SKFL features to be displayed on the homepage
const CardTable4xN = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <a
            key={i}
            href={basePath + item.link}
            class={`flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg
              hover: }`}
          >
            <div>
              <h3 className="h4 text-xl lg:text-2xl">{item.title}</h3>
              <p>{item.content}</p>
            </div>
            <span className="icon mt-4">
              <FeatherIcon />
            </span>
          </a>
        );
      })}
    </div>
  );
};


export default CardTable4xN;
