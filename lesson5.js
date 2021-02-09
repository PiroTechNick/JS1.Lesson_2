
function chessboard() {
    var newTable = document.createElement('table'),
        lets = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        blackFigs1 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'],
        whiteFigs1 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'],
        blackFigs2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'],
        whiteFigs2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'];
    for (var i = 0, j = 9; i < 10, j >= 0; i++, j--) {
        var newTr = newTable.insertRow(i);
        for (var a = 0; a < 10; a++) {
            var newTd = newTr.insertCell(a);
            switch (i) {
                case 0:
                    newTd.innerText = lets[a];
                    break;
                case 1:
                    newTd.innerHTML = blackFigs1[a];
                    break;
                case 2:
                    newTd.innerHTML = blackFigs2[a];
                    break;
                case 7:
                    newTd.innerHTML = whiteFigs2[a];
                    break;
                case 8:
                    newTd.innerHTML = whiteFigs1[a];
                    break;
                case 9:
                    newTd.innerText = lets[a];
                    break;
                default:
                    if (a == 0 || a == 9) {
                        newTd.innerHTML = j;
                    }
                    break;
            }
        }
    }
    document.body.append(newTable);
}
chessboard();