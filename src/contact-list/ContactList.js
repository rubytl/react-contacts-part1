import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapRegExp from 'escape-string-regexp';
import { Link } from 'react-router-dom';
// import sortBy from 'sort-by';

export class ContactList extends Component {

    static propTypes = {
        // contact: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(
            {
                query: query.trim()
            }
        )
    }

    render() {

        const { contacts, onDeleteContact } = this.props;
        const { query } = this.state;
        let showingContacts
        if (query) {
            const match = new RegExp(escapRegExp(query), 'i');
            showingContacts = contacts.filter(c => match.test(c.name));
        }
        else {
            showingContacts = contacts;
        }

        // showingContacts.sort(sortBy('name'));

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input className='search-contacts'
                        type='text' placeholder='Search contacts' value={query}
                        onChange={(event) => this.updateQuery(event.target.value)} />

                    <Link to='/create' className='add-contact'>Add Contact</Link>
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now Showing {showingContacts.length} of {contacts.length} total</span>
                        <buton onClick={() => this.updateQuery('')}>Show all</buton>
                    </div>
                )
                }

                <ol className='contact-list'>
                    {showingContacts.map(contact => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }} />
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
                                Remove
                        </button>
                        </li>
                    )
                    )}
                </ol>
            </div >
        );
    }
}

// export default ContactList;