let x_1 = 0
let x_2 = 0
let x_3 = 0
let x_4 = 0
let prefijo = 0
let language = "";
let alerta = "";
let tipos = [];
let host = 0;
let background = "blue";

let data = {
        mac_address: new Array(32).fill(false),
        integers_1: new Array(8).fill(0),
        integers_2: new Array(8).fill(0),
        integers_3: new Array(8).fill(0),
        integers_4: new Array(8).fill(0),
        num_mask: new Array(4).fill(0),
        gateway: [],
        red: "",
        host: "",
        networkAddress: ""
    };
function calculate(){
    limpia();
    idioma();
    verificar();
    calculateBinary();
    paintBinary();
    calculateSubnet();
    networkAddress();
    broadcast();
    gateway();
    clase();
    tipo();
    hosts();
    listaIpUtiles();
}
function listaIpUtiles(){
    x[3] --;
    if(x[3] == -1){
        x[3] = 255;
        x[2] --;
    }
    if(x[2] == -1 ){
        x[2] = 255;
        x[1] --;
    }
    if(x[1] == -1){
        x[1] = 255;
        x[0] --;
    }
    if(x[0] == -1){
        x[0] = 255;
    }
    document.getElementById("listUtilIp").innerHTML += `[${data.gateway.join(".")}]-[${x.join(".")}]`;
}
function changeColor(color){
    document.body.classList.remove(background);
    document.body.classList.add(color);
    background = color;
}
function hosts(){
    ceros = 32 - prefijo;
    host = Math.pow(2,ceros) - 2;
    document.getElementById("hosts").innerHTML += host;
}
function tipo(){
    x_1 = parseInt(document.getElementById("input-number-1").value);
    x_2 = parseInt(document.getElementById("input-number-2").value);
    x_3 = parseInt(document.getElementById("input-number-3").value);
    x_4 = parseInt(document.getElementById("input-number-4").value);
    let tipo = true;
    if(x_1 == 10){
        tipo = false;
    }else if (x_1 == 172 && x_2 <= 172 && x_2 >= 31){
        tipo = false;
    }else if(x_1 == 192 && x_2 ==168){
        tipo =false;
    }
    if(tipo){
        document.getElementById("type").innerHTML += tipos[0];
    }else{
        document.getElementById("type").innerHTML += tipos[1];
    }
}
function clase(){
    x_1 = parseInt(document.getElementById("input-number-1").value);
    x_2 = parseInt(document.getElementById("input-number-2").value)
    x_3 = parseInt(document.getElementById("input-number-3").value);
    x_4 = parseInt(document.getElementById("input-number-4").value);
    let clases = ""
    if(x_1 <= 128){
        clases = "A"
    }else if(x_1 >= 128 && x_1 <= 191){
        clases = "B"
    }else if(x_1 >= 192 && x_1 <= 223){
        clases = "C"
    }else if(x_1 < 240){
        clases = "D"
    }else{
        clases = "E"
    }
    document.getElementById("classs").innerHTML += clases;
}
function limpia(){
    data = {
        mac_address: new Array(32).fill(false),
        integers_1: new Array(8).fill(0),
        integers_2: new Array(8).fill(0),
        integers_3: new Array(8).fill(0),
        integers_4: new Array(8).fill(0),
        num_mask: new Array(4).fill(0), 
        red: "",
        host: "",
        networkAddress: ""
    };
    changeLanguage(document.documentElement.lang);
}
function gateway(){
    data.gateway[3] += 1
    if(data.gateway[3] > 255){
        data.gateway[3] = 0;
        data.gateway[2] += 1;
    }
    if(data.gateway[2] > 255){
        data.gateway[2] = 0;
        data.gateway[1] += 1;
    }if(data.gateway[1] > 255){
        data.gateway[1] = 0;
        data.gateway[0] += 1;
    }if(data.gateway[0] > 255){
        limpia();
        idioma();
        prefijo = NaN;
        verificar();
    }
    document.getElementById("gateway").innerHTML += data.gateway.join(".");
}
function broadcast(){
    let network_bin = new Array(32).fill(0)
    let array = `${data.integers_1.join("")}${data.integers_2.join("")}${data.integers_3.join("")}${data.integers_4.join("")}`;
    for(let i  = 0; i <= data.mac_address.length; i ++){
        if(data.mac_address[i] == true){
            network_bin[i] = array[i];
        }else{
            network_bin[i] = 1
        }
    }
    let network = [];
    for(i = 0; i < network_bin.length-1; i+=8){
        network.push(network_bin.join("").slice(i, i + 8));
    }
    //Estamos bien ahi
    x = new Array(4).fill(0);
    for(let i = 0; i < 4; i++){
        let t = 128;
        for(let j= 0; j < 8; j++){
            x[i] += t * network[i][j];
            t = t / 2;
        }
    }
    document.getElementById("broadcast").innerHTML += x.join(".");
}
function networkAddress(){
    let network_bin = new Array(32).fill(0)
    let array = `${data.integers_1.join("")}${data.integers_2.join("")}${data.integers_3.join("")}${data.integers_4.join("")}`;
    for(let i  = 0; i <= data.mac_address.length; i ++){
        if(data.mac_address[i] == true){
            network_bin[i] = array[i];
        }else{
            network_bin[i] = 0
        }
    }
    let network = [];
    for(i = 0; i < network_bin.length; i+=8){
        network.push(network_bin.join("").slice(i, i + 8));
    }
    //Estamos bien ahi
    x = new Array(4).fill(0);
    for(let i = 0; i < 4; i++){
        let t = 128;
        for(let j= 0; j < 8; j++){
            x[i] += t * network[i][j];
            t = t / 2;
        }
    }
    data.gateway = x
    document.getElementById("ip_red").innerHTML += x.join(".");
}
function calculateSubnet(){
    data.num_mask = new Array(4).fill(0); 
    for(let i = 0; i < prefijo; i++){
        data.mac_address[i] = true;
    }
    let nume=0;
    for(let i = 0; i < 32; i += 8 ){
        let l = 128;
        for(let j = 0; j < 8; j ++){
            if(data.mac_address[j+i]==true){
                data.num_mask[nume] += l;
            }
            l = l / 2;
        }
        nume++;
    }
    document.getElementById("subnet").innerHTML += data.num_mask.join(".")
};
function calculateBinary(){
    x_1 = parseInt(document.getElementById("input-number-1").value);
    x_2 = parseInt(document.getElementById("input-number-2").value)
    x_3 = parseInt(document.getElementById("input-number-3").value);
    x_4 = parseInt(document.getElementById("input-number-4").value);
    prefijo = parseInt(document.getElementById("prefix").value);
    for(let i = 7; i >= 0; i--){
        let bit_1 = x_1 % 2;
        let bit_2 = x_2 % 2;
        let bit_3 = x_3 % 2;
        let bit_4 = x_4 % 2;
        data.integers_1[i] = bit_1;
        data.integers_2[i] = bit_2;
        data.integers_3[i] = bit_3;
        data.integers_4[i] = bit_4;
        x_1 = Math.floor(x_1 / 2);
        x_2 = Math.floor(x_2 / 2);
        x_3 = Math.floor(x_3 / 2);
        x_4 = Math.floor(x_4 / 2);
    }
    
}
function paintBinary(){
    let result = `<span class="subrayado-color-rojo">`
    let contador = 0;
    for(let i = 0; i < prefijo+4; i ++ ){
        if( i < 8){
            result += data.integers_1[i];
        }else if(i == 8){
            result += '.';
        }else if(i < 17){
            result += data.integers_2[i-9];
        }else if(i == 17){
            result += '.';
        }else if(i < 26){
            result += data.integers_3[i-18];
        }else if(i == 26){
            result += '.';
        }else{
            result += data.integers_4[i-26];
        }
        contador ++;
    }
    result += '</span><span class="subrayado-color-verde">';
    for(let i = contador-1; i < 34; i ++ ){
        if( i < 8){
            result += data.integers_1[i];
        }else if(i == 8){
            result += '.';
        }else if(i < 17){
            result += data.integers_2[i-9];
        }else if(i == 17){
            result += '.';
        }else if(i < 26){
            result += data.integers_3[i-18];
        }else if(i == 26){
            result += '.';
        }else{
            result += data.integers_4[i-26];
        }
    }
    result += "</span>";
    document.getElementById("binarynumber").innerHTML += result;
}
function idioma(){
    let language = document.documentElement.lang;
    if(language == 'en'){
        alerta = "Atention: Please set up the ip address correctly.";
        tipos = ["Public","Private"]
    }else if(language == 'es'){
        alerta = "Atención: Porfavor ajuste la dirección IP correctamente";
        tipos = ["Público","Privado"]
    }
}
function verificar(){
    if(isNaN(prefijo) || isNaN(x_1) || isNaN(x_2) || isNaN(x_3) || isNaN(x_4)){
        alert(`${alerta}`);
    }
    if(isNaN(prefijo) && isNaN(x_1) && isNaN(x_2) && isNaN(x_3) && isNaN(x_4)){
        alert(`${alerta}`);
    }
    
}

