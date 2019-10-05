## vue-webpack的使用
### 项目解构介绍

- public是静态资源文件，存放着index.html这个页面的模板，还存放一些不需要通过webpack去打包处理的静态资源
- index.html页面模板文件
- favicon.ico项目小图标
- src源代码文件夹，存放的东西都需要被webpack处理
- assets 静态资源文件，可以被webpack处理
- App.vue 是vue的单文件组件，一般使用它作为万年老二组件，这种后缀名的文件需要通过转换器进行转换，vue-loader
- index.js 项目入口文件
- .gitignore git提交的忽略文件
- README.md 项目的介绍文件
- webpack.config.js 是webpack的配置文件
