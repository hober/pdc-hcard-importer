function SiteViewAssistant() {
}

SiteViewAssistant.prototype.importHandler = function() {
    this.sceneAssistant.outputDisplay.innerHTML = "Thanks!";
};

SiteViewAssistant.prototype.setup = function() {
    var title = this.controller.get('siteViewTitle');
    var summary = this.controller.get('siteViewSummary');
    title.innerHTML = "hCard Contact Importer";
    summary.innerHTML = "Please enter the URL to import:";
    this.urlModel = {value: "http://"};
    this.controller.setupWidget("urlToImport", {
        hintText: "",
        autoReplace: false,
        textCase: Mojo.Widget.steModeLowerCase,
        enterSubmits: false
    }, this.urlModel);
    this.importModel = {label: "Import", disabled: false};
    this.controller.setupWidget("importButton", {
        type: Mojo.Widget.activityButton},
        this.importModel);
    this.controller.listen("importButton", Mojo.Event.tap,
        this.importHandler.bindAsEventListener(this));
};

SiteViewAssistant.prototype.activate = function(event) {
};

SiteViewAssistant.prototype.deactivate = function(event) {
};

SiteViewAssistant.prototype.cleanup = function(event) {
};
