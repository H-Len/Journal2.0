import { myJournal } from './journal.js';
import './journal.js';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var wordNum = new myJournal(title, body);
    // document.write(title + '<br>');
    // document.write(body + '<br>');
    var words = wordNum.countWord();
    var vowels = wordNum.countVowel();
    var teaser = wordNum.getTeaser();
    $('#solution1').text(words);
    $('#solution2').text(vowels);
    $('#solution3').text(teaser);
  });
});
