/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'

/**
 * Auth route
 */
Route.post('/auth/login', 'AuthController.login')

/**
 * User route
 */
Route.post('/users/create', 'UsersController.create')
Route.patch('/users/update', 'UsersController.updateById')
Route.get('/users/read', 'UsersController.readById')
Route.get('/users/readAll', 'UsersController.readAll')
Route.delete('/users/delete', 'UsersController.delete')
