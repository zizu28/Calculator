let expression = document.getElementById('expression')
let answer = document.getElementById('answer')
let equalsButton = document.getElementById('equals')

let previousAnswer = 'null', previousAction = 'null'

const clearContent = () => {
    expression.textContent = ''
    answer.textContent = ''
    previousAction = 'clear'
}

const deleteContent = () => {
    expression.textContent = expression.textContent.slice(0, -1)
    if(previousAction === 'equals'){
        answer.textContent = ''
    }
    previousAction = 'delete'
}

const signOperator = () => {
    expression.textContent += '-'
    if(previousAction === 'equals'){
        answer.textContent = ''
    }
    previousAction = 'sign'
}

let allButtons = Array.from(document.querySelectorAll('.buttons>button'))
allButtons.forEach(button => {
    if(button.id === 'delete') {
        button.addEventListener('click', deleteContent)}
    else if(button.id === 'clear'){
        button.addEventListener('click', clearContent)}
    else if(button.id === 'sign'){
        button.addEventListener('click', signOperator)}
    else if(button.id !== 'equals'){
        button.addEventListener('click', () => {
            if(previousAction === 'equals'){
                if(isNaN(button.id)){
                    clearContent()
                    expression.textContent = `ANS${button.textContent}`  
                }
                else{
                    clearContent()
                    expression.textContent = button.textContent
                }
            }
            else{
                expression.textContent += button.textContent
            }
            previousAction = `${button.id}`
        })
    }
})

equalsButton.addEventListener('click', () => {
    expression.textContent = expression.textContent.replace(/—/g, '-')
    expression.textContent = expression.textContent.replace(/✕/g, '*')
    expression.textContent = expression.textContent.replace(/÷/g, '/')
    expression.textContent = expression.textContent.replace(/ANS/, `${previousAnswer}`)

    try{
        let tree = parse(expression.textContent), ans = evaluate(tree)
        answer.textContent = `${ans}`.length > 12 ? `${ans.toExponential(10)}` : `${ans}`
        console.log(tree)
        previousAnswer = ans
        previousAction = 'equals'
    }catch(e){
        console.log(e)
        answer.textContent = e.toString()
        setTimeout(() => {
            answer.textContent = ''
          }, 1500)
    }
})
