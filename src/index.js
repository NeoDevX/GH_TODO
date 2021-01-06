import ReactDom from 'react-dom';
import { App } from './components/app';
import './index.css'

const root = document.querySelector('#root');

ReactDom.render(<App />, root);
