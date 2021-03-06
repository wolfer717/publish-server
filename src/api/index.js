/**
 * Created by Hyl on 2016/11/17.
 */

import * as home from './home'
import * as user from './user'

export const register = (plugin, options, next) => {
    plugin.route([
        {method: 'GET', path: '/test', config: home.test},
        {method: 'GET', path: '/{version}', config: home.hello},
        {method: 'GET', path: '/restricted', config: home.restricted},
        {method: 'GET', path: '/{path*}', config: home.notFound},
        {method: 'POST', path: '/user/login', config: user.login},
        {method: 'GET', path: '/user/login', config: user.isLogin},
    ])

    next()
}

register.attributes = {
    name: 'api'
}