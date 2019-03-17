import { stringify } from "querystring";

function heyJude() {
    return "Na na na na na na na, na na na na, hey Jude.".repeat(16)
}

function prohibitedLanguage(username) {
    let tada = /candycorn|brusselssprouts/
    return username.search(tada)
}