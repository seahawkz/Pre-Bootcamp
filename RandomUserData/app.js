$(document).ready(function () {
    $.get("https://randomuser.me/api/?results=11.", function (data) {
        var results = data.results;
        for (var i = 0; i < results.length; i++) {
            var name = results[i].name;
            var age = results[i].dob;
            var email = results[i].email;
            var location = results[i].location;
            //Create empty row
            var info = "";
            //Load info into row var
            info += "<tr>";
            info += "<td>" + `${name.first} ${name.last}` + "</td>";
            info += "<td>" + `${age.age}` + "</td>";
            info += "<td>" + email + "</td>";
            info +=
                "<td>" +
                `${location.street.number} ${location.street.name}, ${location.state} ${location.postcode}` +
                "</td>";
            info += "</tr>";
            //INSERTING ROWS INTO TABLE
            $("#userdata").append(info);
        }
    });
});
