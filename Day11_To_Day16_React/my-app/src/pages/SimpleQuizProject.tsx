import React, { useState } from "react";

import "../styles/hw.css";

const quiz_data = [
  {
    questionTitle: "What is the capital of Germany?",
    id: 1,
    options: [
      { A: "Berlin" },
      { B: "Munich" },
      { C: "Frankfurt" },
      { D: "Hamburg" },
    ],
    correct_answer: "Berlin",
  },
  {
    questionTitle: "Which planet is known as the Red Planet?",
    id: 2,
    options: [{ A: "Earth" }, { B: "Mars" }, { C: "Jupiter" }, { D: "Venus" }],
    correct_answer: "Mars",
  },
  {
    questionTitle: "Who wrote 'Romeo and Juliet'?",
    id: 3,
    options: [
      { A: "Charles Dickens" },
      { B: "William Shakespeare" },
      { C: "Leo Tolstoy" },
      { D: "Mark Twain" },
    ],
    correct_answer: "William Shakespeare",
  },
  {
    questionTitle: "What is the largest ocean on Earth?",
    id: 4,
    options: [
      { A: "Atlantic Ocean" },
      { B: "Indian Ocean" },
      { C: "Pacific Ocean" },
      { D: "Arctic Ocean" },
    ],
    correct_answer: "Pacific Ocean",
  },
];

type CheckedOptionsType = {
  [key: number]: string; // Keys are numbers, values are strings
};

function SimpleQuizProject() {
  // const [checkedOption, setCheckedOption] = useState(""); this will be lead to a problem
  //must have all options status
  const [checkedOptions, setCheckedOptions] = useState<CheckedOptionsType>({
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const [points, setPoints] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  const [totalScore, setTotalScore] = useState<number>(0);

  const [answeredAll, setAnsweredAll] = useState(false);

  const handleOptionChange = (e: any, id: number, correctAnswer: string) => {
    const selectValue = e.target.value;
    //updated the selected status
    setCheckedOptions((prev) => ({
      ...checkedOptions,
      [id]: selectValue,
    }));

    // get points
    setPoints((prev) => ({
      ...points,
      [id]: correctAnswer === selectValue ? 25 : 0,
    }));
  };

  const handleSubmit = () => {
    // if all options selected , calculate the points
    // this method is not simple ad good
    // Object.values(checkedOptions).map((option:string) => {
    //   if(option !== '') {
    //     Object(points).values().map((eachScore:number) => score += eachScore)
    //   }
    // })
    //check all options
    const allQuestionsAnswered = Object.values(checkedOptions).every(
      (option) => option !== ""
    );

    if (!allQuestionsAnswered) {
      setAnsweredAll(false);
    } else {
      setTotalScore(0); //empty previous total score
      // get score,calculate each question points
      Object.values(points).map((item) => {
        // totalScore += Number(item);
        return setTotalScore((prev) => prev + Number(item));
      });
      setAnsweredAll(true);

      // how to empty total score record
    }
  };

  return (
    <div className="contentBox">
      <h2>a simple quiz app</h2>

      <div className="quiz">
        <form style={{ textAlign: "left" }}>
          {quiz_data.map((question) => {
            const { questionTitle, options, id, correct_answer } = question;
            return (
              <div className="question" key={id} style={{ margin: "30px" }}>
                <p className="questionTitle">{questionTitle}</p>
                {options.map((option) => {
                  const [letterKey, value] = Object.entries(option)[0]; //[ ["A", "Berlin"] ]
                  return (
                    <div key={letterKey}>
                      <label htmlFor={value}>
                        <input
                          type="radio"
                          checked={checkedOptions[id] === value}
                          onChange={(e) =>
                            handleOptionChange(e, id, correct_answer)
                          }
                          className="radio"
                          name={value}
                          value={value}
                        />
                        {letterKey}: {value}
                      </label>
                      <br />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </form>

        <div className="submit">
          <button onClick={handleSubmit}>submit</button>
          {answeredAll ? (
            <p>
              Quiz completed, your score is {totalScore} pointes, The perfect
              score is 100 points
            </p>
          ) : (
            <p>you need to answer all questions !</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SimpleQuizProject;
