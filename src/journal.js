export function myJournal(title, body) {
  this.title = title,
  this.body = body;
}

myJournal.prototype.countWord = function () {
  var numberTitle = this.title.split(' ').length;
  var numberBody = this.body.split(' ').length;
  console.log(numberTitle + numberBody);
  return numberTitle + numberBody;
};
