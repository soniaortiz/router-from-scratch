import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface props<T>{
    mapping: {
        '#profile': JSX.Element,
        '#accounts': JSX.Element,
        '*': JSX.Element,
        [key: string]: JSX.Element
    }
}

interface state{
    hash: string,
}

export class Router extends React.Component<props<string>, state>{
    constructor(props: props<string>){
        super(props)
        this.state = {hash: window.location.hash};
        this.updateHash =  this.updateHash.bind(this);
    }
    updateHash(event : HashChangeEvent){
        this.setState({hash: window.location.hash});
    }
    componentDidMount(){
        window.addEventListener('hashchange', this.updateHash, false);//new url hash values
    }

    componentWillUnmount(){
        window.removeEventListener('hashchange', this.updateHash, false);
    }
 
    render(){
        if(this.props.mapping[this.state.hash])
            return this.props.mapping[this.state.hash];
        return this.props.mapping['*']
    }
}