function ImportViewAssistant() {
}

ImportViewAssistant.prototype.setup = function() {
    var title = this.controller.get('siteViewTitle');
    var summary = this.controller.get('siteViewSummary');
    title.innerHTML = "hCard Contact Importer";
    summary.innerHTML = "Please choose some hCards to import:";
};

ImportViewAssistant.prototype.activate = function(event) {
};

ImportViewAssistant.prototype.deactivate = function(event) {
};

ImportViewAssistant.prototype.cleanup = function(event) {
};
