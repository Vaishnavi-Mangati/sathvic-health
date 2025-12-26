----SATHVIC HEALTH----

TECH_STACK:
frontend: React

THINGS TO REMEMBER:
- useNavigate(to route to other pages programatically)
- useLocation(to read data that is sent from other page)
- useContext(to share data globally across components without passing props manually)
- <BrowserRouter>(keeps track of URL, provides routing context to the app, Makes hooks like (useNavigate, useLocation, Link) work)

EXECUTION:
npm run dev

WORK_FLOW:
1. - 26-12-25 - Question, Answers and analysis (data/questions, components/Quiz.jsx)
    - Questions are stored in ./questions file and by importing that into ./Quiz.jsx some funtions are performed
    - showNextQuestion() function to change the questions after clikcing next button
    - vataScore(), pittaScore(), kaphaScore() functions to count the score of those qualities by clicking on the options

2. - 26-12-25 - Buliding the core logic to get the body type
    - The single dosha is decided in utils/getBodyType file and this is nothing without Result page(passed from here to utils).
    - components/Result.jsx file shows the result by importing logic from ./utils/getBodyType
    - Here comes the error like invalid hook and useContext() becomes null because we are using useLocation and useNavigate with out wrapping inside <BrowserRoute>
    !!!!Problem!!!!
    React 19 is the latest version and it doesn't support many libraries like <BrowserRouter> so the UI breaks and also all things doesn't work as expected so I changed version to React 18

    Flow: question(data/questions) -> components/Quiz.jsx -> Result(get scores) -> utils/getBodyType.js (core logic) -> Result(displays the result page).