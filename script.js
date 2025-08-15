// Immediately check for a saved theme in localStorage and apply it
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
    }
})();


document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            'nav-logo': 'Creations',
            'nav-home': 'Home',
            'nav-p1': 'Responsive Grid',
            'nav-p2': 'Brain Teaser',
            'nav-p3': 'Joke Factory',
            'hero-title': 'Welcome to My Interactive Showcase',
            'hero-subtitle': 'Explore three unique projects demonstrating modern web development techniques.',
            'hero-btn1': 'Responsive Grid',
            'hero-btn2': 'Brain Teaser',
            'hero-btn3': 'Joke Factory',
            'p1-desc': 'A fluid layout that adapts to any screen size.',
            'p2-desc': 'Test your knowledge with this fun, interactive quiz.',
            'p3-desc': 'Fetches random jokes from a live API for endless humor.',
            'p1-title': 'Project 1: Responsive Grid',
            'p1-card1-title': 'Mobile First',
            'p1-card1-desc': 'On small screens, cards stack vertically for easy reading.',
            'p1-card2-title': 'Tablet View',
            'p1-card2-desc': 'On medium screens, they arrange into a neat two-column layout.',
            'p1-card3-title': 'Desktop Power',
            'p1-card3-desc': 'On large screens, all three cards line up for a full view.',
            'p2-title': 'Project 2: Brain Teaser 🧠',
            'quiz-question-placeholder': 'Question text goes here',
            'quiz-complete': 'Quiz Complete!',
            'quiz-final-score': 'Your final score is',
            'quiz-play-again': 'Play Again',
            'p3-title': 'Project 3: Joke Factory 😂',
            'p3-fetch-btn': 'Tell Me a Joke!',
            'p3-joke-placeholder': 'Click the button to get a random joke!',
            'joke-fetching': 'Fetching a hilarious joke...',
            'joke-error': 'Oops! The jokes are sleeping.',
            'footer-copyright': `© ${new Date().getFullYear()} Creations. All Rights Reserved.`,
            'footer-designed': 'Designed with ❤️ by Sarvesh Soumil',
            'congrats-title': 'Congratulations!',
            'congrats-text': 'You got a perfect score! Well done!',
            'congrats-close': 'Close'
        },
        hi: {
            'nav-logo': 'रचनाएँ',
            'nav-home': 'होम',
            'nav-p1': 'रिस्पॉन्सिव ग्रिड',
            'nav-p2': 'ब्रेन टीज़र',
            'nav-p3': 'जोक फैक्ट्री',
            'hero-title': 'मेरे इंटरैक्टिव शोकेस में आपका स्वागत है',
            'hero-subtitle': 'आधुनिक वेब विकास तकनीकों का प्रदर्शन करने वाली तीन अनूठी परियोजनाओं का अन्वेषण करें।',
            'hero-btn1': 'रिस्पॉन्सिव ग्रिड',
            'hero-btn2': 'ब्रेन टीज़र',
            'hero-btn3': 'जोक फैक्ट्री',
            'p1-desc': 'एक तरल लेआउट जो किसी भी स्क्रीन आकार के अनुकूल होता है।',
            'p2-desc': 'इस मजेदार, इंटरैक्टिव क्विज के साथ अपने ज्ञान का परीक्षण करें।',
            'p3-desc': 'अंतहीन हास्य के लिए लाइव एपीआई से यादृच्छिक चुटकुले प्राप्त करता है।',
            'p1-title': 'प्रोजेक्ट 1: रिस्पॉन्सिव ग्रिड',
            'p1-card1-title': 'मोबाइल फर्स्ट',
            'p1-card1-desc': 'छोटी स्क्रीन पर, कार्ड आसानी से पढ़ने के लिए लंबवत रूप से ढेर हो जाते हैं।',
            'p1-card2-title': 'टैबलेट व्यू',
            'p1-card2-desc': 'मध्यम स्क्रीन पर, वे एक साफ-सुथरे दो-कॉलम लेआउट में व्यवस्थित होते हैं।',
            'p1-card3-title': 'डेस्कटॉप पावर',
            'p1-card3-desc': 'बड़ी स्क्रीन पर, पूर्ण दृश्य के लिए तीनों कार्ड पंक्तिबद्ध होते हैं।',
            'p2-title': 'प्रोजेक्ट 2: ब्रेन टीज़र 🧠',
            'quiz-question-placeholder': 'प्रश्न यहाँ आएगा',
            'quiz-complete': 'क्विज़ पूरा हुआ!',
            'quiz-final-score': 'आपका अंतिम स्कोर है',
            'quiz-play-again': 'फिर से खेलें',
            'p3-title': 'प्रोजेक्ट 3: जोक फैक्ट्री 😂',
            'p3-fetch-btn': 'मुझे एक चुटकुला सुनाओ!',
            'p3-joke-placeholder': 'एक यादृच्छिक चुटकुला पाने के लिए बटन पर क्लिक करें!',
            'joke-fetching': 'एक मज़ेदार चुटकुला लाया जा रहा है...',
            'joke-error': 'उफ़! चुटकुले सो रहे हैं।',
            'footer-copyright': `© ${new Date().getFullYear()} रचनाएँ। सर्वाधिकार सुरक्षित।`,
            'footer-designed': 'सर्वेश सौमिल द्वारा ❤️ के साथ डिज़ाइन किया गया',
            'congrats-title': 'बधाई हो!',
            'congrats-text': 'आपने उत्तम स्कोर प्राप्त किया! बहुत बढ़िया!',
            'congrats-close': 'बंद करें'
        }
    };

    const quizQuestions = {
        en: [
            { question: "What is the largest mammal in the world?", answers: [{ text: "Elephant", correct: false }, { text: "Blue Whale", correct: true }, { text: "Giraffe", correct: false }, { text: "Great White Shark", correct: false }] },
            { question: "Which planet is known as the Red Planet?", answers: [{ text: "Venus", correct: false }, { text: "Jupiter", correct: false }, { text: "Mars", correct: true }, { text: "Saturn", correct: false }] },
            { question: "Who wrote 'Romeo and Juliet'?", answers: [{ text: "Charles Dickens", correct: false }, { text: "William Shakespeare", correct: true }, { text: "Jane Austen", correct: false }, { text: "Mark Twain", correct: false }] },
            { question: "What is the capital of Japan?", answers: [{ text: "Beijing", correct: false }, { text: "Seoul", correct: false }, { text: "Tokyo", correct: true }, { text: "Bangkok", correct: false }] },
            { question: "What element does 'O' represent on the periodic table?", answers: [{ text: "Gold", correct: false }, { text: "Oxygen", correct: true }, { text: "Osmium", correct: false }, { text: "Oganesson", correct: false }] },
            { question: "Which is the longest river in the world?", answers: [{ text: "Amazon", correct: false }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }, { text: "Nile", correct: true }] },
            { question: "Who is the designer and owner of this web page?", answers: [{ text: "Elon Musk", correct: false }, { text: "Bill Gates", correct: false }, { text: "Sarvesh Soumil", correct: true }, { text: "Jeff Bezos", correct: false }] }
        ],
        hi: [
            { question: "दुनिया का सबसे बड़ा स्तनपायी कौन सा है?", answers: [{ text: "हाथी", correct: false }, { text: "ब्लू व्हेल", correct: true }, { text: "जिराफ़", correct: false }, { text: "ग्रेट व्हाइट शार्क", correct: false }] },
            { question: "किस ग्रह को लाल ग्रह के नाम से जाना जाता है?", answers: [{ text: "शुक्र", correct: false }, { text: "बृहस्पति", correct: false }, { text: "मंगल", correct: true }, { text: "शनि", correct: false }] },
            { question: " 'रोमियो और जूलियट' किसने लिखा?", answers: [{ text: "चार्ल्स डिकेंस", correct: false }, { text: "विलियम शेक्सपियर", correct: true }, { text: "जेन ऑस्टेन", correct: false }, { text: "मार्क ट्वेन", correct: false }] },
            { question: "जापान की राजधानी क्या है?", answers: [{ text: "बीजिंग", correct: false }, { text: "सियोल", correct: false }, { text: "टोक्यो", correct: true }, { text: "बैंकॉक", correct: false }] },
            { question: "आवर्त सारणी पर 'O' किस तत्व का प्रतिनिधित्व करता है?", answers: [{ text: "सोना", correct: false }, { text: "ऑक्सीजन", correct: true }, { text: "ऑस्मियम", correct: false }, { text: "ओगेनेसन", correct: false }] },
            { question: "विश्व की सबसे लंबी नदी कौन सी है?", answers: [{ text: "अमेज़ॅन", correct: false }, { text: "यांग्त्ज़ी", correct: false }, { text: "मिसिसिपी", correct: false }, { text: "नील", correct: true }] },
            { question: "इस वेब पेज के डिज़ाइनर और मालिक कौन हैं?", answers: [{ text: "एलोन मस्क", correct: false }, { text: "बिल गेट्स", correct: false }, { text: "सर्वेश सौमिल", correct: true }, { text: "जेफ बेजोस", correct: false }] }
        ]
    };

    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');

    function showPage(targetId) {
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelectorAll(`.nav-link[data-target="${targetId}"]`).forEach(link => {
            link.classList.add('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.dataset.target;
            showPage(targetId);
        });
    });

    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = 'en';

    function translatePage() {
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.dataset.translateKey;
            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });
        startQuiz();
    }

    languageToggle.addEventListener('change', (e) => {
        currentLanguage = e.target.checked ? 'hi' : 'en';
        translatePage();
    });
    
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        
        // Save theme preference to localStorage
        if (document.documentElement.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const quizBox = document.getElementById('quiz-box');
    const resultBox = document.getElementById('result-box');
    const scoreElement = document.getElementById('score');
    const restartBtn = document.getElementById('restart-btn');
    const congratsModal = document.getElementById('congrats-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    let currentQuestionIndex;
    let score;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        resultBox.classList.add('hidden');
        quizBox.classList.remove('hidden');
        congratsModal.classList.add('hidden');
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let currentQuestion = quizQuestions[currentLanguage][currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = "true";
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    function resetState() {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";

        if (isCorrect) {
            score++;
        }
        selectedBtn.classList.add(isCorrect ? 'correct' : 'wrong');
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add('correct');
            }
            button.disabled = true;
        });

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions[currentLanguage].length) {
                showQuestion();
            } else {
                showResult();
            }
        }, 1500);
    }

    function showResult() {
        quizBox.classList.add('hidden');
        resultBox.classList.remove('hidden');
        scoreElement.innerText = `${score} / ${quizQuestions[currentLanguage].length}`;
        if (score === quizQuestions[currentLanguage].length) {
            congratsModal.classList.remove('hidden');
        }
    }

    restartBtn.addEventListener('click', startQuiz);

    closeModalBtn.addEventListener('click', () => {
        congratsModal.classList.add('hidden')
    });

    const fetchBtn = document.getElementById('fetch-btn');
    const jokeSetupElement = document.getElementById('joke-setup');
    const jokePunchlineElement = document.getElementById('joke-punchline');
    const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

    const getJoke = async () => {
        jokeSetupElement.textContent = translations[currentLanguage]['joke-fetching'];
        jokePunchlineElement.textContent = '';
        jokePunchlineElement.classList.remove('visible');
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Could not fetch joke');
            }
            const data = await response.json();
            jokeSetupElement.textContent = data.setup;
            setTimeout(() => {
                jokePunchlineElement.textContent = `— ${data.punchline}`;
                jokePunchlineElement.classList.add('visible');
            }, 1200);
        } catch (error) {
            jokeSetupElement.textContent = translations[currentLanguage]['joke-error'];
            jokePunchlineElement.textContent = '';
        }
    };

    fetchBtn.addEventListener('click', getJoke);

    showPage('home');
    startQuiz();
});