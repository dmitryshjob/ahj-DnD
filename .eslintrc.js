module.exports =
{


    "env": {
        "browser": true, // Разрешить запуск кода в браузере
        "commonjs": true, // Разрешить commonJS
        "es6": true, // Включает синтаксис ES6 автоматически
        "node": true, // Разрешить запуск кода в node
        "jest": true,
    },

    "extends": ["eslint:recommended",
        "plugin:react/recommended"], // Включить React плагин
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true // Разрешить формат JSX
        },
        "ecmaVersion": 2018, // Указываем версию ECMAScript
        "sourceType": "module" // Включить модульную поддержку кода ECMAScript
    },
    "plugins": [ // Включить поддержку плагинов
        "react",
        "babel"
    ],
    "rules": { // Задать правила игнорирования типичных ошибок
        "no-unused-vars": ["error", {"caughtErrorsIgnorePattern": "^ignore"}],
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": "error",

        "linebreak-style": [ // Применять согласованный стиль переноса строки
            "error",
            "windows"
        ],
        "babel/new-cap": 1, // Игнорирует заглавные буквы
        "babel/camelcase": 1, // Названия переменных в camelCase стиле
        "babel/no-invalid-this": 1, // Запретить ключевое слово this в названии классов
        "babel/object-curly-spacing": 1, // Одинаковый интервал внутри фигурных скобок
        "babel/semi": 1, // Точка с запятой на конце
        "babel/no-unused-expressions": 1, // Запретить неиспользуемые выражения
        "babel/valid-typeof": 1 // Сравнение выражений с допустимыми строками
    },
    "settings": {
        "react": {
            "version": "^7.30.0"
        }
    },

};
