import { host } from './HOST'

export const Urls = {
  // ----------省市区----------
  // 省
  getProvice: host + '/address/province.do?t=' + Date.now(),
  // 市
  getCity: host + '/address/city.do?t=' + Date.now(),
  // 区
  getArea: host + '/address/area.do?t=' + Date.now(),
  // ----------登录相关接口----------
  // 登录
  login: host + '/login.do?t=' + Date.now(),
  // 登出
  logout: host + '/logout.do?t=' + Date.now(),
  // 获取菜单列表
  menuList: host + '/admin/menu/getAllMenuList.do?t=' + Date.now(),
  // ----------货源与车源----------
  // 初级货源
  getPrimarySource: host + '/admin/quickCargo/viewCargo.do?t=' + Date.now(),
  // 高级货源
  getSeniorSource: host + '/VhbGoodsSenior/goodsSeniorList.do?t=' + Date.now()
}
