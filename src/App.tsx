import React = require('react');
import axios = require('axios');

interface Props {
    content?: string;
}

export default class App extends React.Component<Props, {}> {

    componentDidMount() {
        axios.get('/fr-en.json')
            .then(function(response) {
                console.log(response);
            })
    }

    render() {
        return <h1>Hello world</h1>
    }
}
