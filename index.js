const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes')


app.use(express.static('public'))
app.set('view engine', 'ejs')


app.use(routes)

app.use(function (req,res, next) {
    res.status(404).render('404', {title: "ERROR"})
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))