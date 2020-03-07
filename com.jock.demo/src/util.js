import storage from "@system.storage";
import file from "@system.file";
import shortcut from "@system.shortcut";
import prompt from "@system.prompt";
import { list } from "@system.contact";

// 文件存储路劲
const filePath = "internal://files/favorite_menu/list.txt";

/**
 * 显示菜单
 */
function showMenu() {
  const prompt = require("@system.prompt");
  const router = require("@system.router");
  const appInfo = require("@system.app").getInfo();
  prompt.showContextMenu({
    itemList: ["添加到桌面", "返回首页", "隐私政策", "取消"],
    success: function(ret) {
      switch (ret.index) {
        case 0:
          // 创建图标
          createShortcut();
          break;
        case 1:
          // 关于
          router.push({
            uri: "/",
            params: {
              // show_ad: false
            }
          });
          break;
        case 2:
          // 隐私
          router.push({
            uri: "/Yinsi",
            params: {
              // show_ad: false
            }
          });
          break;
        case 3:
          // 取消
          break;
        default:
          prompt.showToast({
            message: "error"
          });
      }
    }
  });
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut() {
  const prompt = require("@system.prompt");
  const shortcut = require("@system.shortcut");
  shortcut.hasInstalled({
    success: function(ret) {
      if (ret) {
        prompt.showToast({
          message: "已创建桌面图标"
        });
      } else {
        shortcut.install({
          success: function() {
            prompt.showToast({
              message: "成功创建桌面图标"
            });
          },
          fail: function(errmsg, errcode) {
            prompt.showToast({
              message: `创建图标失败，请检查是否开启权限并手动创建。`,
              duration: 1
            });
          }
        });
      }
    }
  });
}

// 4，判断字段是否是中文字符串
function isChinese(str) {
  let reg = /^[\u4e00-\u9fa5]+$/;
  return reg.test(str);
}

// 存 storage
function setStorage(key, value) {
  let val = value;

  if (typeof value !== "string") {
    val = JSON.stringify(value);
  }
  return storage.set({
    key,
    value
  });
}

// 读取 storage
function getStorage(key) {
  return storage.get({
    key: key
  });
}

// 删除存储
function delStorage(key) {
  return storage.delete({
    key: key
  });
}

// 写入文件信息
function writeFile(path, info) {
  return file.writeText({
    uri: path,
    text: info
  });
}

// 读取文件信息
function readFile(path) {
  return file.readText({
    uri: path
  });
}

// 删除缓存
function delFile(path) {
  return file.delete({
    uri: path
  });
}

// 图标状态
function hasIcon() {
  return shortcut.hasInstalled({});
}

/**
 *
 * @param { number } 数字
 * @returns { number } 返回 0 到 n 之间的随机数，不含 n
 */
function randomNum(n) {
  return Math.floor(Math.random() * n);
}

/**
 * @description 获取当前时间戳
 * @returns { number } 数字 ：时间戳
 */
function curTimestamp() {
  return new Date().getTime();
}

/**
 * @description 计算是否从后台切入前台
 * @returns { boolean }  boolean
 */
function fromBackstage(pagesInfo = {}, lastpagesInfo) {
  return (
    pagesInfo.showTime - lastpagesInfo.hideTime > 5000 &&
    lastpagesInfo.name &&
    lastpagesInfo.name === pagesInfo.name
  );
}

// list 返回顶部
function scrollToTop(el){
  el.scrollTo({ index: 0,smooth:true });
}


//数组随机排序
function shuffle(arr) { 
 
  let i = arr.length; 

  while (i) { 

      let j = Math.floor(Math.random() * i--);  //5555

      [arr[j], arr[i]] = [arr[i], arr[j]]; 

  } 

} 

export default {
  showMenu,
  createShortcut,
  isChinese,
  getStorage,
  setStorage,
  delStorage,
  writeFile,
  readFile,
  filePath,
  delFile,
  hasIcon,
  randomNum,
  curTimestamp,
  fromBackstage,
  scrollToTop,
  shuffle
};
