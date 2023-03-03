/*
 * @Author: tanka 
 * @Date: 2023-02-27 16:55:30
 * @LastEditors: tanka 
 * @LastEditTime: 2023-03-03 10:22:53
 * @FilePath: /mono-pnpm-changesets/packages/bb/lib/bb.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from 'react';

class Hs extends Component {
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
                <button onClick={this.handleClick} >点击</button>
            </div>
        )
    }
}

export default Hs;
