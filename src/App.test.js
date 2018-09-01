import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Result from './Result';
import Occurence from './Occurence';

describe('Should render <App />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = mount(<App />);
  });

  it('Should render textarea with default value', () => {
    expect(renderedComponent.find('textarea').text()).toEqual("Le Lorem Lorem Ipsum est simplement du faux texte (texte, texte) employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500...;");
  });

  it('Should render <Occurence /> with default value', () => {
    expect(renderedComponent.find(Occurence).length).toBe(19);

    // First Occurence
    expect(renderedComponent.find(Occurence).at(0).find('td').at(0).text()).toEqual('1500');
    expect(renderedComponent.find(Occurence).at(0).find('td').at(1).text()).toEqual('1');
    expect(renderedComponent.find(Occurence).at(0).find('td').at(2).text()).toEqual('3.70%');

    // Second Occurence
    expect(renderedComponent.find(Occurence).at(1).find('td').at(0).text()).toEqual('lorem');
    expect(renderedComponent.find(Occurence).at(1).find('td').at(1).text()).toEqual('3');
    expect(renderedComponent.find(Occurence).at(1).find('td').at(2).text()).toEqual('11.11%');

    // Third Occurence
    expect(renderedComponent.find(Occurence).at(2).find('td').at(0).text()).toEqual('ipsum');
    expect(renderedComponent.find(Occurence).at(2).find('td').at(1).text()).toEqual('2');
    expect(renderedComponent.find(Occurence).at(2).find('td').at(2).text()).toEqual('7.41%');
  });

  it('Should update <Occurence /> with empty value', () => {
    expect(renderedComponent.find(Occurence).length).toBe(19);
    renderedComponent.find('textarea').simulate('change', {
      target: {
        value: '',
      },
    });
    expect(renderedComponent.find(Occurence).length).toBe(0);
  });

  it('Should update <Occurence /> with other value', () => {
    expect(renderedComponent.find(Occurence).length).toBe(19);
    renderedComponent.find('textarea').simulate('change', {
      target: {
        value: 'Le Lorem Lorem Ipsum est simplement texte (texte).',
      },
    });
    expect(renderedComponent.find(Occurence).length).toBe(5);
  });
});
