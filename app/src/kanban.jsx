import React from 'react';
import Notes from './components/note/notes';

class Kanban extends React.Component {

  constructor() {
    super();

    this.state = {
      notes : []
    }
  }

  addItem() {
    this.setState({
      notes: this.state.notes.concat([
        {
          task: 'New task'
        }
      ])
    });
  }

  render() {

    return(
      <div>
        <button onClick={ () => this.addItem() } > + </button>
        <Notes items={this.state.notes}
               onEdit={(i, task) => this.itemEdited(i, task)}
        />
      </div>
    );
  }

  itemEdited(i, task) {
    var notes = this.state.notes;
    if(task) {
      notes[i].task = task;
    } else {
      notes = notes.slice(0, i).concat(notes.slice(i + 1));
    }
    this.setState({ notes: notes,
    });
  }
}

export default Kanban;
