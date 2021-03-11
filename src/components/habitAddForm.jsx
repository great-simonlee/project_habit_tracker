import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();
    formRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
        const habitName = this.inputRef.current.value;
        habitName && this.props.onAdd(habitName);
        this.formRef.current.reset();
    }

    render() {
        return (
            <form className="add-form" ref={this.formRef} onSubmit={this.onSubmit}>
                <input className="add-input" ref={this.inputRef} type="text" placeholder="Enther a habit"/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;