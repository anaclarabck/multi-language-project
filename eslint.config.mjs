import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";

const eslintConfig = [
  ...nextCoreWebVitals,
  testingLibrary.configs["flat/react"],
  jestDom.configs["flat/recommended"],
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
