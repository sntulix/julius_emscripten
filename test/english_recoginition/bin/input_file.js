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

    var julius_jconf = document.getElementById('julius.jconf');
    var dnn_jconf = document.getElementById('dnn.jconf');
    var wav_config = document.getElementById('wav_config');
//console.log(julius_jconf.value);
//console.log(dnn_jconf.value);
//console.log(wav_config.value);
    FS.writeFile('input.wav', uint8_view)
    Module.ccall('file_uploaded', 'number', ['string', 'string', 'string', 'string'], ['input.wav', julius_jconf.value, dnn_jconf.value, wav_config.value])
}
