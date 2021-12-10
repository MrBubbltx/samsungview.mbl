let megs = document.querySelector('.message');
document.addEventListener("contextmenu",function(msg){
    msg.preventDefault();
    megs.classList.add('active');
    setTimeout(function(){
        megs.classList.remove('active');
    },5000);
});
let btna02 = document.querySelector('.A02');
let btna11 = document.querySelector('.A11');
let btna21 = document.querySelector('.A21');
let btna32 = document.querySelector('.A32');
let btna50 = document.querySelector('.A50');
let btna72 = document.querySelector('.A72');
let btnm22 = document.querySelector('.M22');
let btns21 = document.querySelector('.S21');
let btnzflp = document.querySelector('.Zflp');
let btnzfld = document.querySelector('.Zfld');
let logbtn = document.querySelector('.logo');
let items = document.querySelector('.items');
logbtn.onclick = function(){
    items.classList.remove('a02');
    items.classList.remove('a11');
    items.classList.remove('a21');
    items.classList.remove('a32');
    items.classList.remove('a50');
    items.classList.remove('a72');
    items.classList.remove('m22');
    items.classList.remove('s21');
    items.classList.remove('zflp');
    items.classList.remove('zfld');
    btna02.classList.remove('active');
    btna11.classList.remove('active');
    btna21.classList.remove('active');
    btna32.classList.remove('active');
    btna50.classList.remove('active');
    btna72.classList.remove('active');
    btnm22.classList.remove('active');
    btns21.classList.remove('active');
    btnzflp.classList.remove('active');
    btnzfld.classList.remove('active');
}
btna02.onclick = function(){
    items.classList.toggle('a02');
    items.classList.remove('a11');
    items.classList.remove('a21');
    items.classList.remove('a32');
    items.classList.remove('a50');
    items.classList.remove('a72');
    items.classList.remove('m22');
    items.classList.remove('s21');
    items.classList.remove('zflp');
    items.classList.remove('zfld');
    btna02.classList.toggle('active');
    btna11.classList.remove('active');
    btna21.classList.remove('active');
    btna32.classList.remove('active');
    btna50.classList.remove('active');
    btna72.classList.remove('active');
    btnm22.classList.remove('active');
    btns21.classList.remove('active');
    btnzflp.classList.remove('active');
    btnzfld.classList.remove('active');
}
btna11.onclick = function(){
    items.classList.remove('a02');
    items.classList.toggle('a11');
    items.classList.remove('a21');
    items.classList.remove('a32');
    items.classList.remove('a50');
    items.classList.remove('a72');
    items.classList.remove('m22');
    items.classList.remove('s21');
    items.classList.remove('zflp');
    items.classList.remove('zfld');
    btna02.classList.remove('active');
    btna11.classList.toggle('active');
    btna21.classList.remove('active');
    btna32.classList.remove('active');
    btna50.classList.remove('active');
    btna72.classList.remove('active');
    btnm22.classList.remove('active');
    btns21.classList.remove('active');
    btnzflp.classList.remove('active');
    btnzfld.classList.remove('active');
}
btna21.onclick = function(){
    items.classList.remove('a02');
    items.classList.remove('a11');
    items.classList.toggle('a21');
    items.classList.remove('a32');
    items.classList.remove('a50');
    items.classList.remove('a72');
    items.classList.remove('m22');
    items.classList.remove('s21');
    items.classList.remove('zflp');
    items.classList.remove('zfld');
    btna02.classList.remove('active');
    btna11.classList.remove('active');
    btna21.classList.toggle('active');
    btna32.classList.remove('active');
    btna50.classList.remove('active');
    btna72.classList.remove('active');
    btnm22.classList.remove('active');
    btns21.classList.remove('active');
    btnzflp.classList.remove('active');
    btnzfld.classList.remove('active');
}
btna32.onclick = function(){
    items.classList.remove('a02');
    items.classList.remove('a11');
    items.classList.remove('a21');
    items.classList.toggle('a32');
    items.classList.remove('a50');
    items.classList.remove('a72');
    items.classList.remove('m22');
    items.classList.remove('s21');
    items.classList.remove('zflp');
    items.classList.remove('zfld');
    btna02.classList.remove('active');
    btna11.classList.remove('active');
    btna21.classList.remove('active');
    btna32.classList.toggle('active');
    btna50.classList.remove('active');
    btna72.classList.remove('active');
    btnm22.classList.remove('active');
    btns21.classList.remove('active');
    btnzflp.classList.remove('active');
    btnzfld.classList.remove('active');
}
btna50.onclick = function(){
    items.classList.remove('a02');
    items.classList.remove('a11');
    items.classList.remove('a21');
    items.classList.remove('a32');
    items.classList.toggle('a50');
    items.classList.remove('a72');
    items.classList.remove('m22');
    items.classList.remove('s21');
    items.classList.remove('zflp');
    items.classList.remove('zfld');
    btna02.classList.remove('active');
    btna11.classList.remove('active');
    btna21.classList.remove('active');
    btna32.classList.remove('active');
    btna50.classList.toggle('active');
    btna72.classList.remove('active');
    btnm22.classList.remove('active');
    btns21.classList.remove('active');
    btnzflp.classList.remove('active');
    btnzfld.classList.remove('active');
}
btna72.onclick = function(){
    items.classList.remove('a02');
    items.classList.remove('a11');
    items.classList.remove('a21');
    items.classList.remove('a32');
    items.classList.remove('a50');
    items.classList.toggle('a72');
    items.classList.remove('m22');
    items.classList.remove('s21');
    items.classList.remove('zflp');
    items.classList.remove('zfld');
    btna02.classList.remove('active');
    btna11.classList.remove('active');
    btna21.classList.remove('active');
    btna32.classList.remove('active');
    btna50.classList.remove('active');
    btna72.classList.toggle('active');
    btnm22.classList.remove('active');
    btns21.classList.remove('active');
    btnzflp.classList.remove('active');
    btnzfld.classList.remove('active');
}
btnm22.onclick = function(){
    items.classList.remove('a02');
    items.classList.remove('a11');
    items.classList.remove('a21');
    items.classList.remove('a32');
    items.classList.remove('a50');
    items.classList.remove('a72');
    items.classList.toggle('m22');
    items.classList.remove('s21');
    items.classList.remove('zflp');
    items.classList.remove('zfld');
    btna02.classList.remove('active');
    btna11.classList.remove('active');
    btna21.classList.remove('active');
    btna32.classList.remove('active');
    btna50.classList.remove('active');
    btna72.classList.remove('active');
    btnm22.classList.toggle('active');
    btns21.classList.remove('active');
    btnzflp.classList.remove('active');
    btnzfld.classList.remove('active');
}
btns21.onclick = function(){
    items.classList.remove('a02');
    items.classList.remove('a11');
    items.classList.remove('a21');
    items.classList.remove('a32');
    items.classList.remove('a50');
    items.classList.remove('a72');
    items.classList.remove('m22');
    items.classList.toggle('s21');
    items.classList.remove('zflp');
    items.classList.remove('zfld');
    btna02.classList.remove('active');
    btna11.classList.remove('active');
    btna21.classList.remove('active');
    btna32.classList.remove('active');
    btna50.classList.remove('active');
    btna72.classList.remove('active');
    btnm22.classList.remove('active');
    btns21.classList.toggle('active');
    btnzflp.classList.remove('active');
    btnzfld.classList.remove('active');
}
btnzflp.onclick = function(){
    items.classList.remove('a02');
    items.classList.remove('a11');
    items.classList.remove('a21');
    items.classList.remove('a32');
    items.classList.remove('a50');
    items.classList.remove('a72');
    items.classList.remove('m22');
    items.classList.remove('s21');
    items.classList.toggle('zflp');
    items.classList.remove('zfld');
    btna02.classList.remove('active');
    btna11.classList.remove('active');
    btna21.classList.remove('active');
    btna32.classList.remove('active');
    btna50.classList.remove('active');
    btna72.classList.remove('active');
    btnm22.classList.remove('active');
    btns21.classList.remove('active');
    btnzflp.classList.toggle('active');
    btnzfld.classList.remove('active');
}
btnzfld.onclick = function(){
    items.classList.remove('a02');
    items.classList.remove('a11');
    items.classList.remove('a21');
    items.classList.remove('a32');
    items.classList.remove('a50');
    items.classList.remove('a72');
    items.classList.remove('m22');
    items.classList.remove('s21');
    items.classList.remove('zflp');
    items.classList.toggle('zfld');
    btna02.classList.remove('active');
    btna11.classList.remove('active');
    btna21.classList.remove('active');
    btna32.classList.remove('active');
    btna50.classList.remove('active');
    btna72.classList.remove('active');
    btnm22.classList.remove('active');
    btns21.classList.remove('active');
    btnzflp.classList.remove('active');
    btnzfld.classList.toggle('active');
}
gsap.from('.header', { duration: 1, y: '-100%', ease: 'power3'})
gsap.to('.btn', {duration: 2, opacity: 100, ease: 'none', stagger: 0.2})
gsap.from('.project', {duration: 2, opacity: 0, ease: 'power2'})