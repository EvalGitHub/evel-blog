#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 构建
npm run build

# 进入生成的构建文件夹
cd dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME
git config --global user.name "EvalGitHub"
git config --global user.email "957010831@qq.com"


git add -A
git commit -m 'feat: deploy'



# 如果你想要部署到 https://<USERNAME>.github.io
git push -f origin git@github.com:EvalGitHub/EvalGitHub.github.io.git master

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# https://git.lug.ustc.edu.cn/EvalGitHub/evel-blog
cd -