let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
if (galleryImages){
    galleryImages.forEach( function(image , index){
        image.onclick = function(){
            let getElementCss = window.getComputedStyle(image);
            let getFullImageUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos =  getFullImageUrl.split("/images/");
            let setNewImgUrl =  getImgUrlPos[1].replace('")',"");
            getLatestOpenedImg = index + 1;
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");
            let newImg =  document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src","images/"+ setNewImgUrl ) ;
            newImg.setAttribute("id","current-img" ) ;

            // newImg.onload=function(){ 
                 //  the this here referes to the element that has the onload event
                // let imgWidth = this.width;
                // let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

                //  create a next button

                // let newNextBtn = document.createElement("a");
                // let btnNextText = document.createTextNode("Next");
                // newNextBtn.appendChild(btnNextText);
                // container.appendChild(newNextBtn);
                // newNextBtn.setAttribute("class","img-btn-next");
                // newNextBtn.setAttribute("onclick","changeimg(1)");
                // newNextBtn.style.cssText="right: " +calcImgToEdge+ "px;";
    
                // create a previous button
                // let newPrevBtn = document.createElement("a");
                // let btnPrevText = document.createTextNode("Prev");
                // newPrevBtn.appendChild(btnPrevText);
                // container.appendChild(newPrevBtn);
                // newPrevBtn.setAttribute("class","img-btn-prev");
                // newPrevBtn.setAttribute("onclick","changeimg(0)");
                // newPrevBtn.style.cssText="left: " +calcImgToEdge+ "px;";

            // }
           
        }
    });
}
    function closeImg(){
        document.querySelector(".img-window").remove();
        // document.querySelector(".img-btn-next").remove();
        // document.querySelector(".img-btn-prev").remove();
    }

// function changeimg(changedir){
//     document.querySelector("#current-img").remove();
//     let getImgWindow = document.querySelector(".img-window");
//     newImg=document.createElement("img");
//     getImgWindow.appendChild("newImg");
//     let calcNewImg;
//     if(changedir === 1){
//         calcNewImg = getLatestOpenedImg + 1;
//         if(calcNewImg > galleryImages.length ){
//             calcNewImg = 1;
//         }
//     }else if(changedir === 0){
//         calcNewImg = getLatestOpenedImg - 1;
//         if(calcNewImg < 1 ){
//             calcNewImg = galleryImages.length ;
         
//         }
//     }
//     newImg=setAttribute("src", "images/" +calcNewImg+ ".jpg");
   
//     newImg=setAttribute("id","current-img");
//     getLatestOpenedImg =   calcNewImg ;
    
//  }
