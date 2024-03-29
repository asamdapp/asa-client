import React, { FC, useContext } from 'react';
import { OfferContext } from 'context';
import clsx from 'clsx';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const InfoStepper: FC = (): JSX.Element => {
  const { step, totalSteps } = useContext(OfferContext);

  return (
    <div className="bg-gray-200 rounded-full mb-4">
      <div
        className="bg-cardinal h-2 rounded-full transition-all"
        style={{ width: `${(100 / totalSteps) * step}%` }}
      />
    </div>
  );

  /*const steps = [
    {
      id: 1,
      title: 'First step',
    },
    {
      id: 2,
      title: 'Second step',
    },
    {
      id: 3,
      title: 'Third step',
    },
    {
      id: 4,
      title: 'Fourth step',
    },
  ];

  return (
    <div
      className="
        flex pb-6 gap-14 justify-between
        border-b border-gray-200 dark:border-gray-800
      "
    >
      {steps.map(({ id, title }) => (
        <button
          key={id}
          className={clsx('flex items-center gap-2', {
            'bg-red-500': step === id,
          })}
          onClick={() => setStep(id)}
          disabled={
            !completedSteps.includes(id) || !completedSteps.includes(id - 1)
          }
        >
          <span
            className={clsx(
              'flex items-center justify-center h-7 w-7 bg-red-200 rounded-full'
            )}
          >
            {id}
          </span>
          <span>{title}</span>
        </button>
      ))}

      <div className="h-16 w-16 ml-auto">
        <CircularProgressbar
          value={77}
          text={`${77}%`}
          styles={buildStyles({
            textSize: 24,
            pathColor: 'rgb(11,98,107)',
            textColor: 'rgb(16,52,100)',
            trailColor: '#efefef',
          })}
        />
      </div>

      {/!*<button className="flex items-center gap-2">
        <span className="flex items-center justify-center h-7 w-7 bg-red-200 rounded-full">
          1
        </span>
        <span>Tipul de serviciu</span>
      </button>

      <button className="flex items-center gap-2">
        <span className="flex items-center justify-center h-7 w-7 bg-red-200 rounded-full">
          2
        </span>
        <span>Detalii suplimentare</span>
      </button>

      <button className="flex items-center gap-2">
        <span className="flex items-center justify-center h-7 w-7 bg-red-200 rounded-full">
          3
        </span>
        <span>Atasare documente</span>
      </button>

      <button className="flex items-center gap-2">
        <span className="flex items-center justify-center h-7 w-7 bg-red-200 rounded-full">
          4
        </span>
        <span>Date personale</span>
      </button>*!/}
    </div>
  );*/
};
