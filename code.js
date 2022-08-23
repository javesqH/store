const btnTheme = document.querySelector('.btn_theme');

if(localStorage.getItem('theme') === '') {
    localStorage.setItem('theme', 'light');
}

const themeUsed = localStorage.getItem('theme');

if(themeUsed === 'dark') {

    document.body.style.background = '#61495a';

    document.body.children[1].style.background = '#61495a';
    document.body.children[2].style.background = '#211f3f';

    document.body.children[0].children[1].style.background = '#61495a';
    document.body.children[0].children[0].style.background = '#211f3f';
    document.body.children[1].children[0].style.color = '#ff7b00';
    document.body.children[2].children[1].style.color = '#c9c9ce';

    document.body.children[2].children[0].children[0].style.color = '#ffffff';
    document.body.children[2].children[0].children[1].style.color = '#ffffff';
    document.body.children[2].children[0].children[2].style.color = '#ffffff';

    document.body.children[2].children[0].children[3].children[0].style.color = '#ffffff';


    document.body.children[0].children[0].children[1].children[0].style.background = '#211f3f';
    document.body.children[0].children[0].children[1].children[1].style.background = '#211f3f';
   
    document.body.children[0].children[0].children[1].children[0].children[0].style.background = '#61495a';
    document.body.children[0].children[0].children[1].children[1].children[0].style.background = '#61495a';

    document.body.children[0].children[0].children[0].children[0].style.color = '#68baff';
    document.body.children[0].children[0].children[0].children[1].style.color = '#68baff';
    document.body.children[0].children[0].children[0].children[2].style.color = '#68baff';

    document.body.children[0].children[1].children[0].children[0].style.color = '#ff7b00';
    document.body.children[0].children[1].children[0].children[1].style.color = '#ff7b00';
    document.body.children[1].children[1].children[3].children[1].style.color = '#ff7b00';
    document.body.children[1].children[1].children[3].children[2].style.color = '#ff7b00';
    document.body.children[1].children[1].children[4].children[1].style.color = '#ff7b00';
    document.body.children[1].children[1].children[4].children[2].style.color = '#ff7b00';
    document.body.children[1].children[1].children[5].children[1].style.color = '#ff7b00';
    document.body.children[1].children[1].children[5].children[2].style.color = '#ff7b00';
   
} else {
    document.body.style.background = '#90ee90';

    document.body.children[1].style.background = '#90ee90';
    document.body.children[2].style.background = '#f0f193';

    document.body.children[0].children[1].style.background = '#90ee90';
    document.body.children[0].children[0].style.background = '#f0f193';
    document.body.children[1].children[0].style.color = '#000000';
    document.body.children[2].children[1].style.color = '#000000';

    document.body.children[2].children[0].children[0].style.color = '#000000';
    document.body.children[2].children[0].children[1].style.color = '#000000';
    document.body.children[2].children[0].children[2].style.color = '#000000';

    document.body.children[2].children[0].children[3].children[0].style.color = '#000000';

    document.body.children[0].children[0].children[1].children[0].style.background = '#f0f193';
    document.body.children[0].children[0].children[1].children[1].style.background = '#f0f193';
   
    document.body.children[0].children[0].children[1].children[0].children[0].style.background = '#f0f193';
    document.body.children[0].children[0].children[1].children[1].children[0].style.background = '#f0f193';

    document.body.children[0].children[0].children[0].children[0].style.color = '#000000';
    document.body.children[0].children[0].children[0].children[1].style.color = '#000000';
    document.body.children[0].children[0].children[0].children[2].style.color = '#000000';

    document.body.children[0].children[1].children[0].children[0].style.color = '#000000';
    document.body.children[0].children[1].children[0].children[1].style.color = '#000000';
    document.body.children[1].children[1].children[3].children[1].style.color = '#000000';
    document.body.children[1].children[1].children[3].children[2].style.color = '#000000';
    document.body.children[1].children[1].children[4].children[1].style.color = '#000000';
    document.body.children[1].children[1].children[4].children[2].style.color = '#000000';
    document.body.children[1].children[1].children[5].children[1].style.color = '#000000';
    document.body.children[1].children[1].children[5].children[2].style.color = '#000000';
  
}

