import React from "react";

const defaults = {
  queryString: "&widgetType=popup",
  utf8: "✓",
  widgetType: "popup",
  buttonType: "text",
  buttonText: "Support",
  buttonColor: "white",
  buttonBg: "#006063",
  alignment: "4",
  offset: "235px",
  formHeight: "500px"
}

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const renderedOptions = JSON.stringify({ ...defaults, ...pluginOptions });
  const snippet = `FreshWidget.init("", ${renderedOptions});`;
  setHeadComponents([
    <script 
      type="text/javascript" 
      src="http://assets.freshdesk.com/widget/freshwidget.js"
      key="plugin-freshdesk-include"
    />,
    <script
      key="plugin-freshdesk"
      dangerouslySetInnerHTML={{ __html: snippet }}
    />,
  ]);
};
