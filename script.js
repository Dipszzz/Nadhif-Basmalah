let konfirmasi = confirm("HAYYUK LAH BRO MAIN");
let rules = confirm("RULES: TEBAKLAH ANGKA DARI 1 SAMPAI 10");
let spirit = confirm("SELAMAT MENCOBA!!!");

while (konfirmasi == true) {
let AngkaRandom = Math.floor(Math.random() * 10 + 1);
console.log(AngkaRandom);
let masukanuser = prompt("GAS BRO PLIH ANGKA!");
    if (AngkaRandom == masukanuser) {
        alert("BENAR")
        konfirmasi = confirm("LANJUT GA BRO?");      
    } else if(masukanuser < AngkaRandom) {
        alert("ANGKANYA TERLALU KECIL BRO")
        konfirmasi = confirm("LANJUT GA BRO?");      
    } else if(masukanuser > AngkaRandom) {
        alert("ANGKANYA TERLALU BESAR BRO")
    konfirmasi = confirm("LANJUT GA BRO?");
    }else{
        konfirmasi = false
    }
    
    while(masukanuser != AngkaRandom && konfirmasi == true){
        masukanuser = parseInt(prompt("GAS BRO PLIH ANGKA!"));
        if (AngkaRandom == masukanuser) {
            alert("BENAR")
            konfirmasi = confirm("LANJUT GA BRO?");      
        } else if(masukanuser < AngkaRandom) {
            alert("ANGKANYA TERLALU KECIL BRO")
            konfirmasi = confirm("LANJUT GA BRO?");      
        } else if(masukanuser > AngkaRandom) {
            alert("ANGKANYA TERLALU BESAR BRO")
            konfirmasi = confirm("LANJUT GA BRO?");      
        }else{
            konfirmasi = false;
        }
        console.log(masukanuser);
     }
}
let udahan = confirm("BABAYYY");