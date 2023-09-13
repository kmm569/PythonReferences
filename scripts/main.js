let pageIds = ['functions', 'lists', 'forLoops', 'lambda', 'maps', 'pygame'];
let pageNames = ['Functions', 'Lists', 'For Loops', 'Lambda', 'Maps', 'Pygame'];

window.onload = () => {
    let linkList = document.getElementById('linkList');

    let links = [];
    for (var item in pageNames) {
        let div = document.createElement('div');
        let listLink = document.createElement('li');
        let newLink = document.createElement('a');
        listLink.classList.add('link');
        listLink.id = pageIds[item];
        newLink.innerHTML = `${pageNames[item]}`
        listLink.append(newLink);
        div.append(listLink);
        links.push(div.innerHTML);
    }

    linkList.innerHTML = links.join(' | ');

    let pageLinks = document.getElementsByClassName('link');

    for (let l of pageLinks) {
        l.addEventListener('click', () => {
            for (var x in pageIds) {
                document.getElementById(pageIds[x] + '-div').classList.remove('show');
            }
            document.getElementById(`${l.id}-div`).classList.add('show');
        })
    }
}
