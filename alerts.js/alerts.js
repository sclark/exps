var Alerts = {
    _alertId: 0,
    _alertDiv: document.createElement("div"),
    removeAlert: function(id) {
        var alerts = this._alertDiv.childNodes;
        for (var i = 0; i < alerts.length; i++) {
            if (alerts[i].id === id.toString(10)) {
                this._alertDiv.removeChild(alerts[i]);
                return true;
            }
        }
        return false;
    },
    showAlert: function(message, timeout) {
        var id = this._alertId++;
        var p = document.createElement("div");
        p.innerText = message;
        p.id = id.toString(10);
        this._alertDiv.appendChild(p);
        if (typeof timeout !== 'undefined')
            setTimeout(function(){ Alerts.removeAlert(id); }, timeout);
        return id;
    }
}

window.addEventListener('load', function() {
    Alerts._alertDiv.id = "alerts";
    document.body.appendChild(Alerts._alertDiv);
});
