import { ElMessage } from 'element-plus'

const copyToclipboard = (val) => {
  navigator.clipboard.writeText(val)
  ElMessage({
    message: '复制成功 使用 ctrl+v 进行粘贴',
    type: 'success',
  })
}

const openUrl = (url, target = '_blank') => {
  window.open(url, target)
}

const addZero = (num) => {
  if (num < 0 || num > 9) {
    return `${num}`
  } else {
    return `0${num}`
  }
}

export default {
  copyToclipboard,
  openUrl,
  addZero,
}