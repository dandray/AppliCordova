var pictureSource;
var destinationType;

document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}
function getPhoto(imageData) {
    var image = document.getElementById('image');
    image.style.display = 'block';
    image.src = "data:image/jpeg;base64," + imageData;
}
function capturePhoto() {
    navigator.camera.getPicture(getPhoto, error, {allowEdit :false, quality: 100, saveToPhotoAlbum: true });
}
function error(errorMessage) {
    alert(errorMessage);
}