btnTheme.addEventListener('click', () => {
    const themeUsed = localStorage.getItem('theme');

    if(themeUsed === 'dark') {
        localStorage.setItem('theme', 'light');
        document.body.style.background = '#90ee90';

        document.body.children[1].style.background = '#90ee90';
        document.body.children[2].style.background = '#f0f193';

        document.body.children[0].children[1].style.background = '#90ee90';
        document.body.children[0].children[0].style.background = '#f0f193';
        document.body.children[1].children[0].style.color = '#000000';
        document.body.children[2].children[1].style.color = '#000000';

        document.body.children[2].children[0].children[0].style.color = '#000000';
        document.body.children[2].children[0].children[1].style.color = '#000000';
        document.body.children[2].children[0].children[2].style.color = '#000000';

        document.body.children[2].children[0].children[3].children[0].style.color = '#000000';


        document.body.children[0].children[0].children[1].children[0].style.background = '#f0f193';
        document.body.children[0].children[0].children[1].children[1].style.background = '#f0f193';
       
        document.body.children[0].children[0].children[1].children[0].children[0].style.background = '#f0f193';
        document.body.children[0].children[0].children[1].children[1].children[0].style.background = '#f0f193';

        document.body.children[0].children[0].children[0].children[0].style.color = '#000000';
        document.body.children[0].children[0].children[0].children[1].style.color = '#000000';
        document.body.children[0].children[0].children[0].children[2].style.color = '#000000';
     
        document.body.children[0].children[1].children[0].children[0].style.color = '#000000';
        document.body.children[0].children[1].children[0].children[1].style.color = '#000000';
        document.body.children[1].children[1].children[3].children[1].style.color = '#000000';
        document.body.children[1].children[1].children[3].children[2].style.color = '#000000';
        document.body.children[1].children[1].children[4].children[1].style.color = '#000000';
        document.body.children[1].children[1].children[4].children[2].style.color = '#000000';
        document.body.children[1].children[1].children[5].children[1].style.color = '#000000';
        document.body.children[1].children[1].children[5].children[2].style.color = '#000000';
      
    } else {
        localStorage.setItem('theme', 'dark');
        document.body.style.background = '#61495a';

        document.body.children[1].style.background = '#61495a';
        document.body.children[2].style.background = '#211f3f';

        document.body.children[0].children[1].style.background = '#61495a';
        document.body.children[0].children[0].style.background = '#211f3f';
        document.body.children[1].children[0].style.color = '#ff7b00';
        document.body.children[2].children[1].style.color = '#c9c9ce';

        document.body.children[2].children[0].children[0].style.color = '#ffffff';
        document.body.children[2].children[0].children[1].style.color = '#ffffff';
        document.body.children[2].children[0].children[2].style.color = '#ffffff';

        document.body.children[2].children[0].children[3].children[0].style.color = '#ffffff';


        document.body.children[0].children[0].children[1].children[0].style.background = '#211f3f';
        document.body.children[0].children[0].children[1].children[1].style.background = '#211f3f';
       
        document.body.children[0].children[0].children[1].children[0].children[0].style.background = '#61495a';
        document.body.children[0].children[0].children[1].children[1].children[0].style.background = '#61495a';

        document.body.children[0].children[0].children[0].children[0].style.color = '#68baff';
        document.body.children[0].children[0].children[0].children[1].style.color = '#68baff';
        document.body.children[0].children[0].children[0].children[2].style.color = '#68baff';
      
        document.body.children[0].children[1].children[0].children[0].style.color = '#ff7b00';
        document.body.children[0].children[1].children[0].children[1].style.color = '#ff7b00';
        document.body.children[1].children[1].children[3].children[1].style.color = '#ff7b00';
        document.body.children[1].children[1].children[3].children[2].style.color = '#ff7b00';
        document.body.children[1].children[1].children[4].children[1].style.color = '#ff7b00';
        document.body.children[1].children[1].children[4].children[2].style.color = '#ff7b00';
        document.body.children[1].children[1].children[5].children[1].style.color = '#ff7b00';
        document.body.children[1].children[1].children[5].children[2].style.color = '#ff7b00';
       
    }
});