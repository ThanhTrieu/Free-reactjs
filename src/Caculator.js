import React from 'react';
import './Caculator.css';

import Input from './components/Inputs/Input';
import Button from './components/Buttons/Button';
import ClearButton from './components/Buttons/ClearButton';
import RemoveButton from './components/Buttons/RemoveButton';

class AppCaculator extends React.Component {
  constructor(props) {
    //props cua class cha  React.Component
    super(props);
  }

  render() {
    // hien thi view ra ngoai trinh duyet
    // tat ca cac ma code hien thi ra view goi la jsx
    return(
      <>
        <div className="App-wrapper">
          <div className="App-main">
            <div className="row">
              <Input />
            </div>
            <div className="row">
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>x</Button>
            </div>
            <div className="row">
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>-</Button>
            </div>
            <div className="row">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>+</Button>
            </div>
            <div className="row">
              <Button>0</Button>
              <Button>.</Button>
              <Button>=</Button>
              <Button>/</Button>
            </div>
            <div className="row">
              <ClearButton />
              <RemoveButton />
            </div>
          </div>
        </div>
      </>
    );
  }
}
// de co the import tu cac noi khac
export default AppCaculator;