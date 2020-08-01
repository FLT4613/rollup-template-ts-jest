import typescript from "@rollup/plugin-typescript";
import html from "@rollup/plugin-html";
import resolve from "@rollup/plugin-node-resolve";
import eslint from "@rbnlffl/rollup-plugin-eslint";

export default {
    input: "src/index.ts",
    output: {
        dir: "output",
        format: "esm",
    },
    plugins: [
        typescript(),
        html(),
        resolve(),
        eslint({
            fix: true
        })
    ],
};
