#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME
git config --local user.name "evel"
git config --local user.email "957010831@qq.com"


git remote rm origin

git remote add origin git@github.com:EvalGitHub/EvalGitHub.github.io.git

# git@gitlab.com:EvalGitHub/evel-blog.git
git checkout -b master

# git branch --set-upstream-to=origin/master master

# 构建
npm run build

# 进入生成的构建文件夹
cd dist

git add -A
git commit -m 'feat: deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -u origin https://github.com/EvalGitHub/EvalGitHub.github.io.git master

# git push -f origin git@github.com:EvalGitHub/EvalGitHub.github.io.git master
git config --local  --list


ssh -oStrictHostKeyChecking=no  git push --set-upstream origin master
# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# https://git.lug.ustc.edu.cn/EvalGitHub/evel-blog ddd
cd -
