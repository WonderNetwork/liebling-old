/**
 * highlight.js Robot Framework syntax highlighting definition
 *
 * @see https://github.com/isagalaev/highlight.js
 *
 * @package: highlightjs-robot
 * @author:  Harri Paavola <harri.paavola@gmail.com>
 * @since:   2019-08-05
 */
var module = module || {}; function hljsDefineRobot (e) { var n = { className: "variable", begin: /\$\{/, end: /\}/ }; return { case_insensitive: !0, aliases: ["robot", "rf"], keywords: "Settings Keywords [Return] [Teardown] [Timeout] [Setup] [Tags] [Arguments] [Documentation]", contains: [{ className: "number", begin: /\$\{([0-9])/, end: /\}/ }, n, { className: "variable", begin: /\&\{/, end: /\}/ }, { className: "variable", begin: /\@\{/, end: /\}/ }, { className: "section", begin: /^(\*{1,3})/, end: /$/ }, { className: "attribute", begin: /^(Library|Resource|Test Timeout|Test Template|Test Teardown|Test Setup|Default Tags|Force Tags|Variables|Suite Setup|Suite Teardown)(?:( )|( \| ))/, end: /$| {2,}|\t/, contains: [n], relevance: 10 }, { className: "comment", begin: /^\s*\[?Documentation\]?\s+/, end: /$/ }, { className: "comment", begin: /^\.\.\./, end: /$/ }, { className: "name", begin: /(^([^*| |\t|\n)]))\w/, end: /($|\s{2,})/, contains: [n] }, { className: "comment", begin: /(^| {2,}|\t|\| {1,})#/, end: /$/ }, { className: "built_in", begin: /^\s+\[(Tags|Setup|Teardown|Template|Timeout|Arguments|Return)\]/, end: /$| {2,}|\t/, contains: [n], relevance: 10 }, { className: "comment", variants: [{ begin: /^\s{2,}given/, end: /\s/ }, { begin: /^\s{2,}when/, end: /\s/ }, { begin: /^\s{2,}then/, end: /\s/ }, { begin: /^\s{2,}and/, end: /\s/ }] }] } } module.exports = function (e) { e.registerLanguage("robot", hljsDefineRobot) }, module.exports.definer = hljsDefineRobot;