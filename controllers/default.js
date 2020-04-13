// ./controllers/default.js

const data = [
    { title: '[0] We Work With All Budgets', content: '[0] Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!'},
    { title: '[1] Take Your Training To The Next Level', content: '[1] Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!'},
    { title: '[2] Group & Individual Training', content: '[2] Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!'},
]

module.exports = {
    index: (req, res) => res.render('default/index', { data }),
    submit: (req, res) => res.render('default/submit')
}