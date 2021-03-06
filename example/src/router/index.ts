import { Router } from 'tarojs-router'
import { AuthCheck } from './middleware/auth-check'
import { FetchInfo } from './middleware/fetch-info'

export * from './route'
export * from './router'

Router.config({
  middlewares: [AuthCheck, FetchInfo]
})
