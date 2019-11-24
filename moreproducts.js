function mostrarMaisProdutos() {


    jQuery(".someBotao").addClass("some");
    jQuery(".mais-produtos").addClass("show");
}


var jsonMaisnomeprod1, jsonMaisnomeprod2, jsonMaisnomeprod3, jsonMaisnomeprod4, jsonMaisnomeprod5,
    jsonMaisnomeprod6, jsonMaisnomeprod7,
    jsonMaisnomeprod8;
var jsonMaisdesc1, jsonMaisdesc2, jsonMaisdesc3, jsonMaisdesc4, jsonMaisdesc5, jsonMaisdesc6,
    jsonMaisdesc7,
    jsonMaisdesc8;
var jsonMaisimg1, jsonMaisimg2, jsonMaisimg3, jsonMaisimg4, jsonMaisimg5, jsonMaisimg6, jsonMaisimg7,
    jsonMaisimg8;
var jsonMaisprecovelho1, jsonMaisprecovelho2, jsonMaisprecovelho3, jsonMaisprecovelho4,
    jsonMaisprecovelho5,
    jsonMaisprecovelho6,
    jsonMaisprecovelho7, jsonMaisprecovelho8;
var jsonMaisprecoreal1, jsonMaisprecoreal2, jsonMaisprecoreal3, jsonMaisprecoreal4, jsonMaisprecoreal5,
    jsonMaisprecoreal6,
    jsonMaisprecoreal7, jsonprecorea8;
var jsonMaisprecoparc1, jsonMaisprecoparc2, jsonMaisprecoparc3, jsonMaisprecoparc4, jsonMaisprecoparc5,
    jsonMaisprecoparc6,
    jsonMaisprecoparc7, jsonMaisprecoparc8;


