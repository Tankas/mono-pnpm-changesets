/*
 * @Author: tanka 
 * @Date: 2023-03-03 16:00:48
 * @LastEditors: tanka 
 * @LastEditTime: 2023-03-03 17:20:04
 * @FilePath: /mono-pnpm-changesets/.dumirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineConfig } from 'dumi';

export default defineConfig({
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  
  resolve: {
    docDirs: [
      'dumi/docs'
    ],
    atomDirs: [
      { type: 'component', dir: 'packages/' },
    ]
  }
});
