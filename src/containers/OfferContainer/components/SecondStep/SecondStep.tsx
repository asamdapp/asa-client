import React, { FC, useState } from "react";
import Select from "react-dropdown-select";
import useTranslation from "next-translate/useTranslation";
import { Calendar } from "react-date-range";
// @ts-ignore
import * as locales from "react-date-range/dist/locale";

import { Label, TextArea } from "UI";

export const SecondStep: FC = (): JSX.Element => {
  const { lang } = useTranslation();
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="flex gap-16">
      <div>
        <Label isRequired className="mb-2">
          Termen livrare
        </Label>

        <Calendar
          date={date}
          onChange={(date) => setDate(date)}
          locale={locales[lang ?? "ro"]}
          showMonthAndYearPickers={false}
          showDateDisplay={false}
        />
      </div>

      <div className="flex gap-6 flex-col w-full">
        <div>
          <Label isRequired className="mb-2">
            Din ce limba traducem?
          </Label>

          <Select
            onChange={(values) => console.log(values)}
            values={[]}
            options={[
              {
                value: 1,
                label: "Leanne Graham",
              },
              {
                value: 2,
                label: "Ervin Howell",
              },
            ]}
          />
        </div>

        <div>
          <Label isRequired className="mb-2">
            In ce limba traducem?
          </Label>

          <Select
            multi
            onChange={(values) => console.log(values)}
            values={[]}
            options={[]}
          />
        </div>

        <div>
          <TextArea
            className="h-20 resize-none"
            isRequired={false}
            label="Comentariu"
          />
        </div>
      </div>
    </div>
  );
};
