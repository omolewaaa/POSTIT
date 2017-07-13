const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./component/App');
//const ZipForm from './ZipForm';
/*class HelloWorld extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}
*/
ReactDOM.render(
    <App />,
	document.getElementById('root'),

	class aapp extends React.Component {
  render() {
    return (
      <div className='app'>
        <App />
      </div>
    );
  }
},
	);
export default aapp;
