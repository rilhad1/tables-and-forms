$(function() {
    $('input[type=submit').click(sendData);
})

function sendData(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/rilhad1@gmail.com",
        method: "POST",
        data: {
            name: $('#name').val(),
            age: $('#age').val(),
            gender: $('input:radio[name=gender]:checked').val(),
            pet: $('#pet').val(),
            settlement: $('input:radio[name=settlement]:checked').val(),
            settlementother: $('#settlement').val(),
            hobby: $('input:checkbox:checked').val(function(){
                if (input:checkbox:checked)
                return name;}),
            transport: $('select#transport option:selected').val(),
        },
        dataType: "json"
    }).done(function() {
        $('form')[0].reset();
        // $('#thanks').show();
    })
}
