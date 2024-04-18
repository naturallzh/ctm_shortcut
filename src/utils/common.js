import { ElMessage } from 'element-plus'

const copyToclipboard = (val) => {
  navigator.clipboard.writeText(val)
  ElMessage({
    message: '复制成功 使用 ctrl+v 进行粘贴',
    type: 'success',
  })
}

export default {
  copyToclipboard
}