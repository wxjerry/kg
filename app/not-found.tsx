// 删除 'use client' 指令，使其成为服务器组件
// 不使用任何客户端钩子或组件

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found / 页面未找到 / Барак табылган жок</h2>
      <p className="mt-2 text-gray-600">
        The page you are looking for does not exist. / 您访问的页面不存在。/ Сиз издеген барак жок.
      </p>
      <a href="/" className="mt-8 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Back to Home / 返回首页 / Башкы бетке кайтуу
      </a>
    </div>
  )
}
