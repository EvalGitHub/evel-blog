(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{413:function(t,a,v){t.exports=v.p+"assets/img/git_command.f549b020.png"},414:function(t,a,v){t.exports=v.p+"assets/img/git_branch.1908c2ba.png"},505:function(t,a,v){"use strict";v.r(a);var e=v(28),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git基本操作"}},[t._v("#")]),t._v(" git基本操作")]),t._v(" "),e("p",[e("img",{attrs:{src:v(413),alt:"avatar"}})]),t._v(" "),e("h2",{attrs:{id:"版本控制初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本控制初始化"}},[t._v("#")]),t._v(" 版本控制初始化")]),t._v(" "),e("blockquote",[e("p",[t._v("git init")])]),t._v(" "),e("p",[t._v("项目代码文件中会生成 .git 文件，称之为版本库，自动创建master分支，并且将HEAD指针指向master分支")]),t._v(" "),e("h2",{attrs:{id:"配置基础信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置基础信息"}},[t._v("#")]),t._v(" 配置基础信息")]),t._v(" "),e("p",[t._v("可分为：仓库级（--local）， 全局(用户)级（--global），系统级（--system），优先级依次降低")]),t._v(" "),e("ul",[e("li",[t._v("仓库：当前仓库目录下 .gitconfig")]),t._v(" "),e("li",[t._v("全局：用户名目录下 .gitconfig")]),t._v(" "),e("li",[t._v("系统：git安装目录下 .gitconfig")])]),t._v(" "),e("p",[t._v("查看方式：")]),t._v(" "),e("blockquote",[e("p",[t._v("这种文件一般是被隐藏的，如果需要查看mac上 command+shift+ '.' 即可查看")])]),t._v(" "),e("p",[t._v("查看配置信息：")]),t._v(" "),e("blockquote",[e("p",[t._v("git config --[local|global|system] --list")])]),t._v(" "),e("p",[t._v('如果使用的是vscode，强烈推荐"git-autoconfig"插件；')]),t._v(" "),e("h2",{attrs:{id:"git代码区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git代码区"}},[t._v("#")]),t._v(" git代码区")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("工作区：写代码的地方")])]),t._v(" "),e("li",[e("p",[t._v("暂存区：写完代码，**git add ."),e("strong",[t._v("将文件添加到暂存区，从此不用担心")]),t._v("ctrl+z/git checkout .**代码撤销了")])]),t._v(" "),e("li",[e("p",[t._v("本地仓库：使用**git commit -m 'feat: some msg'**将代码提交到本地仓库")])]),t._v(" "),e("li",[e("p",[t._v("远程仓库：使用"),e("strong",[t._v("git push")]),t._v("将代码添加到远程仓库（git/gitlab/....）")])])]),t._v(" "),e("h2",{attrs:{id:"分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),e("h3",{attrs:{id:"查看分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[t._v("#")]),t._v(" 查看分支")]),t._v(" "),e("ul",[e("li",[t._v("所有分支 git branch -a")]),t._v(" "),e("li",[t._v("本地分支 git branch")]),t._v(" "),e("li",[t._v("远程分支 git branch -r")])]),t._v(" "),e("h3",{attrs:{id:"分支处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支处理"}},[t._v("#")]),t._v(" 分支处理")]),t._v(" "),e("p",[e("img",{attrs:{src:v(414),alt:"avatar"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("单纯的切分支")]),t._v(" "),e("blockquote",[e("p",[t._v("git checkout featture_name")])])]),t._v(" "),e("li",[e("p",[t._v("创建并且切换分支")]),t._v(" "),e("blockquote",[e("p",[t._v("git checkout -b feature_name")])])]),t._v(" "),e("li",[e("p",[t._v("删除本地/远程分支")]),t._v(" "),e("blockquote",[e("p",[t._v("git branch -d feature_name")])]),t._v(" "),e("blockquote",[e("p",[t._v("git push origin -d feature_name")])])]),t._v(" "),e("li",[e("p",[t._v("分支重命名")]),t._v(" "),e("blockquote",[e("p",[t._v("git branch -m oldbranch-name newbranch-name")])])]),t._v(" "),e("li",[e("p",[t._v("拉取远程分支")]),t._v(" "),e("blockquote",[e("p",[t._v("git checkout -b 本地分支名x origin/远程分支名x")])]),t._v(" "),e("p",[t._v("// 另外一种方式,也可以完成这个操作。")]),t._v(" "),e("blockquote",[e("p",[t._v("git fetch origin branch-name:local-branch-name")])])]),t._v(" "),e("li",[e("p",[t._v("分支合并")]),t._v(" "),e("blockquote",[e("p",[t._v("git merge/rebase")])])])]),t._v(" "),e("p",[t._v("—no-ff: 会将被合并分支上的提交信息都展示出来，在目标分支上不会出现提交节点")]),t._v(" "),e("p",[t._v("—squash: 将多个提交信息进行汇总合并(不会把多个提交信息展示出来)，会在目标分支上创建新的commit节点")]),t._v(" "),e("blockquote",[e("p",[t._v("--no-ff指的是强行关闭fast-forward方式。")])]),t._v(" "),e("blockquote",[e("p",[t._v("fast-forward方式就是当条件允许的时候，git直接把HEAD指针指向合并分支的头，完成合并。属于“快进方式”，不过这种情况如果删除分支，则会丢失分支信息。因为在这个过程中没有创建commit")])]),t._v(" "),e("blockquote",[e("p",[t._v("git merge --squash 是用来把一些不必要commit进行压缩，比如说，你的feature在开发的时候写的commit很乱，那么我们合并的时候不希望把这些历史commit带过来，于是使用--squash进行合并，此时文件已经同合并后一样了，但不移动HEAD，不提交。需要进行一次额外的commit来“总结”一下，然后完成最终的合并。")])]),t._v(" "),e("blockquote",[e("p",[t._v("总结：\n--no-ff：不使用fast-forward方式合并，保留分支的commit历史\n--squash：使用squash方式合并，把多次分支commit历史压缩为一次")])]),t._v(" "),e("h3",{attrs:{id:"rebase-merge的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rebase-merge的区别"}},[t._v("#")]),t._v(" rebase/merge的区别？")]),t._v(" "),e("p",[t._v("// TODO:")]),t._v(" "),e("h2",{attrs:{id:"撤销操作-reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销操作-reset"}},[t._v("#")]),t._v(" 撤销操作[reset]")]),t._v(" "),e("p",[t._v("提交步骤的撤退，会撤销过程中的所有提交记录")]),t._v(" "),e("ul",[e("li",[t._v("如果修改一些文件，但是又不想进行保存或者提交；丢弃单个文件")])]),t._v(" "),e("blockquote",[e("p",[t._v("git checkout fileName")])]),t._v(" "),e("p",[t._v("如果想丢弃所有的文件，")]),t._v(" "),e("blockquote",[e("p",[t._v("git checkout .")])]),t._v(" "),e("ul",[e("li",[t._v("如果发现之前的代码提交错了分支，想回退")])]),t._v(" "),e("blockquote",[e("p",[t._v("git reset --[soft|hard] HEAD~n 根据步骤数进行撤退")])]),t._v(" "),e("blockquote",[e("p",[t._v("git reset --[soft|hard] commitHash 根据提交记录的hash值，直接跳到指定的某一个提交;常用于git reset —hard 失误操作的恢复")])]),t._v(" "),e("p",[t._v("commitHash 可以根据git reflog进行查看，他记录了你的每一次操作")]),t._v(" "),e("h2",{attrs:{id:"撤销操作-revert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销操作-revert"}},[t._v("#")]),t._v(" 撤销操作[revert]")]),t._v(" "),e("p",[t._v("Git revert commitHash 根据提交记录进行撤销，不会丢失过程中的其他提交记录，和reset的区别是，reset比较常用的是根据步骤数进行撤退；")]),t._v(" "),e("h2",{attrs:{id:"文件暂存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件暂存"}},[t._v("#")]),t._v(" 文件暂存")]),t._v(" "),e("p",[t._v("在项目开发时，经常会遇到开发了一些功能，需要切换分支去修改另一个分支上的紧急bug；有两种方式可以解决这个问题。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("方案一：创建一个本地新分支，将更改提交，然后在合并")])]),t._v(" "),e("li",[e("p",[t._v("方案二：git stash的使用")])])]),t._v(" "),e("blockquote",[e("p",[t._v("git stash save 'feat: somemsg'")])]),t._v(" "),e("p",[t._v("git stash 可以同时使用多次，使用 "),e("strong",[t._v("git stash list")]),t._v(" 查看多条记录；每条记录可以通过stash@(id)区分；")]),t._v(" "),e("p",[t._v("如果在多次操作的时候发现其中一次的暂存是不想保存的，可使用"),e("strong",[t._v("git stash drop stash@{id}")])]),t._v(" "),e("p",[t._v("如果想清除所有的存储记录 "),e("strong",[t._v("git stash clear")]),t._v(";")]),t._v(" "),e("p",[t._v("恢复自己想要的 "),e("strong",[t._v("git stash pop stash@{id}")])]),t._v(" "),e("p",[t._v("git stash pop 应用最近的一次暂存 & 删除暂存记录； git stash apply 应用最近的一次暂存，不会删除， git stash pop 等于 git stash apply + git stash pop")]),t._v(" "),e("h2",{attrs:{id:"复制-cherry-pick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制-cherry-pick"}},[t._v("#")]),t._v(" 复制[cherry-pick]")]),t._v(" "),e("p",[t._v("在一个分支上开发了某些功能，想着迁移到另一个分支")]),t._v(" "),e("blockquote",[e("p",[t._v("Gti cherry-pick 从一个分支复制到另一个分支")])]),t._v(" "),e("ul",[e("li",[t._v("git cherry-pick com1Hash  复制一个提交")]),t._v(" "),e("li",[t._v("git cherry-pick com1Hash commitHash 复制2个提交")]),t._v(" "),e("li",[t._v("git cherry-pick commit1^..commit2 区间复制")])]),t._v(" "),e("h2",{attrs:{id:"查看-操作仓库信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-操作仓库信息"}},[t._v("#")]),t._v(" 查看/操作仓库信息")]),t._v(" "),e("p",[t._v("查看仓库地址")]),t._v(" "),e("blockquote",[e("p",[t._v("git remote -v")])]),t._v(" "),e("p",[t._v("仓库关联")]),t._v(" "),e("blockquote",[e("p",[t._v("git remote add origin")])]),t._v(" "),e("h2",{attrs:{id:"设置短指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置短指令"}},[t._v("#")]),t._v(" 设置短指令")]),t._v(" "),e("p",[t._v("例如：")]),t._v(" "),e("p",[t._v("方式一：")]),t._v(" "),e("blockquote",[e("p",[t._v("git config --global alias.ps push")])]),t._v(" "),e("p",[t._v("方式二：")]),t._v(" "),e("ol",[e("li",[t._v("打开配置文件 vim ~/.gitconfig")]),t._v(" "),e("li",[t._v("写入内容")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[alias] \n  co = checkout\n  ps = push\n  pl = pull\n  mer = merge --no-ff\n  cp = cherry-pick\n")])])]),e("p",[t._v("参考："),e("a",{attrs:{href:"https://www.cnblogs.com/evaling/p/9159047.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("git基本操作"),e("OutboundLink")],1),t._v(" , "),e("a",{attrs:{href:"https://juejin.im/post/6869519303864123399#heading-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("一劳永逸,一张脑图带你掌握Git命令"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://juejin.cn/post/7071780876501123085#heading-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("5条提高效率的git命令"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=_.exports}}]);