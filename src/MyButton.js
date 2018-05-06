import React, { Component } from 'react';

const MyButton = ({ children, onClick }) => <button onClick={onClick} >{children}</button>

export default MyButton;