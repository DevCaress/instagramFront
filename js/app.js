const slider = () => {

    const imgs = document.getElementsByClassName('imgCar');

    for (const iterator of imgs) {
        iterator.classList.remove('active');
    }

    imgs[indexSlider].classList.add('active');
    indexSlider == 4 ? indexSlider = 0 : indexSlider++;

}

const clearDom = () => {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = '';
    body.innerHTML = `
        <script src="js/info.js"></script>
        <script src="js/app.js"></script>
    `;

    clearInterval(sliderActive);

}

const renderPosts = () =>{

    const container = document.getElementById('posts');

    for (const iterator of data.posts) {
        const element = document.createElement('article');
        element.innerHTML = `
            <div class="title">
                <div> 
                    <div class="contStorie">
                        <img src="${iterator.imgProfile}" alt="">
                    </div>
                    <p> ${iterator.title} </p>
                </div>
                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
            </div>
            <div class="imgPost">
                <img src="${iterator.img}" alt="">
            </div>
            <div class="infoPost">
                <div class="btnsComments"> 
                    <div>
                        <svg color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                        <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                        <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </div>
                    <div>
                        <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </div>
                </div>
                <div class="comments">
                    <p class="likes">655 Me gusta </p>
                    <p class="description"> 
                        <span>devcaress </span> Who is your favorite Hunter x Hunter character?!
                    </p>
                    <p class="seeComments">Ver los 20 comentarios </p>
                    <p class="timeComments">hace 2 horas </p>
                </div>
                <div class="addComment"> 
                    <div>
                        <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                    
                        <input type="text" name="comment" placeholder="Añade un comentario...">
                    </div>
                    <div class="postComment">
                        Publicar
                    </div>
                </div>
            </div>
        `;
        container.appendChild(element);
    }
}

const renderStories = () =>{

    const container = document.getElementById('stories');
    
    for (const iterator of data.stories) {
        const element = document.createElement('div');

        element.innerHTML = `
        <div class="contStorie">
            <img src="${iterator.img}" alt="">
        </div>
        <p>${iterator.user}</p>       
        `;
        container.appendChild(element);
    }
}

const renderSuggestions = () =>{
    const container = document.getElementById('suggestions');

    for (const iterator of data.suggestions) {
        const element = document.createElement('div');
        element.classList.add('suggItem') ;
        element.innerHTML = `            
            <div> 
                <img src="${iterator.img}">
                <p>${iterator.user} </p>
            </div>
            <p class="aBlue"> Seguir</p> 
        `;
        container.appendChild(element);
    }

}

const renderAside = () =>{
    const container = document.getElementById('aside');
    const element = document.createElement('aside');

    element.innerHTML = `
        <div>
            <div>
             <img src="img/profile150.jpg" > 
             <div><p>devacaress </p> <p> Dev Caress </p>  </div>
            </div>
            <div class="aBlue">Cambiar </div>
        </div>
        <div id="suggestions">
            <div>
                <p> Sugerencias para ti </p>
                <p> Ver todo </p>
            </div>
        </div>
        <div id="footer">
            <div>                
                 <a href="#">Información ·</a>
                 <a href="#">Ayuda ·</a>
                 <a href="#">Prensa ·</a>
                 <a href="#">API ·</a>
                 <a href="#">Empleo ·</a>
                 <a href="#">Privacidad ·</a>
                 <a href="#">Condiciones ·</a>
                 <a href="#">Ubicaciones ·</a>
                 <a href="#">Cuentas destacadas ·</a>
                 <a href="#">Hashtags ·</a>
                 <a href="#">Idioma </a>                
            </div>
            <div>
                © 2022 INSTAGRAM FROM META 
            </div>
        </div>
    `;

    container.appendChild(element);

    renderSuggestions();
}

const renderHome = () => {
    clearDom();
    
    for (const iterator of data.homeSections) {
        console.log(iterator.tag);
        const container = document.getElementsByTagName('body')[0];
        const element = document.createElement(iterator.tag);
        element.innerHTML = iterator.template;
        element.id = iterator.id;  
        container.classList.add('home') 
        container.appendChild(element);
    }
    renderStories();
    renderPosts();
    renderAside();
}

const login = () => {

    const user = document.getElementById('user');
    const pass = document.getElementById('pass');

    user.value === data.login.user && pass.value === data.login.pass ?
        renderHome() : alert('Incorrecto');

    
}

const activeBtn = () => {

    const btn = document.getElementById('send');
    btn.classList.add('active');
    btn.addEventListener('click', login);

}

const emptyInputs = () => {

    const user = document.getElementById('user');
    const pass = document.getElementById('pass');

    user.value != '' && pass.value != '' ? activeBtn() : null;

}

const initApp = () => {

    let inputs = document.getElementsByTagName('input');

    for (const iterator of inputs) {
        iterator.addEventListener('change', emptyInputs);
    }

}

initApp();
let indexSlider = 0;
const sliderActive = setInterval(slider,2000);

