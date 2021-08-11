window.onload = function() {
    var excuse = document.getElementById('excuse');
    let who = ['My mom', 'The teacher', 'My bank', 'A giant ostrich'];
    let action = ['took', 'robbed', 'kicked', 'squeezed'];
    let what = ['my wallet', 'the keys', 'my car', 'my time'];
    let when = ['yesterday', 'just before', 'an hour ago', 'in the morning'];

    function concat() {
        var phrase = who[randInt()] + ' ' + action[randInt()] +
         ' ' + what[randInt()] + ' ' + when[randInt()];
        render(phrase);   
    }

    function randInt() {
        return Math.floor(Math.random() * 4);
    }
    
    function render(phrase) {
        excuse.innerHTML = phrase;
    }
    concat();
};