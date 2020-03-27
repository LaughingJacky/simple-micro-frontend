/**
 * @file root.component.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 13:03:06
 * @modify date 2020-03-27 13:03:06
 */
import {Component} from 'inferno';
import {createElement} from 'inferno-create-element';
import custom from './custom-element';

export default class extends Component {
    render() {
        return <div>Hello from {
            createElement(custom, {name: 'inferno'})
        }</div>;
    }
}
