function HoraData() {
    var time_string_utc = some_server_variable; // UTC time from server
    var time_string_utc_epoch = Date.parse(YYYY-MM-DDTHH:MM:SS);
    var time_utc = new Date();
    time_utc.setTime(time_string_utc_epoch);
    document.write(time_utc);
}