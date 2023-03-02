/*
 * @Author: tanka 
 * @Date: 2023-03-02 20:41:24
 * @LastEditors: tanka 
 * @LastEditTime: 2023-03-02 20:41:32
 * @FilePath: /mono-pnpm-changesets/packages/bb/.fatherrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'father';

export default defineConfig({
  esm: { input: 'lib' },
  cjs: { input: 'lib' },
  prebundle: {},
});