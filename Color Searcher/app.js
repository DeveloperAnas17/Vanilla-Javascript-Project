const searchColor = () => {
    let filterValue = document.getElementById('myInput').value.toUpperCase();

    let colors = document.getElementById('all-colors')
    let color = colors.getElementsByTagName('div')

    for (var i = 0; i < color.length; i++) {
        let colorName = color[i].getElementsByTagName('h3')[0]

        if (colorName) {
            let textValue = colorName.textContent || colorName.innerHTML;

            if (textValue.toUpperCase().indexOf(filterValue) > -1){
                color[i].style.display = ""
            } else {
                color[i].style.display = "none"
            }
        }
    }
}