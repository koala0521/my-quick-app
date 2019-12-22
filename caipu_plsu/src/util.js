import storage from '@system.storage';

/**
 * 显示菜单
 */
function showMenu () {
  const prompt = require('@system.prompt')
  const router = require('@system.router')
  const appInfo = require('@system.app').getInfo()
  prompt.showContextMenu({
    itemList: ['创建图标', '关于', '取消'],
    success: function (ret) {
      switch (ret.index) {
      case 0:
        // 创建图标
        createShortcut()
        break
      case 1:
        // 关于
        router.push({
          uri: '/About',
          params: {
            name: appInfo.name,
            icon: appInfo.icon
          }
        })
        break
      case 2:
        // 取消
        break
      default:
        prompt.showToast({
          message: 'error'
        })
      }
    }
  })
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut () {
  const prompt = require('@system.prompt')
  const shortcut = require('@system.shortcut')
  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        })
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({
              message: '成功创建桌面图标'
            })
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({
              message: `${errcode}: ${errmsg}`
            })
          }
        })
      }
    }
  })
}

// 4，判断字段是否是中文字符串
function isChinese(str) {
  let reg = /^[\u4e00-\u9fa5]+$/
  return reg.test(str)
}

// 存 storage
function setStorage(key , value){
  let val = value;

  if( typeof value !== 'string' ){
    val = JSON.stringify( value )
  }  
  return storage.set({
    key,
    value
  })
}


// 读取 storage
function getStorage(key){
  return storage.get({
    key: key
  })
}

// 删除存储
function delStorage( key ){
  return storage.delete({
    key: key
  })  
}



export default {
  showMenu,
  createShortcut,
  isChinese,
  getStorage,
  setStorage,
  delStorage
}
