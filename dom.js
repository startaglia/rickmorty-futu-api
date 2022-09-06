

/*************************************************
      _                    _     
   __| | ___  _ __ ___    (_)___ 
  / _` |/ _ \| '_ ` _ \   | / __|
 | (_| | (_) | | | | | |_ | \__ \
  \__,_|\___/|_| |_| |_(_)/ |___/
                        |__/     

*************************************************/

class Dom {
    static #root = document.getElementById('root');

    static createCard(className, children=[]) {
        let newCard = document.createElement('div');
        if(className) newCard.classList.add(className);
        if(children.length) {
            children.forEach((child)=>{
                newCard.appendChild(child);
            });
        }
        this.#root.appendChild(newCard)
        return newCard;
    }
    // static removeCard(card) => {

    // }
}

// imgUrl, quote, name, 