/*
 * @Author: tanka 
 * @Date: 2023-03-02 20:29:35
 * @LastEditors: tanka 
 * @LastEditTime: 2023-03-02 20:30:04
 * @FilePath: /mono-pnpm-changesets/packages/aa/.fatherrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'father';

export default defineConfig({
  esm: { input: 'lib' },
  cjs: { input: 'lib' },
  prebundle: {},
});