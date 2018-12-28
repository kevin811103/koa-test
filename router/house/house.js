/**
 * 主页子路由
 */

const router = require('koa-router')()
const house = require('../../controllers/house')
const houseController = require("../../controllers/house")


// module.exports = router
//   .get('/', house.aa)

const routers = router
    .get('/a', houseController.aa)
    .get('/b', houseController.bb)
    .get('/', house.aa)


module.exports = routers



    // async bb(ctx) {
    //     ctx.response.body = "12345"

    //     let homeObject = await homeService.getExistOne("234", "1234");
    //     console.log(homeObject)
    // },


    // async aa(ctx) {
    //     ctx.response.body = "12345"

    //     let homeObject = await homeService.getExistOne("234", "1234");
    //     console.log(homeObject)
    // }



// module.exports = router
//   .get('/', house)



//   const userInfoController = require('./../controllers/user-info')

// const routers = router
//   .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
//   .post('/user/signIn.json', userInfoController.signIn)
//   .post('/user/signUp.json', userInfoController.signUp)


// module.exports = routers