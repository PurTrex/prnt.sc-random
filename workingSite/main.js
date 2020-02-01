function newLink(){

    function randLetters(){

        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < 2; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result

    }

    function randNum(){

        return Math.floor(Math.random() * 9999);

    }

    link = "https://prnt.sc/" + randLetters() + randNum();

    return link;

}

function openInNewTab() {
    var win = window.open(newLink(), '_blank');
    win.focus();
  }