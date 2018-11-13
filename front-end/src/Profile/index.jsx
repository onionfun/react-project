import React, {Component} from "react";
import { Form, Label, Button } from "semantic-ui-react";
// import { Label, Button, Input, Modal, Form, ModalFooter, ModalBody, ModalHeader, FormGroup} from "reactstrap";

export default class Profile extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         modal: false
    //     }
    // }
    // toggle(){
    //     this.setState({
    //         modal: !this.state.modal
    //     })
    // }
    render(){
        return(
            <div>
                <h1>Edit Your Profile</h1>
                <Form onSubmit={this.props.submitEdits}>
                    <Label>
                        username:
                        <Form.Input onChange={this.props.handleInputs} name="username" value={this.props.username}/>
                    </Label>
                    <Label>
                        password:
                        <Form.Input onChange={this.props.handleInputs} name="password" value={this.props.password}/>
                    </Label>
                    <Label>
                        location:
                        <Form.Input onChange={this.props.handleInputs} name="location" value={this.props.location}/>
                    </Label>
                        <Form.Input type="hidden" name="id" value={this.props.id}/>
                    <br/>
                    <Button color="yellow" type="submit">Submit changes</Button>
                </Form>
                {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit Your Profile</ModalHeader>
                        <Form onSubmit={this.props.submitEdits}>
                    <ModalBody>
                            <FormGroup>
                                <Label>username:</Label>
                                <Input onChange={this.props.handleInputs} name="username" value={this.props.username}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    password:
                                </Label>
                                <Input onChange={this.props.handleInputs} name="password" value={this.props.password}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    location:
                                </Label>
                                <Input onChange={this.props.handleInputs} name="location" value={this.props.location}/>
                            </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                            <FormGroup>
                                <Button color="primary" type="submit">Submit Changes</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </FormGroup>
                    </ModalFooter>
                        </Form> 
                </Modal> */}
            </div>
        )
    }
}