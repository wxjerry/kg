// 创建一个捕获所有未匹配路由的页面
// 这是一个服务器组件，不使用任何客户端钩子
export const runtime = 'edge';
import { notFound } from "next/navigation"

export default function CatchAllNotFound() {
  // 调用 notFound() 函数触发 Next.js 的内置 404 处理
  notFound()

  // 这段代码永远不会执行，因为 notFound() 会中断渲染
  return null
}
