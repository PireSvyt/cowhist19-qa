module.exports = {
    default: {
        worldParameters: { 
            appUrl: 'http://localhost:3000/' 
        },
        require: [
            "features/*.js",
            "features/**/*.js",
            "features/project-object/*.js",
            "features/project-object/**/*.feature",
            "features/step-definitions/*.js",
            "features/step-definitions/**/*.js",
            "setup/*.js",
            "setup/**/*.js",
            "utils/*.js",
            "utils/**/*.js",
        ],
        "cucumber.features": [
            "features/*.feature",
            "features/**/*.feature"
        ],
        "cucumber.glue": [
            "features/*.js",
            "features/**/*.js",
            "features/project-object/*.js",
            "features/project-object/**/*.feature",
            "features/step-definitions/*.js",
            "features/step-definitions/**/*.js",
            "setup/*.js",
            "setup/**/*.js",
            "utils/*.js",
            "utils/**/*.js",
        ]
    }
};