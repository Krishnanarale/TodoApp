$(document).ready(function () {
    $('.btn-primary').click(function () {
        $.ajax({
            url: "/addTask",
            dataType: "json",
            type: 'POST',
            data: { task: $('#task').val() },
            success: function (res) {
                if (res.status === 'success') {
                    window.location.reload();
                } else {
                    console.log(res);
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
});

function deleteTask(id) {
    $.ajax({
        url: "/deleteTask",
        dataType: "json",
        type: 'DELETE',
        data: { id: id },
        success: function (res) {
            if (res.status === 'success') {
                window.location.reload();
            } else {
                console.log(res);
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}