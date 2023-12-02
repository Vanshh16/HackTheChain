var openAnswerId = null;

              function toggleAnswer(id) {
                var answer = document.getElementById('answer' + id);
                var questions = document.querySelectorAll('.faq-question');
                if (openAnswerId !== null && openAnswerId !== id) {
                  var openAnswer = document.getElementById('answer' + openAnswerId);
                  openAnswer.style.display = 'none';
                  questions.forEach(function (question) {
                    question.classList.remove('open');
                  })
                }

                if (answer.style.display === 'none') {
                  answer.style.display = 'block';
                  openAnswerId = id;
                  document.querySelector(".ques-" + id).classList.add('open');
                  document.querySelector(".btn-" + id).innerText = '-';
                } else {
                  answer.style.display = 'none';
                  openAnswerId = null;
                  document.querySelector(".ques-" + id).classList.remove('open');
                  document.querySelector(".btn-" + id).innerText = '+';
                }
              }