function selecionarCliente() {
    $("#selectcliente").html('');
    firebase.database().ref('/clientes').once('value').then(function (callback) {
        var vazia = "";
        $("#selectcliente").append("<option value = '" + vazia + "'>" + vazia + "</option>");
        var clientes = callback.val();
        for (var key in clientes) {
            var nome = clientes[key].nome;
            var sobrenome = clientes[key].sobrenome;
            $("#selectcliente").append("<option value = '" + key + "'>" + nome + sobrenome + "</option>");
        }
    });
};
function selecionarServico() {
    $("#selectservico").html('');
    firebase.database().ref('/servicos').once('value').then(function (callback) {
        var servicos = callback.val();
        var vazia = "";
        $("#selectservico").append("<option value = '" + vazia + "'>" + vazia + "</option>");
        for (var key in servicos) {
            var nome = servicos[key].nomeServico;
            $("#selectservico").append("</option><option value = '" + key + "'>" + nome + "</option>");
        }
    });
};

function init_calendar() {

    if (typeof ($.fn.fullCalendar) === 'undefined') {
        return;
    }
    console.log('init_calendar');

    var date = new Date(),
        d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear(),
        started,
        categoryClass;

    var calendar = $('#calendar').fullCalendar({

        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
        },
        selectable: true,
        selectHelper: true,


        /* criar eventro */
        select: function (start, end, allDay) {
            selecionarCliente();
            selecionarServico();
            $('#fc_create').click();

            started = start;
            ended = end;

            $(".antosubmit").on("click", function () {
                var title = $("#selectcliente").text();
                

                categoryClass = $("#event_type").val();

                if (title) {
                    calendar.fullCalendar('renderEvent', {
                            title: title,
                            start: started,
                            end: ended
                        },
                        true // make the event "stick"
                    );
                }

                $('#selectcliente').text('');

                calendar.fullCalendar('unselect');

                $('.antoclose').click();

                return false;
            });
        },

        /* editar evento */
        eventClick: function (calEvent, jsEvent, view) {
            selecionarCliente();
            selecionarServico();
            $('#fc_edit').click();
        
            $('#title').val(calEvent.title);

            categoryClass = $("#event_type").val();

            $(".antosubmit2").on("click", function () {
                calEvent.title = $("#selectcliente").text();

                calendar.fullCalendar('updateEvent', calEvent);
                $('.antoclose2').click();
            });

            calendar.fullCalendar('unselect');
        },
        editable: true,
        events: []
    });
};


$(document).ajaxComplete(function () {
    init_calendar();
    $('#calendar').fullCalendar('changeView', 'agendaWeek');
});