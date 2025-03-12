/** @type {import('tailwindcss').Config} */
module.exports = {

  // 制定Tailwind CSS 扫描的文件路径
  // 确保只在这些文件中使用的类名才会被编译到最终的 CSS 文件中
  // 这样Tailwind只会生成在项目代码中实际使用过的CSS样式，减少不必要的CSS体积提高性能
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],

  // 允许你扩展 Tailwind 的默认主题（如颜色、间距、字体等）
  theme: {
    extend: {
	    colors: {
			primary: "#1DA1F2", // 例如这样添加一个主色调
		}
    },
  },

  // 这里是扩展 Tailwind 功能的地方，比如 @tailwindcss/forms 等官方插件
  // 这里的是全局扩展 Tailwind CSS 的功能，类似于安装插件来增强 Tailwind 的能力。
  // 可以使用官方或社区插件，比如：
  //  - `@tailwindcss/forms`（优化表单样式）
  //  - `@tailwindcss/typography`（优化文章排版）
  //  - `@tailwindcss/aspect-ratio`（提供更好的图片比例控制）
  plugins: [
	require('@tailwindcss/forms'),
  ],
};