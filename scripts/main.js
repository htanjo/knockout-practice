function Updater () {
    var self = this;
    this.target = ko.observable();
    this.values = ko.observableArray();
    this.open = function (item) {
        $('#updater').removeClass('hide');
        self.target(item);
        self.getValues();
    };
    this.update = function (value) {
        self.target().value(value);
        $('#updater').addClass('hide');
    };
    this.getValues = function () {
        var selections = Math.floor(Math.random() * 5) + 1,   // random: 1-5
            i;
        self.values.removeAll();
        for (i = 0; i < selections; i++) {
            self.values.push(String(Math.floor(Math.random() * 10)));
        }
    };
}

function Item (value) {
    this.value = ko.observable(value);
}

function Application () {
    var self = this;
    this.list = ko.observableArray([
        new Item('7'),
        new Item('1'),
        new Item('4')
    ]);
    this.updater = new Updater();
    this.openUpdater = function (list) {
        self.updater.open(list);
    }
}

ko.applyBindings(new Application());
