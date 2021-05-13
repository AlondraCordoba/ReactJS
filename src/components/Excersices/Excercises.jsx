import React, { useState } from 'react';
import SlideBar from '../common/slideBar/SlideBar';
import Counter from './Counter/CounterWithHooks';
import { excerNum } from '../../utils/constants';
import './Excercises.css';

const items = [
  { title: 'Counter', id: excerNum.COUNTER },
  { title: 'Task list', id: excerNum.NUM },
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
    default:
      content = null;
  }

  return (
    <div className="Excercises">
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