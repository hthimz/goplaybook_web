import React from 'react';

import Modal from '../Modal/index';

class AddNewUserModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    render() {
        return (
    <div>
    <button onClick={() => this.setState({ isOpen: true })}>Open</button>
    <Modal isOpen={this.state.isOpen}>
        <h3>Awesome Modal !</h3>
        <button onClick={() => this.setState({ isOpen: false })}>Close</button>
    </Modal>
    </div>
        );
            }  
}

export default AddNewUserModal;