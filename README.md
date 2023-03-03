<!--
 * @Author: tanka 
 * @Date: 2023-01-17 10:52:15
 * @LastEditors: tanka 
 * @LastEditTime: 2023-03-03 15:47:26
 * @FilePath: /mono-pnpm-changesets/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# mono-pnpm-changesets
基于pnpm+changesets构建monorepo

## 根目录下装包
pnpm i -Dw xxx 

## 单独的包安装
pnpm -F @hs/bb add moment


## build packages/*
pnpm --filter "@hs/*" run build

## todo

1. lerna create @hs/xx 模版没办法自定义，需要自己写脚本

