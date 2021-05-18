let reader= new FileReader();

function load_file(){
    let files = document.getElementById('myfile').files;
    let file=files[0];
    reader.addEventListener('loadend', print_file);
    reader.readAsArrayBuffer(file);
}

function print_file(e){
    let result=reader.result;
    const uint8_view = new Uint8Array(result);

    var main_jconf = document.getElementById('main.jconf');
    var gmm_jconf = document.getElementById('gmm.jconf');
    var wav_config = document.getElementById('wav_config');
//console.log(main_jconf.value);
//console.log(gmm_jconf.value);
//console.log(wav_config.value);
    FS.writeFile('mytape', uint8_view)
    Module.ccall('file_uploaded', 'number', ['string', 'string', 'string', 'string'], ['mytape', main_jconf.value, gmm_jconf.value, wav_config.value])
}
