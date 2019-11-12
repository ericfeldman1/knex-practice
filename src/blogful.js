require('dotenv').config()

const knex = require('knex')
const ArticlesService = require('./articles-service')
const ShoppingListService = require('./shopping-list-service')


const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})

// // use all the ArticlesService methods!!
// ArticlesService.getAllArticles(knexInstance)
//   .then(articles => console.log(articles))
//   .then(() =>
//     ArticlesService.insertArticle(knexInstance, {
//       title: 'New title',
//       content: 'New content',
//       date_published: new Date(),
//     })
//   )
//   .then(newArticle => {
//     console.log(newArticle)
//     return ArticlesService.updateArticle(
//       knexInstance,
//       newArticle.id,
//       { title: 'Updated title' }
//     ).then(() => ArticlesService.getById(knexInstance, newArticle.id))
//   })
//   .then(article => {
//     console.log(article)
//     return ArticlesService.deleteArticle(knexInstance, article.id)
//   })

  
// use all the ShoppingListService methods!!
ShoppingListService.getAllItems(knexInstance)
.then(items => console.log(items))
.then(() =>
  ShoppingListService.insertItem(knexInstance, {
    name: 'New name',
    price: 'New price',
    date_added: new Date(),
    checked: "New checked status",
    category: "New category"
  })
)
.then(newItem => {
  console.log(newItem)
  return ShoppingListService.updateItem(
    knexInstance,
    newItem.id,
    { name: 'Updated name' }
  ).then(() => ShoppingListService.getById(knexInstance, newItem.id))
})
.then(item => {
  console.log(item)
  return ShoppingListService.deleteItem(knexInstance, item.id)
})
