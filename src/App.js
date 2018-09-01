import React, { Component } from 'react';
import findOccurrences from './helpers';
import Result from './Result';

class App extends Component {
  constructor() {
    super();
    const text = "Le Lorem Lorem Ipsum est simplement du faux texte (texte, texte) employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500...;";
    this.state = {
      text,
      occurences: findOccurrences(text),
    };
  }

  update = (value) => {
    this.setState({
      text: value,
      occurences: findOccurrences(value),
    });
  };

  render() {
    const {
      text,
      occurences,
    } = this.state;

    return (
      <div>
        <form className="App">
          <textarea 
            name="content"
            value={text}
            onChange={(ev) => this.update(ev.target.value)}>
          </textarea>
        </form>
        <Result occurences={occurences} />
      </div>
    );
  }
}

export default App;
