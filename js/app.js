     function listbutton(){
            let list = document.getElementById('myList');
            let value = document.getElementById('to-do').value;
            let li = document.createElement('Li');
            let textNode = document.createTextNode(value);
            li.appendChild(textNode);
            list.appendChild(li);
};

