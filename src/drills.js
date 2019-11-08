require('dotenv').config();
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

// DRILL 1

// function searchByProductName(searchTerm) {
//       knexInstance
//       .select('id', 'name', 'price', 'date_added', 'checked', 'category')
//       .from('shopping_list')
//       .where('name', 'ILIKE', `%${searchTerm}%`)
//       .then(result => {
//         console.log(result)
//       })
//     }
    
//     searchByProductName('fish')

// DRILL 2

// function paginateProducts(page) {
//   const productsPerPage = 6
//   const offset = productsPerPage * (page - 1)
//   knexInstance
//   .select('id', 'name', 'price', 'date_added', 'checked', 'category')
//   .from('shopping_list')
//   .limit(productsPerPage)
//   .offset(offset)
//   .then(result => {
//     console.log(result)
//   })
// }

// paginateProducts(3)

// DRILL 3

// function productsAddedDaysAgo(daysAgo) {
//     knexInstance
//       .select('id', 'name', 'price', 'date_added', 'checked', 'category')
//       .from('shopping_list')
//       .where(
//         'date_added',
//         '>',
//         knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo)
//       )
//       .then(results => {
//         console.log('PRODUCTS ADDED DAYS AGO')
//         console.log(results)
//       })
//   }
  
//   productsAddedDaysAgo(5)
  
// DRILL 4

  function costPerCategory() {
    knexInstance
      .select('category')
      .sum('price as total')
      .from('shopping_list')
      .groupBy('category')
      .then(result => {
        console.log('COST PER CATEGORY')
        console.log(result)
      })
  }
  
  costPerCategory()
