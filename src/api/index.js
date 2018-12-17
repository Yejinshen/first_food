import ajax from './ajax'
const BASE_URL = '/api'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/positiion/${geohash}`)
// 2、获取食品分类列表
export const reqFoodTypes = () => ajax(`${BASE_URL}/index_category`)
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(`${BASE_URL}/shops`, {longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqShops22 = ({longitude, latitude}) => ajax(`/shops/`)
// 5、获取一次性验证码
export const reqFoodTypes1 = (geohash) => ajax(`positiion/${geohash}`)
// 6、用户名密码登陆
export const reqFoodTypes2 = (geohash) => ajax(`positiion/${geohash}`)
// 7、发送短信验证码
export const reqFoodTypes3 = (geohash) => ajax(`positiion/${geohash}`)
// 8、手机号验证码登陆
export const reqFoodTypes4 = (geohash) => ajax(`positiion/${geohash}`)
// 9、根据会话获取用户信息
export const reqFoodTypes5 = (geohash) => ajax(`positiion/${geohash}`)
// 10、用户登出
export const reqFoodTypes6 = (geohash) => ajax(`positiion/${geohash}`)
