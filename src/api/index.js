import ajax from './ajax'
// const BASE_URL = 'http://local:4000'
const BASE_URL = '/api'
/**
 * 获取地址信息(根据经纬度串)
 * 这个接口的经纬度参数是在url路径里的，没有query参数
 */
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`)
/**
 * 获取 msite 页面食品分类列表
 */
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
/**
 * 获取 msite 商铺列表(根据query参数：经纬度)
 * 将经纬度两个数据作为一个参数对象传入
 * 也可以两个数据分别传入ajax， 然后再放入一个对象参数内， 如下面的手机号接口
 */
export const reqShops = ({latitude, longitude}) => ajax(BASE_URL + '/shops', {latitude, longitude})// 4、根据经纬度和关键字搜索商铺列表
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
