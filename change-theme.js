function changeTheme(e) {
    let resultsDiv = document.querySelector('.game-results')
    if (e.target.textContent == `Dark theme`) {
        e.target.parentElement.style.backgroundColor = `black`;
        e.target.parentElement.style.color = `white`;
        e.target.parentElement.parentElement.style.backgroundColor = `black`;
        e.target.parentElement.parentElement.style.color = `white`;
        e.target.textContent = `Light theme`;
        resultsDiv.style.backgroundColor = 'black'
        resultsDiv.style.color = 'white';
        e.target.style.border = '1px solid white'

    } else if (e.target.textContent == `Light theme`) {
        e.target.textContent = `Dark theme`;
        e.target.parentElement.style.backgroundColor = `#F0F2F5`;
        e.target.parentElement.style.color = `black`;
        e.target.parentElement.parentElement.style.backgroundColor = `#c7ccd0`;
        e.target.parentElement.parentElement.style.color = `black`;
        resultsDiv.style.backgroundColor = '#c7ccd0'
        resultsDiv.style.color = 'black';
        e.target.style.border = '1px solid black'
    }
}
export default changeTheme;