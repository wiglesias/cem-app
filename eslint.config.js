import js from "@eslint/js";

export default [
    js.configs.recommended,

    {
        languageOptions: {
            ecmaVersion: 2021, // Versión de ECMAScript
            sourceType: "module", // Habilita imports y exports
            parserOptions: {
                ecmaFeatures: {
                    jsx: true // Habilita soporte para JSX
                }
            }
        },
        env: {
            browser: true, // Define el entorno de navegador
            es6: true, // Activa las características de ES6
            node: true // Define el entorno de Node.js
        },
        rules: {
            "no-console": "off", // Permite el uso de console.log
            "no-unused-vars": "warn", // Muestra advertencia para variables no usadas
            "no-undef": "warn" // Muestra advertencia para variables no definidas
        }
    }
];
