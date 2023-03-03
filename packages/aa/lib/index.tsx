/*
 * @Author: tanka 
 * @Date: 2023-02-27 16:54:36
 * @LastEditors: tanka 
 * @LastEditTime: 2023-03-03 17:27:53
 * @FilePath: /mono-pnpm-changesets/packages/aa/lib/aa.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from 'react';

class HsAA extends Component {
    constructor(props) {
        super(props);
        console.log('hs')
    }

    handleClick() {
        console.log('click')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} >1231</button>
            </div>
        )
    }
}

export default HsAA;
