function changeTheme(e) {
    const resultsDiv = document.querySelector('.div-main-content-right-side-results');
    const container = document.querySelector('.container');
    if (e.target.textContent == `Dark theme`) {
        e.target.parentElement.style.backgroundColor = `black`;
        e.target.parentElement.style.color = `white`;
        e.target.parentElement.parentElement.style.backgroundColor = `black`;
        e.target.parentElement.parentElement.style.color = `white`;
        e.target.textContent = `Light theme`;
        resultsDiv.style.backgroundColor = 'black'
        resultsDiv.style.color = 'white';
        e.target.style.border = '1px solid white'
        container.style.backgroundColor = 'black';

    } else if (e.target.textContent == `Light theme`) {
        e.target.textContent = `Dark theme`;
        e.target.parentElement.style.backgroundColor = `white`;
        e.target.parentElement.style.color = `black`;
        e.target.parentElement.parentElement.style.backgroundColor = `white`;
        e.target.parentElement.parentElement.style.color = `black`;
        resultsDiv.style.backgroundColor = 'white'
        resultsDiv.style.color = 'black';
        e.target.style.border = '1px solid black'
        container.style.backgroundColor = 'white';

    }
}
export default changeTheme;