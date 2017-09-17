import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Conditional, Field2 } from 'react-formwork';

export default Field2(TextField, {
    hintText: props => props.placeholder,
    floatingLabelText: props => props.label
});