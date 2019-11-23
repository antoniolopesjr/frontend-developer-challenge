var jsonnomeprod1, jsonnomeprod2, jsonnomeprod3, jsonnomeprod4, jsonnomeprod5, jsonnomeprod6, jsonnomeprod7,
    jsonnomeprod8;
var jsondesc1, jsondesc2, jsondesc3, jsondesc4, jsondesc5, jsondesc6, jsondesc7, jsondesc8;
var jsonimg1, jsonimg2, jsonimg3, jsonimg4, jsonimg5, jsonimg6, jsonimg7, jsonimg8;
var jsonprecovelho1, jsonprecovelho2, jsonprecovelho3, jsonprecovelho4, jsonprecovelho5, jsonprecovelho6,
    jsonprecovelho7, jsonprecovelho8;
var jsonprecoreal1, jsonprecoreal2, jsonprecoreal3, jsonprecoreal4, jsonprecoreal5, jsonprecoreal6,
    jsonprecoreal7, jsonprecorea8;
var jsonprecoparc1, jsonprecoparc2, jsonprecoparc3, jsonprecoparc4, jsonprecoparc5, jsonprecoparc6,
    jsonprecoparc7, jsonprecoparc8;


$(function () {
    $.ajax({
        url: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1',
        type: 'GET',

        success: function (data, status, xhr) {

            for (var i in data.products) {

                //
                jsonprecoparc1 = parseFloat(data.products[0].price);
                document.getElementById("precoparcelado1").innerHTML = 'Ou: 2X de R$ ' +
                    ((jsonprecoparc1 / 2).toFixed(2)).replace('.', ',');

                jsonprecoparc2 = parseFloat(data.products[1].price);
                document.getElementById("precoparcelado2").innerHTML = 'Ou: 2X de R$ ' +
                    ((jsonprecoparc2 / 2).toFixed(2)).replace('.', ',');

                jsonprecoparc3 = parseFloat(data.products[2].price);
                document.getElementById("precoparcelado3").innerHTML = 'Ou: 2X de R$ ' +
                    ((jsonprecoparc3 / 2).toFixed(2)).replace('.', ',');

                jsonprecoparc4 = parseFloat(data.products[3].price);
                document.getElementById("precoparcelado4").innerHTML = 'Ou: 2X de R$ ' +
                    ((jsonprecoparc4 / 2).toFixed(2)).replace('.', ',');

                jsonprecoparc5 = parseFloat(data.products[4].price);
                document.getElementById("precoparcelado5").innerHTML = 'Ou: 2X de R$ ' +
                    ((jsonprecoparc5 / 2).toFixed(2)).replace('.', ',');

                jsonprecoparc6 = parseFloat(data.products[5].price);
                document.getElementById("precoparcelado6").innerHTML = 'Ou: 2X de R$ ' +
                    ((jsonprecoparc6 / 2).toFixed(2)).replace('.', ',');

                jsonprecoparc7 = parseFloat(data.products[6].price);
                document.getElementById("precoparcelado7").innerHTML = 'Ou: 2X de R$ ' +
                    ((jsonprecoparc7 / 2).toFixed(2)).replace('.', ',');

                jsonprecoparc8 = parseFloat(data.products[7].price);
                document.getElementById("precoparcelado8").innerHTML = 'Ou: 2X de R$ ' +
                    ((jsonprecoparc8 / 2).toFixed(2)).replace('.', ',');



                //
                jsonprecovelho1 = parseFloat(data.products[0].oldPrice);
                document.getElementById("precovelho1").innerHTML = 'De: R$ ' + ((
                    jsonprecovelho1).toFixed(2)).replace('.', ',');

                jsonprecovelho2 = parseFloat(data.products[1].oldPrice);
                document.getElementById("precovelho2").innerHTML = 'De: R$ ' + ((
                    jsonprecovelho2).toFixed(2)).replace('.', ',');

                jsonprecovelho3 = parseFloat(data.products[2].oldPrice);
                document.getElementById("precovelho3").innerHTML = 'De: R$ ' + ((
                    jsonprecovelho3).toFixed(2)).replace('.', ',');

                jsonprecovelho4 = parseFloat(data.products[3].oldPrice);
                document.getElementById("precovelho4").innerHTML = 'De: R$ ' + ((
                    jsonprecovelho4).toFixed(2)).replace('.', ',');

                jsonprecovelho5 = parseFloat(data.products[4].oldPrice);
                document.getElementById("precovelho5").innerHTML = 'De: R$ ' + ((
                    jsonprecovelho5).toFixed(2)).replace('.', ',');

                jsonprecovelho6 = parseFloat(data.products[5].oldPrice);
                document.getElementById("precovelho6").innerHTML = 'De: R$ ' + ((
                    jsonprecovelho6).toFixed(2)).replace('.', ',');

                jsonprecovelho7 = parseFloat(data.products[6].oldPrice);
                document.getElementById("precovelho7").innerHTML = 'De: R$ ' + ((
                    jsonprecovelho7).toFixed(2)).replace('.', ',');

                jsonprecovelho8 = parseFloat(data.products[7].oldPrice);
                document.getElementById("precovelho8").innerHTML = 'De: R$ ' + ((
                    jsonprecovelho8).toFixed(2)).replace('.', ',');


                //
                jsonprecoreal1 = 'Por: R$ ' + data.products[0].price;
                document.getElementById("precoreal1").innerHTML = jsonprecoreal1;

                jsonprecoreal2 = 'Por: R$ ' + data.products[1].price;
                document.getElementById("precoreal2").innerHTML = jsonprecoreal2;

                jsonprecoreal3 = 'Por: R$ ' + data.products[2].price;
                document.getElementById("precoreal3").innerHTML = jsonprecoreal3;

                jsonprecoreal4 = 'Por: R$ ' + data.products[3].price;
                document.getElementById("precoreal4").innerHTML = jsonprecoreal4;

                jsonprecoreal5 = 'Por: R$ ' + data.products[4].price;
                document.getElementById("precoreal5").innerHTML = jsonprecoreal5;

                jsonprecoreal6 = 'Por: R$ ' + data.products[5].price;
                document.getElementById("precoreal6").innerHTML = jsonprecoreal6;

                jsonprecoreal7 = 'Por: R$ ' + data.products[6].price;
                document.getElementById("precoreal7").innerHTML = jsonprecoreal7;

                jsonprecoreal8 = 'Por: R$ ' + data.products[7].price;
                document.getElementById("precoreal8").innerHTML = jsonprecoreal8;


                //
                jsonimg1 = 'http://' + data.products[0].image;
                document.getElementById("img1").src = jsonimg1;

                jsonimg2 = 'http://' + data.products[1].image;
                document.getElementById("img2").src = jsonimg2;

                jsonimg3 = 'http://' + data.products[2].image;
                document.getElementById("img3").src = jsonimg3;

                jsonimg4 = 'http://' + data.products[3].image;
                document.getElementById("img4").src = jsonimg4;

                jsonimg5 = 'http://' + data.products[4].image;
                document.getElementById("img5").src = jsonimg5;

                jsonimg6 = 'http://' + data.products[5].image;
                document.getElementById("img6").src = jsonimg6;

                jsonimg7 = 'http://' + data.products[6].image;
                document.getElementById("img7").src = jsonimg7;

                jsonimg8 = 'http://' + data.products[7].image;
                document.getElementById("img8").src = jsonimg8;


                //
                jsonnomeprod1 = data.products[0].name;
                document.getElementById("nomeprod1").innerHTML = jsonnomeprod1;

                jsonnomeprod2 = data.products[1].name;
                document.getElementById("nomeprod2").innerHTML = jsonnomeprod2;

                jsonnomeprod3 = data.products[2].name;
                document.getElementById("nomeprod3").innerHTML = jsonnomeprod3;

                jsonnomeprod4 = data.products[3].name;
                document.getElementById("nomeprod4").innerHTML = jsonnomeprod4;

                jsonnomeprod5 = data.products[4].name;
                document.getElementById("nomeprod5").innerHTML = jsonnomeprod5;

                jsonnomeprod6 = data.products[5].name;
                document.getElementById("nomeprod6").innerHTML = jsonnomeprod6;

                jsonnomeprod7 = data.products[6].name;
                document.getElementById("nomeprod7").innerHTML = jsonnomeprod7;

                jsonnomeprod8 = data.products[7].name;
                document.getElementById("nomeprod8").innerHTML = jsonnomeprod8;


                //
                jsondesc1 = data.products[0].description;
                document.getElementById("descprod1").innerHTML = jsondesc1;

                jsondesc2 = data.products[0].description;
                document.getElementById("descprod2").innerHTML = jsondesc2;

                jsondesc3 = data.products[0].description;
                document.getElementById("descprod3").innerHTML = jsondesc3;

                jsondesc4 = data.products[0].description;
                document.getElementById("descprod4").innerHTML = jsondesc4;

                jsondesc5 = data.products[0].description;
                document.getElementById("descprod5").innerHTML = jsondesc5;

                jsondesc6 = data.products[0].description;
                document.getElementById("descprod6").innerHTML = jsondesc6;

                jsondesc7 = data.products[0].description;
                document.getElementById("descprod7").innerHTML = jsondesc7;

                jsondesc8 = data.products[0].description;
                document.getElementById("descprod8").innerHTML = jsondesc8;
            }

            //output += "</ul>";

            // Output the data to the "artistList" element
            //document.getElementById("jsonteste").innerHTML = output;

            // Load the above function when the window loads
            //window.onload = displayArtists;

        },
        error: function (xhr, status, error) {
            //$("#json").html("Error: " + status + " " + error);
            console.log("Error: " + status + " " + error);
        }
    });
});