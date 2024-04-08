const form = document.forms.namedItem('add')
const inp = document.querySelectorAll('input')
const btn = document.querySelector('#add')
const under_box = document.querySelector('.under-box')
const under_box_two = document.querySelector('.under-box-two')
const under_box_three = document.querySelector('.under-box-three')
const element = []
const groups = {
    under25: [],
    between25and50: [],
    over50: []
}


form.onsubmit = (event) => {
    event.preventDefault()
    // let fm = new FormData(form)
    // let user = {}

    // fm.forEach((val, key) => {
    //     user[key] = val
    // })

    event.preventDefault()

    let user = {
        name: new FormData(form).get('name'),
        age: new FormData(form).get('age'),
    }

    console.log(user)
    element.push(user)

    reload(element)
}

reload(element)

function reload(arr) {
    under_box.innerHTML = ""
    under_box_two.innerHTML = ""
    under_box_three.innerHTML = ""

    for (let item of arr) {
        const description = document.createElement('div')
        const h2 = document.createElement('h2')
        const box_age = document.createElement('div')
        const p = document.createElement('p')
        const b = document.createElement('b')

        description.classList.add('description')
        h2.innerHTML = item.name
        box_age.classList.add('box-age')
        p.innerHTML = 'age:'
        b.innerHTML = item.age

        description.append(h2, box_age)
        box_age.append(p, b)


        if (item.age <= 25) {
            under_box.append(description)
        } else if (item.age <= 50) {
            under_box_two.append(description)
        } else {
            under_box_three.append(description)
        }


        // users.forEach(user => {
        //     if (item.year < 25 ) {
        //         groups.under25.push(user)
        //     } else if (item.year < 50) {
        //         groups.between25and50.push(user)
        //     } else {
        //         groups.over50.push(user)
        //     }
        // });
    }
}
