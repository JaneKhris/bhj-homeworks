getHole = index => document.getElementById(`hole${index}`)

for (let i=1; i<10; i++) {
    getHole(i).onclick = () => {
        console.log('y')
        if (getHole(i).className.includes( 'hole_has-mole' )) {
            document.getElementById('dead').textContent = Number(document.getElementById('dead').textContent)+1
            if (document.getElementById('dead').textContent == '10') {
                alert('Вы победили!')
                document.getElementById('dead').textContent = 0
                document.getElementById('lost').textContent = 0
            }
        }
        else {
            document.getElementById('lost').textContent = Number(document.getElementById('lost').textContent)+1
            if (document.getElementById('lost').textContent == '5') {
                alert('Вы проиграли =(')
                document.getElementById('dead').textContent = 0
                document.getElementById('lost').textContent = 0
            }
        }
    }
}
