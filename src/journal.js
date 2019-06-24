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
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var vowelTitle = this.title.split(' ');
  var vowelBody = this.body.split(' ');
  console.log(vowelTitle);

};
