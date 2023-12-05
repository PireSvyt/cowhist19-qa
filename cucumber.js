module.exports = {
    default: {
        worldParameters: { 
            appUrl: 'http://localhost:3000/' 
        },
        require: [
            "features/*.js",
            "features/**/*.js",
            "features/steps/*.js",
            "features/steps/**/*.js",
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
            "features/**/*.feature",
            "features/steps/*.js",
            "features/steps/**/*.js",
            "setup/*.js",
            "setup/**/*.js",
            "utils/*.js",
            "utils/**/*.js",
        ]
    }
};