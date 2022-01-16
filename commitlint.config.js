module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    rules: {
        "type-case": [2, "always", ["lower-case"]],
        "type-enum": [
            2, 
            "always", 
            ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test", "button"]
        ],
        "subject-case": [2, "always", ["lower-case", 'camel-case']],
        "subject-max-length": () => [2, "always", 75],
    }
}