// 创建一个react上下文,从顶层将内容全部包裹起来
// 这样我们就能强制所有子组件与其余组件保持同步
// 我们使用React.useContext
import React from 'react';
const Context = React.createContext()

export default Context