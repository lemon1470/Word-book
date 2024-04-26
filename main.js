// 저장된 텍스트를 담을 오브젝트 생성
var savedObject = [];
var savedObjectko = [];
textInput.editText.setImeOptions(EditorInfo.IME_ACTION_GO);
function checkEnter(event) {
  if (event.keyCode === 13) {
    saveText();
  }
}

function checkEnterko(event) {
  if (event.keyCode === 13) {
    saveTextko();
    saveText();
  }
}
//이전 내용 삭제
function del() {
  savedObject.pop();
  savedObjectko.pop();
  alert("삭제 되었습니다");
}
  

// 텍스트 저장 함수
function saveText() {
      var inputText = document.getElementById('textInput').value;
      savedObject.push(inputText);
      document.getElementById('textInput').value = ''; // 입력 필드 비우기
      console.log("텍스트 저장됨:", inputText);

}

function saveTextko() {
      var inputTextko = document.getElementById('textInputko').value;
      savedObjectko.push(inputTextko);
      document.getElementById('textInputko').value = ''; // 입력 필드 
      console.log("텍스트 저장됨:", inputTextko);
      
}

// 저장된 텍스트 보여주는 함수
function showSavedText() {
    var savedTextElement = document.getElementById('savedText');
    savedTextElement.textContent = ''; // 이전에 보여준 내용 초기화
    
    var savedTextkoElement = document.getElementById('savedTextko');
    savedTextkoElement.textContent = ''; // 이전에 보여준 내용 초기화
    
    if(savedObject.length === 0) {
        savedTextElement.textContent = "저장된 단어가 없습니다.";
    } else {
        savedObject.forEach(function(item, index) {
            savedTextElement.innerHTML += (index + 1) + ": " + item + "<br>";
        });
    }
    if (savedObjectko.length === 0) {
      savedTextkoElement.textContent = "저장된 뜻이 없습니다";
    } else {
      savedObjectko.forEach(function(item, index) {
        savedTextkoElement.innerHTML += item + "<br>";
      });
    }
}


