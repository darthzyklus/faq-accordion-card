document.addEventListener("DOMContentLoaded", () => {
  let $openQuestion = null;
  const $questions = document.querySelectorAll(".faq-question-container");

  function toggleOpenClass() {
    const $question = this;
    if ($openQuestion) $openQuestion.classList.remove("open");

    if ($openQuestion === $question) {
      $openQuestion = null;
    } else {
      $question.classList.add("open");
      $openQuestion = $question;
    }
  }

  $questions.forEach(($question) =>
    $question.addEventListener("click", toggleOpenClass)
  );
});
