import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {DateTime} from "luxon";
import './style.scss'

class NotesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesList: [],
            noteId: 0,
            title: '',
            text: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearInputs = () => {
        this.setState({
            title: '',
            text: ''
        })
    }

    postNotes = () => {
        //here we make some network POST request (for example with axios) with this.state.notesList
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {noteId, title, text, notesList} = this.state;
        const noteObj = {
            noteId: noteId,
            title: title,
            date: DateTime.local().toLocaleString(DateTime.DATE_FULL),
            text: text
        }
        notesList.push(noteObj)
        this.setState({
            notesList: notesList,
            noteId: noteId + 1
        })
        this.postNotes();
        this.clearInputs()
    }

    deleteCurrentNote = (item) => {
        const {noteId} = this.state;
        const newNotesList = this.state.notesList.filter(currentItem => currentItem !== item)
        this.setState({
            notesList: [...newNotesList],
            noteId: noteId - 1
        });
        this.postNotes();
    }

    showPreviousNotes = () => {
        const {notesList} = this.state;
        if (notesList.length > 0) {
            return notesList.map(item => {
                return (
                    <div key={item.noteId} className="notes-list">
                        <ul>
                            <li>Note title: {item.title}</li>
                            <li>Note date: {item.date}</li>
                            <li>Note text: {item.text}</li>
                        </ul>
                        <div onClick={() => {this.deleteCurrentNote(item)}} className="delete-note">X</div>
                    </div>
                )
            })
        }
    }

    render() {
        const {title, text } = this.state
        return (
            <div className="main-wrapper">
                <div>{this.showPreviousNotes()}</div>
                <div className="form-wrapper">
                    <div className="form-wrapper-inner">
                        <p className="header">Your note</p>
                        <form>
                            <div className="inner-inputs">
                                <p>Note title</p>
                                <input value={title} onChange={this.handleChange} type="text" name="title"
                                       className="input-title"/>

                            </div>
                            <div className="inner-inputs">
                                <p>Note text</p>
                                <textarea value={text} onChange={this.handleChange} type="text" name="text"
                                          className="input-text"/>
                            </div>
                            <div className="button-wrapper">
                                <button onClick={this.handleSubmit} className="submit-button">Add note</button>
                            </div>
                        </form>
                        <div className="link"><Link to='/login'>For registered Users</Link></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NotesComponent;