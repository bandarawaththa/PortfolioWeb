$("#summaryButton").click(function () {
    hideAll();
    $("#summary").css("display","block");
});
$("#addOrderButton").click(function () {
    hideAll();
    $("#addOrder").css("display","block");
});
$("#manageCusButton").click(function () {
    hideAll();
    $("#manageCus").css("display","none");
});
function hideAll() {
    $("#summary").css("display","none");
    $("#addOrder").css("display","none");
    $("#manageCus").css("display","none");
}
$("#dropdownCustomerCus1").click(function () {
    $('#addOrderCusNIC').text("990150184V");
    $('#addOrderCusName').text("Charaka Janith");
});

$("#dropdownBtnTestingAgain").click(function () {
    $('#addOrderItemID').text("IT001");
    $('#addOrderItemPrice').text("100.00");
    $('#addOrderStoresQTY').text("500");
});

$("#addOrderAddItem").click(function () {
    var qty = $('#addOrderTXTItemQty').val();
    var id = $('#addOrderItemID').text();
    var price = $('#addOrderItemPrice').text();
    var tot = (+qty) * (+price);
    $('#addOrderTableBody').append("<tr><td>" + id + "</td><td> Item1 </td><td>" + price + "</td><td>" + qty + "</td><td>" + tot +"</td></tr>");

    $('#addOrderItemTable').children('tbody').children().click(function () {
        var id = $($(this).children()[0]).text();
        var price = $($(this).children()[2]).text();
        var qty = $($(this).children()[3]).text();
        $('#addOrderItemID').text(id);
        $('#addOrderItemPrice').text(price);
        $('#addOrderTXTItemQty').val(qty);
    });

    $('#addOrderItemTable tr').on("dblclick", function () {
        $(this).fadeOut(2000);
    })
});