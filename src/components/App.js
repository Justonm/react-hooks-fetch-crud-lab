import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("list"); // State to manage which page is shown
  const [questions, setQuestions] = useState([]); // State to manage the list of questions

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]); // Add new question to the list
  }

  function handleDeleteQuestion(id) {
    setQuestions(questions.filter(question => question.id !== id)); // Remove question from the list
  }

  function handleUpdateQuestion(updatedQuestion) {
    setQuestions(questions.map(q => q.id === updatedQuestion.id ? updatedQuestion : q)); // Update the correct question
  }

  return (
    <main>
      <nav>
        <button onClick={() => setPage("list")}>View Questions</button>
        <button onClick={() => setPage("form")}>New Question</button>
      </nav>
      {page === "list" ? (
        <QuestionList
          questions={questions}
          setQuestions={setQuestions}
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateQuestion={handleUpdateQuestion}
        />
      ) : (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      )}
    </main>
  );
}

export default App;