let words = JSON.parse(localStorage.getItem('savedWords')) || [];

function handleEnter(event, action) {
    if (event.key === 'Enter') {
        if (action === 'korean') {
            document.getElementById('korean-word-input').focus();
        } else if (action === 'save') {
            saveWord();
        }
    }
}

function saveWord() {
    const englishWordInput = document.getElementById('english-word-input').value.trim();
    const koreanWordInput = document.getElementById('korean-word-input').value.trim();

    if (englishWordInput && koreanWordInput) {
        words.push({ english: englishWordInput, korean: koreanWordInput });
        localStorage.setItem('savedWords', JSON.stringify(words)); // localStorage에 저장
        displayWords();
        clearInputs();
    } else {
        alert('영단어와 뜻을 입력해주세요.');
    }
}

function deleteLastWord() {
    words.pop();
    localStorage.setItem('savedWords', JSON.stringify(words)); // localStorage에서 마지막 단어 삭제
    displayWords();
}

function displayWords() {
    const wordList = document.getElementById('word-list');
    wordList.innerHTML = '';

    words.forEach((word, index) => {
        const wordDiv = document.createElement('div');
        wordDiv.className = 'word-item';
        wordDiv.innerHTML = `<strong>${index + 1}. ${word.english}</strong>: ${word.korean}`;
        wordList.appendChild(wordDiv);
    });
}

// 페이지가 로드될 때 저장된 단어들을 화면에 표시
document.addEventListener('DOMContentLoaded', displayWords);

function clearInputs() {
    document.getElementById('english-word-input').value = '';
    document.getElementById('korean-word-input').value = '';
    document.getElementById('english-word-input').focus();
}

function toggleTheme() {
    const body = document.body;
    const themeSwitcher = document.getElementById('theme-switcher');
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // 모든 input, button, word-item 요소에 대해 다크 모드 스타일 적용
    const inputs = document.querySelectorAll('input');
    const buttons = document.querySelectorAll('button');
    const wordItems = document.querySelectorAll('.word-item');

    inputs.forEach(input => input.classList.toggle('dark-mode', isDarkMode));
    buttons.forEach(button => button.classList.toggle('dark-mode', isDarkMode));
    wordItems.forEach(item => item.classList.toggle('dark-mode', isDarkMode));

    // 버튼 텍스트 변경
    if (isDarkMode) {
        themeSwitcher.innerText = '다크모드';
    } else {
        themeSwitcher.innerText = '기본모드';
    }
}

