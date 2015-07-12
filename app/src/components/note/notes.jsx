import React from 'react';
import Note from './note';

class Notes extends React.Component {

  constructor() {
    super();
  }

  render() {

    var notes = this.props.items;

    return (
      <ul className="notes">
        {notes.map((note, i) =>
          <li className="note" key={'note' + i}>
            <Note value={note.task}
                  onEdit={this.props.onEdit.bind(null, i)}
            />
          </li>
        )}
      </ul>
    );
  }
}

export default Notes;

