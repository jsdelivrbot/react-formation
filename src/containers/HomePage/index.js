import React, { Component } from 'react';
import Form, { TextInput, Checkbox, Switch, Select, RadioGroup, Radio, Button } from 'components/index';
import { ComposedForm } from 'react-formwork';

class HomePage extends Component {
    constructor(page) {
        super(page);
        page.register(this);
    }

    componentDidMount() {
       // this.setState({redraw4: true});
    }

    onChange(event, index, value) {
        console.log('this', form);
        console.log('this', this.form());
    }

    render() {
        const items = [
            {
                value: 'phone',
                label: 'Phone'
            },
            {
                value: 'email',
                label: 'Email'
            }
        ];
        const form = this.page.form;
        return (
            <Form name="home">
                <TextInput
                    name="suburb"
                    placeholder="suburb"
                    label="suburb"
                />
                <RadioGroup name="salutation" required >
                    <Radio value="mr" label="Mr" />
                    <Radio value="mrs" label="Mrs" />
                    <Radio value="ms" label="Ms" />
                </RadioGroup>
                <TextInput
                    name="name"
                    required
                    placeholder="Type your name here"
                    label="Name"
                />
                <button
                    onClick={this.onChange.bind(this)}
                    />
                <Select required options={items} label="Contact method" name="contactMethod" />
                <TextInput
                    name="email"
                    required
                    email
                    placeholder="Type your email here"
                    label="E-mail"
                />
                <Switch
                    name="postalAddress"
                    label="Is your postal different than address?"
                />
                <Checkbox
                    name="over18"
                    label="Are you over 18 years old?"
                />
                <Button type="submit" primary label="Submit" disabled={!form.$ready} />
            </Form>
        );
    }
}

export default ComposedForm(HomePage);