const template = (variables, { tpl }) => {
  return tpl`
${variables.imports.slice(1)};
import { SVGProps } from 'react';
${variables.interfaces};
const ${variables.componentName} = (${variables.props}: SVGProps) => (
  ${variables.jsx}
);
 
${variables.exports};
`;
};

module.exports = template;
