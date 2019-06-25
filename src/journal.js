export function myJournal(title, body) {
  this.title = title,
  this.body = body;
}

myJournal.prototype.countWord = function () {
  var numberTitle = this.title.split(' ').length;
  var numberBody = this.body.split(' ').length;
  // console.log(numberTitle + numberBody);
  return numberTitle + numberBody;
};

myJournal.prototype.countVowel = function () {
  var titleChar = this.title.toLowerCase().replace(/\W/gi, '');
  var bodyChar = this.body.toLowerCase().replace(/\W/gi, '');
  var charNum = (titleChar + bodyChar).split('');
  var vowelNum = 0;
  for (var i = 0; i < charNum.length; i++) {
    if (charNum[i] === 'a' || charNum[i] === 'e' || charNum[i] === 'i' || charNum[i] === 'o' || charNum[i] === 'u') {
      vowelNum += 1;
    }
  }
  return vowelNum;
};

myJournal.prototype.getTeaser = function () {
  var teaser = this.body.split(' ');
  var myTeaser = [];
  for (var i = 0; i < 8; i++) {
    if (teaser[i]) {
      myTeaser.push(teaser[i]);
    }
  }
  return myTeaser.join(' ');
};
