import React, { useState } from 'react';
import SlideBar from '../common/slideBar/SlideBar';
import Counter from './Counter/CounterWithHooks';
import ApiExample from './ApiExample/ApiExample';
import ToDoList from './ToDoList/ToDoList';
import { excerNum } from '../../utils/constants';
import './Excercises.css';

const items = [
  { title: 'Counter', id: excerNum.COUNTER },
  { title: 'Task list', id: excerNum.NUM },
  { title: 'Pokemon', id: excerNum.POKEMON }
];

const Excercises = () => {
  const [actualExercise, setExercise] = useState(excerNum.COUNTER);

  const handleChangeExcercise = (newExcercise) => {
    setExercise(newExcercise);
  };

  let content = null;
  switch (actualExercise) {
    case excerNum.COUNTER:
      content = (
        <Counter maxValue={15}>
          <span>Hey you!</span>
        </Counter>
      )
      break;
      
      case excerNum.NUM:
        content = (
          <ToDoList />
        )
      break;
      
      case excerNum.POKEMON:
        content = (
          <ApiExample />
        )
      break;

    default:
      content = null;
  }

  return (
    <div className="excercises">
      <SlideBar
        items={items}
        selected={actualExercise}
        onNav={handleChangeExcercise}
      />

      <main>
        {content}
      </main>
    </div>
  );
};

export default Excercises;