$(function () {
    $.ajax({
        url: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2',
        type: 'GET',

        success: function (data, status, xhr) {
            //$("#json").html(data);
            //console.log(data);

            // Loop through the artists
            for (var i in data.products) {

                //
                jsonMaisprecoparc1 = parseFloat(data.products[0].price);
                document.getElementById("maisprecoparcelado1").innerHTML =
                    'Ou: 2X de R$ ' +
                    ((jsonMaisprecoparc1 / 2).toFixed(2)).replace('.', ',');

                jsonMaisprecoparc2 = parseFloat(data.products[1].price);
                document.getElementById("maisprecoparcelado2").innerHTML =
                    'Ou: 2X de R$ ' +
                    ((jsonMaisprecoparc2 / 2).toFixed(2)).replace('.', ',');

                jsonMaisprecoparc3 = parseFloat(data.products[2].price);
                document.getElementById("maisprecoparcelado3").innerHTML =
                    'Ou: 2X de R$ ' +
                    ((jsonMaisprecoparc3 / 2).toFixed(2)).replace('.', ',');

                jsonMaisprecoparc4 = parseFloat(data.products[3].price);
                document.getElementById("maisprecoparcelado4").innerHTML =
                    'Ou: 2X de R$ ' +
                    ((jsonMaisprecoparc4 / 2).toFixed(2)).replace('.', ',');

                jsonMaisprecoparc5 = parseFloat(data.products[4].price);
                document.getElementById("maisprecoparcelado5").innerHTML =
                    'Ou: 2X de R$ ' +
                    ((jsonMaisprecoparc5 / 2).toFixed(2)).replace('.', ',');

                jsonMaisprecoparc6 = parseFloat(data.products[5].price);
                document.getElementById("maisprecoparcelado6").innerHTML =
                    'Ou: 2X de R$ ' +
                    ((jsonMaisprecoparc6 / 2).toFixed(2)).replace('.', ',');

                jsonMaisprecoparc7 = parseFloat(data.products[6].price);
                document.getElementById("maisprecoparcelado7").innerHTML =
                    'Ou: 2X de R$ ' +
                    ((jsonMaisprecoparc7 / 2).toFixed(2)).replace('.', ',');

                jsonMaisprecoparc8 = parseFloat(data.products[7].price);
                document.getElementById("maisprecoparcelado8").innerHTML =
                    'Ou: 2X de R$ ' +
                    ((jsonMaisprecoparc8 / 2).toFixed(2)).replace('.', ',');



                //
                jsonMaisprecovelho1 = 'De: R$ ' + data.products[0].oldPrice;
                document.getElementById("maisprecovelho1").innerHTML =
                    jsonMaisprecovelho1;

                jsonMaisprecovelho2 = 'De: R$ ' + data.products[1].oldPrice;
                document.getElementById("maisprecovelho2").innerHTML =
                    jsonMaisprecovelho2;

                jsonMaisprecovelho3 = 'De: R$ ' + data.products[2].oldPrice;
                document.getElementById("maisprecovelho3").innerHTML =
                    jsonMaisprecovelho3;

                jsonMaisprecovelho4 = 'De: R$ ' + data.products[3].oldPrice;
                document.getElementById("maisprecovelho4").innerHTML =
                    jsonMaisprecovelho4;

                jsonMaisprecovelho5 = 'De: R$ ' + data.products[4].oldPrice;
                document.getElementById("maisprecovelho5").innerHTML =
                    jsonMaisprecovelho5;

                jsonMaisprecovelho6 = 'De: R$ ' + data.products[5].oldPrice;
                document.getElementById("maisprecovelho6").innerHTML =
                    jsonMaisprecovelho6;

                jsonMaisprecovelho7 = 'De: R$ ' + data.products[6].oldPrice;
                document.getElementById("maisprecovelho7").innerHTML =
                    jsonMaisprecovelho7;

                jsonMaisprecovelho8 = 'De: R$ ' + data.products[7].oldPrice;
                document.getElementById("maisprecovelho8").innerHTML =
                    jsonMaisprecovelho8;


                //
                jsonMaisprecoreal1 = 'Por: R$ ' + data.products[0].price;
                document.getElementById("maisprecoreal1").innerHTML =
                    jsonMaisprecoreal1;

                jsonMaisprecoreal2 = 'Por: R$ ' + data.products[1].price;
                document.getElementById("maisprecoreal2").innerHTML =
                    jsonMaisprecoreal2;

                jsonMaisprecoreal3 = 'Por: R$ ' + data.products[2].price;
                document.getElementById("maisprecoreal3").innerHTML =
                    jsonMaisprecoreal3;

                jsonMaisprecoreal4 = 'Por: R$ ' + data.products[3].price;
                document.getElementById("maisprecoreal4").innerHTML =
                    jsonMaisprecoreal4;

                jsonMaisprecoreal5 = 'Por: R$ ' + data.products[4].price;
                document.getElementById("maisprecoreal5").innerHTML =
                    jsonMaisprecoreal5;

                jsonMaisprecoreal6 = 'Por: R$ ' + data.products[5].price;
                document.getElementById("maisprecoreal6").innerHTML =
                    jsonMaisprecoreal6;

                jsonMaisprecoreal7 = 'Por: R$ ' + data.products[6].price;
                document.getElementById("maisprecoreal7").innerHTML =
                    jsonMaisprecoreal7;

                jsonMaisprecoreal8 = 'Por: R$ ' + data.products[7].price;
                document.getElementById("maisprecoreal8").innerHTML =
                    jsonMaisprecoreal8;


                //
                jsonMaisimg1 = 'http://' + data.products[0].image;
                document.getElementById("maisimg1").src = jsonMaisimg1;

                jsonMaisimg2 = 'http://' + data.products[1].image;
                document.getElementById("maisimg2").src = jsonMaisimg2;

                jsonMaisimg3 = 'http://' + data.products[2].image;
                document.getElementById("maisimg3").src = jsonMaisimg3;

                jsonMaisimg4 = 'http://' + data.products[3].image;
                document.getElementById("maisimg4").src = jsonMaisimg4;

                jsonMaisimg5 = 'http://' + data.products[4].image;
                document.getElementById("maisimg5").src = jsonMaisimg5;

                jsonMaisimg6 = 'http://' + data.products[5].image;
                document.getElementById("maisimg6").src = jsonMaisimg6;

                jsonMaisimg7 = 'http://' + data.products[6].image;
                document.getElementById("maisimg7").src = jsonMaisimg7;

                jsonMaisimg8 = 'http://' + data.products[7].image;
                document.getElementById("maisimg8").src = jsonMaisimg8;


                //
                jsonMaisnomeprod1 = data.products[0].name;
                document.getElementById("maisnomeprod1").innerHTML =
                    jsonMaisnomeprod1;

                jsonMaisnomeprod2 = data.products[1].name;
                document.getElementById("maisnomeprod2").innerHTML =
                    jsonMaisnomeprod2;

                jsonMaisnomeprod3 = data.products[2].name;
                document.getElementById("maisnomeprod3").innerHTML =
                    jsonMaisnomeprod3;

                jsonMaisnomeprod4 = data.products[3].name;
                document.getElementById("maisnomeprod4").innerHTML =
                    jsonMaisnomeprod4;

                jsonMaisnomeprod5 = data.products[4].name;
                document.getElementById("maisnomeprod5").innerHTML =
                    jsonMaisnomeprod5;

                jsonMaisnomeprod6 = data.products[5].name;
                document.getElementById("maisnomeprod6").innerHTML =
                    jsonMaisnomeprod6;

                jsonMaisnomeprod7 = data.products[6].name;
                document.getElementById("maisnomeprod7").innerHTML =
                    jsonMaisnomeprod7;

                jsonMaisnomeprod8 = data.products[7].name;
                document.getElementById("maisnomeprod8").innerHTML =
                    jsonMaisnomeprod8;


                //
                jsonMaisdesc1 = data.products[0].description;
                document.getElementById("maisdescprod1").innerHTML = jsonMaisdesc1;

                jsonMaisdesc2 = data.products[0].description;
                document.getElementById("maisdescprod2").innerHTML = jsonMaisdesc2;

                jsonMaisdesc3 = data.products[0].description;
                document.getElementById("maisdescprod3").innerHTML = jsonMaisdesc3;

                jsonMaisdesc4 = data.products[0].description;
                document.getElementById("maisdescprod4").innerHTML = jsonMaisdesc4;

                jsonMaisdesc5 = data.products[0].description;
                document.getElementById("maisdescprod5").innerHTML = jsonMaisdesc5;

                jsonMaisdesc6 = data.products[0].description;
                document.getElementById("maisdescprod6").innerHTML = jsonMaisdesc6;

                jsonMaisdesc7 = data.products[0].description;
                document.getElementById("maisdescprod7").innerHTML = jsonMaisdesc7;

                jsonMaisdesc8 = data.products[0].description;
                document.getElementById("maisdescprod8").innerHTML = jsonMaisdesc8; 
            }
        },
        error: function (xhr, status, error) {
            //$("#json").html("Error: " + status + " " + error);
            console.log("Error: " + status + " " + error);
        }
    });
});
